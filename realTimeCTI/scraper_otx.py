import sqlite3
from playwright.sync_api import sync_playwright, TimeoutError as PlaywrightTimeoutError
from apscheduler.schedulers.background import BackgroundScheduler
from datetime import datetime
import time

DB_FILE = "cyber_threats.db"

def setup_database():
    conn = sqlite3.connect(DB_FILE)
    cursor = conn.cursor()
    cursor.execute("""
        CREATE TABLE IF NOT EXISTS otx_trending (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            title TEXT
        )
    """)
    conn.commit()
    conn.close()
    print("[+] Database and table ready.")

def save_to_db(cards):
    conn = sqlite3.connect(DB_FILE)
    cursor = conn.cursor()

    for card in cards:
        try:
            title_element = card.query_selector("h4")
            title = title_element.inner_text().strip() if title_element else "Untitled"
            print(f"    - {title}")
            cursor.execute("INSERT INTO otx_trending (title) VALUES (?)", (title,))
        except Exception as e:
            print(f"[!] Failed to process card: {e}")

    conn.commit()
    conn.close()
    print("[+] Trending pulses saved to database.")

def scrape_otx_trending():
    print(f"[*] Scraping OTX trending pulses at {datetime.now()}...")

    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()

        try:
            page.goto("https://otx.alienvault.com/browse/trending", timeout=60000)

            # Scroll to trigger lazy-loading
            for _ in range(5):
                page.mouse.wheel(0, 1000)
                page.wait_for_timeout(1000)

            page.wait_for_selector("[data-testid='pulse-card']", timeout=20000)

            # Optional: dump HTML
            # with open("otx_debug.html", "w", encoding="utf-8") as f:
            #     f.write(page.content())

            cards = page.query_selector_all("[data-testid='pulse-card']")
            if not cards:
                print("[!] No trending pulses found.")
            else:
                print(f"[+] Found {len(cards)} trending pulses.")
                save_to_db(cards)

        except PlaywrightTimeoutError as e:
            print(f"[!] Timeout error: {e}")
        except Exception as e:
            print(f"[!] General error: {e}")
        finally:
            browser.close()

def schedule_scraper():
    scheduler = BackgroundScheduler()
    scheduler.add_job(scrape_otx_trending, 'interval', hours=12)
    scheduler.start()
    print("[*] APScheduler started. Scraping every 12 hours.")

    try:
        # Keep script running
        while True:
            time.sleep(60)
    except (KeyboardInterrupt, SystemExit):
        scheduler.shutdown()
        print("[*] Scheduler stopped.")

# --- Main ---
if __name__ == "__main__":
    setup_database()
    schedule_scraper()
