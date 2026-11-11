"""Browser smoke check. Start the local HTTP server on port 4173 first."""
from pathlib import Path
from playwright.sync_api import sync_playwright

ROOT = Path(__file__).resolve().parent.parent
ARTIFACTS = ROOT / "artifacts"
ARTIFACTS.mkdir(exist_ok=True)
BASE = "http://127.0.0.1:4173"

with sync_playwright() as p:
    browser = p.chromium.launch(executable_path="/usr/bin/chromium", headless=True,
                                args=["--no-sandbox"])
    context = browser.new_context(viewport={"width": 1440, "height": 1000})
    page = context.new_page()
    errors, failed_requests, bad_responses = [], [], []
    page.on("pageerror", lambda error: errors.append(str(error)))
    page.on("requestfailed", lambda request: failed_requests.append(request.url))
    page.on("response", lambda response: bad_responses.append(response.url)
            if response.status >= 400 else None)
    page.goto(BASE, wait_until="networkidle")
    assert page.locator("html").get_attribute("lang") == "en"
    assert "Beyond models" in page.locator("h1").inner_text()
    assert page.locator("a[href='mailto:hae081128@gmail.com']").count() == 1
    assert page.locator("a[href='https://github.com/candy-Heidi']").count() == 1
    for language in ("ko", "en"):
        page.locator(f"[data-language='{language}']").click()
        assert page.locator("html").get_attribute("lang") == language
        detail_states = set()
        for stage in ("serving", "quality", "delivery", "agent", "search"):
            page.locator(f"[data-stage='{stage}']").click()
            assert page.locator("[data-stage][aria-pressed='true']").count() == 1
            assert page.locator(f"[data-stage='{stage}']").get_attribute("aria-pressed") == "true"
            detail_states.add(page.locator("#stage-detail").inner_text())
        assert len(detail_states) == 5
    page.locator("[data-disclosure='paper-thesis'] summary").click()
    page.locator("[data-language='ko']").click()
    assert page.locator("[data-disclosure='paper-thesis']").evaluate("el => el.open")
    assert "쌓인 기록" in page.locator("#detail-title").inner_text()
    page.reload(wait_until="networkidle")
    assert page.locator("html").get_attribute("lang") == "ko"
    for width in (320, 375, 390, 768, 1024, 1440):
        page.set_viewport_size({"width": width, "height": 900})
        for language in ("en", "ko"):
            page.locator(f"[data-language='{language}']").click()
            assert page.evaluate("document.documentElement.scrollWidth <= innerWidth"), (width, language)
    page.set_viewport_size({"width": 390, "height": 950})
    page.locator(".menu-toggle").click()
    page.keyboard.press("Escape")
    assert page.locator(".menu-toggle").get_attribute("aria-expanded") == "false"
    page.locator(".menu-toggle").click()
    page.locator("#main-nav a[href='#projects']").click()
    assert page.locator(".menu-toggle").get_attribute("aria-expanded") == "false"
    for disclosure in page.locator("details").all():
        disclosure.locator("summary").focus()
        old = disclosure.evaluate("el => el.open")
        page.keyboard.press("Enter")
        assert disclosure.evaluate("el => el.open") != old
    page.locator("[data-stage='agent']").focus()
    page.keyboard.press("Enter")
    assert page.locator("[data-stage='agent']").get_attribute("aria-pressed") == "true"
    for anchor in page.locator("a[href^='#']").all():
        assert page.locator(anchor.get_attribute("href")).count() == 1
    for language in ("en", "ko"):
        for device, width, height in (("desktop", 1440, 1050), ("mobile", 390, 950)):
            page.set_viewport_size({"width": width, "height": height})
            page.goto(f"{BASE}/?lang={language}", wait_until="networkidle")
            assert page.locator("html").get_attribute("lang") == language
            # Move focus off links before screenshots, so focus indicators are not captured.
            page.locator("h1").click()
            page.screenshot(path=str(ARTIFACTS / f"{device}-{language}.png"), full_page=True)
            page.screenshot(path=str(ARTIFACTS / f"{device}-cover-{language}.png"))
    assert not errors, errors
    assert not failed_requests, failed_requests
    assert not bad_responses, bad_responses
    browser.close()
print("PASS: English default; EN/KOR; persisted choice; URL override; 5 workstreams; keyboard disclosures; mobile menu; internal/contact links; 12 viewport/language layouts; no loading or JS errors.")
