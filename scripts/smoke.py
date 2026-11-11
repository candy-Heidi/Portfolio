"""Check section navigation, reading size, bilingual content, and useful interactions."""
from pathlib import Path
from playwright.sync_api import sync_playwright

ROOT = Path(__file__).resolve().parent.parent
ARTIFACTS = ROOT / "artifacts"
ARTIFACTS.mkdir(exist_ok=True)
BASE = "http://127.0.0.1:4173"
ROUTES = ("home", "experience", "experience/search", "projects", "projects/article",
          "projects/clothing", "projects/wiset", "papers", "papers/jok",
          "papers/thesis", "papers/ksc", "about")

def navigate(page, route):
    page.evaluate("route => location.hash = route", route)
    page.wait_for_function("route => document.querySelector('main').dataset.route === route", arg=route)

def check_reading_size(page):
    too_small = page.evaluate("""() => [...document.body.querySelectorAll('*')].filter(el => {
      const rect = el.getBoundingClientRect();
      const hasText = [...el.childNodes].some(n => n.nodeType === 3 && n.textContent.trim());
      const style = getComputedStyle(el);
      return hasText && rect.width > 1 && rect.height > 1 && style.visibility !== 'hidden'
        && parseFloat(style.fontSize) < 17;
    }).map(el => ({tag:el.tagName, text:el.textContent.slice(0,60), size:getComputedStyle(el).fontSize}))""")
    assert not too_small, too_small

with sync_playwright() as p:
    browser = p.chromium.launch(executable_path="/usr/bin/chromium", headless=True,
                                args=["--no-sandbox"])
    page = browser.new_page(viewport={"width":1440,"height":1050})
    errors, failed_requests, bad_responses = [], [], []
    page.on("pageerror", lambda error: errors.append(str(error)))
    page.on("requestfailed", lambda request: failed_requests.append(request.url))
    page.on("response", lambda response: bad_responses.append(response.url) if response.status >= 400 else None)
    page.goto(BASE, wait_until="networkidle")
    page.evaluate("document.fonts.ready")
    assert page.evaluate('document.fonts.check(\'600 32px "Portfolio Display"\')')
    assert page.locator("html").get_attribute("lang") == "en"
    assert "Hae Young" in page.locator("h1").inner_text()
    assert page.locator("[data-section-link]").count() == 3
    assert len(page.locator("main").inner_text().split()) < 75
    for section in ("experience", "projects", "papers"):
        navigate(page, "home")
        page.locator(f"[data-section-link='{section}']").click()
        page.wait_for_function("r => document.querySelector('main').dataset.route === r", arg=section)
        assert page.locator("h1").count() == 1

    navigate(page, "projects")
    page.locator(".work-entry[href='#projects/article']").click()
    page.wait_for_function("document.querySelector('main').dataset.route === 'projects/article'")
    assert not page.locator(".case-notes").evaluate("el => el.open")
    page.locator(".case-notes summary").focus()
    page.keyboard.press("Enter")
    assert page.locator(".case-notes").evaluate("el => el.open")
    page.locator("[data-language='ko']").click()
    assert page.locator(".case-notes").evaluate("el => el.open")
    assert "기사" in page.locator("h1").inner_text()
    page.reload(wait_until="networkidle")
    assert page.locator("html").get_attribute("lang") == "ko"
    assert page.locator("main").get_attribute("data-route") == "projects/article"
    page.locator(".back-link").click()
    page.wait_for_function("document.querySelector('main').dataset.route === 'projects'")
    page.go_back()
    page.wait_for_function("document.querySelector('main').dataset.route === 'projects/article'")

    for language in ("en", "ko"):
        page.locator(f"[data-language='{language}']").click()
        navigate(page, "experience")
        states = set()
        for stage in ("serving", "quality", "delivery", "agent", "search"):
            page.locator(f"[data-stage='{stage}']").click()
            assert page.locator("[data-stage][aria-pressed='true']").count() == 1
            assert page.locator(f"[data-stage='{stage}']").get_attribute("aria-pressed") == "true"
            states.add(page.locator("#stage-detail").inner_text())
        assert len(states) == 5
        was_open = page.locator(".full-notes").evaluate("el => el.open")
        page.locator(".full-notes summary").click()
        page.locator(f"[data-language='{'ko' if language == 'en' else 'en'}']").click()
        assert page.locator(".full-notes").evaluate("el => el.open") == (not was_open)
        assert "search" in page.url
    page.reload(wait_until="networkidle")
    assert page.locator("[data-stage='search']").get_attribute("aria-pressed") == "true"

    for width in (320,375,390,768,1024,1440):
        page.set_viewport_size({"width":width,"height":950})
        for language in ("en","ko"):
            page.goto(f"{BASE}/?lang={language}#home", wait_until="networkidle")
            page.evaluate("document.fonts.ready")
            family = '600 32px "Portfolio Display"' if language == "en" else '700 32px "Portfolio Serif KR"'
            assert page.evaluate("font => document.fonts.check(font)", family)
            assert page.locator("html").get_attribute("lang") == language
            for route in ROUTES:
                navigate(page, route)
                assert page.evaluate("document.documentElement.scrollWidth <= innerWidth"), (width,language,route)
                check_reading_size(page)
                if route == "home" and width >= 681:
                    assert page.locator(".entry-title").evaluate_all("els => els.every(el => el.getBoundingClientRect().height <= parseFloat(getComputedStyle(el).lineHeight) * 1.1)"), (width, language, "chapter title wrapped")
                if route not in ("home","experience"):
                    for disclosure in page.locator("details").all():
                        disclosure.evaluate("el => el.open = true")
                    assert page.evaluate("document.documentElement.scrollWidth <= innerWidth"), (width,language,route,"expanded")
                    check_reading_size(page)

    page.set_viewport_size({"width":390,"height":950})
    navigate(page,"home")
    page.locator(".menu-toggle").click()
    page.keyboard.press("Escape")
    assert page.locator(".menu-toggle").get_attribute("aria-expanded") == "false"
    page.locator(".menu-toggle").click()
    page.locator("#main-nav a[href='#projects']").click()
    page.wait_for_function("document.querySelector('main').dataset.route === 'projects'")
    assert page.locator(".menu-toggle").get_attribute("aria-expanded") == "false"
    assert page.locator("a[href='mailto:hae081128@gmail.com']").count() == 1
    assert page.locator("a[href='https://github.com/candy-Heidi']").count() == 1
    page.evaluate("location.hash = 'invalid/route'")
    page.wait_for_function("document.querySelector('main').dataset.route === 'home'")

    for language in ("en","ko"):
        for device,width,height in (("desktop",1440,1050),("mobile",390,950)):
            page.set_viewport_size({"width":width,"height":height})
            for route in ("home","experience","projects","projects/article","papers","papers/thesis"):
                page.goto(f"{BASE}/?lang={language}#{route}",wait_until="networkidle")
                page.evaluate("document.fonts.ready")
                page.locator("h1").click()
                name=route.replace('/','-')
                page.screenshot(path=str(ARTIFACTS/f"v3-{name}-{device}-{language}.png"),full_page=True)
    assert not errors, errors
    assert not failed_requests, failed_requests
    assert not bad_responses, bad_responses
    browser.close()
print("PASS: 144 route/viewport/language layouts; visible text >=17px; English default; section/detail navigation; history/deep links; language/disclosure state; 5 workstreams; keyboard/mobile menu; local display fonts loaded; loading errors absent.")
