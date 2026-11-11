"""Record actual local interactions; the HTTP server must already be running."""
from pathlib import Path
import os
import subprocess
from playwright.sync_api import sync_playwright

ROOT = Path(__file__).resolve().parent.parent
ARTIFACTS = ROOT / 'artifacts'
RAW = ARTIFACTS / 'video'
RAW.mkdir(parents=True, exist_ok=True)
BASE = os.environ.get('PORTFOLIO_BASE_URL', 'http://127.0.0.1:4173')

with sync_playwright() as p:
    browser = p.chromium.launch(executable_path='/usr/bin/chromium', headless=True, args=['--no-sandbox'])
    context = browser.new_context(viewport={'width':1440,'height':1000}, record_video_dir=str(RAW),
                                  record_video_size={'width':1440,'height':1000})
    page = context.new_page()
    page.goto(f'{BASE}/?lang=en#home', wait_until='networkidle')
    page.evaluate('document.fonts.ready')
    page.wait_for_timeout(800)
    rect = page.locator('[data-preview-plane]').bounding_box()
    for x,y in ((.2,.2),(.82,.72),(.5,.45)):
        page.mouse.move(rect['x']+rect['width']*x, rect['y']+rect['height']*y, steps=22)
        page.wait_for_timeout(420)
    page.locator('[data-preview-index="1"]').click()
    page.wait_for_timeout(650)
    page.mouse.move(rect['x']+rect['width']*.78, rect['y']+rect['height']*.2, steps=20)
    page.wait_for_timeout(500)
    page.locator('[data-preview-index="2"]').click()
    page.wait_for_timeout(700)
    page.mouse.move(rect['x']+rect['width']*.18, rect['y']+rect['height']*.7, steps=22)
    page.wait_for_timeout(500)
    page.locator('[data-preview-card]').click()
    page.wait_for_function("document.querySelector('main').dataset.route === 'papers/jok'")
    page.wait_for_timeout(700)
    page.locator('#main-nav a[href="#projects"]').click()
    page.wait_for_function("document.querySelector('main').dataset.route === 'projects'")
    page.wait_for_timeout(750)
    page.locator('.work-entry[href="#projects/article"]').click()
    page.wait_for_function("document.querySelector('main').dataset.route === 'projects/article'")
    page.wait_for_timeout(900)
    page.locator('.brand').click()
    page.wait_for_function("document.querySelector('main').dataset.route === 'home'")
    page.wait_for_timeout(700)
    video = page.video
    context.close()
    source = Path(video.path())
    browser.close()

target = ARTIFACTS / 'v4-interactions.mp4'
subprocess.run(['ffmpeg','-y','-hide_banner','-loglevel','error','-i',str(source),
                '-an','-c:v','libx264','-preset','fast','-crf','20','-pix_fmt','yuv420p',
                '-movflags','+faststart',str(target)],check=True)
print(target)
