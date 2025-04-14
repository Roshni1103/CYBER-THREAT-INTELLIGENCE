import requests
from bs4 import BeautifulSoup
from apscheduler.schedulers.background import BackgroundScheduler
from database import setup_database, insert_threat_data
from datetime import datetime
import time

# Import your other scrapers
from scraper_certin import scrape_certin_data
from scraper_cve import scrape_cve
from scraper_otx import scrape_otx_trending

# --- RSS Feeds Scraper ---
def scrape_rss_feeds():
    print(f"[{datetime.now()}] 📡 Scraping RSS feeds...")
    rss_feeds = [
        "https://krebsonsecurity.com/feed/",
        "https://threatpost.com/feed/",
        "https://feeds.feedburner.com/TheHackersNews",
        "https://isc.sans.edu/rssfeed.xml",
        "https://www.cert.europa.eu/rss.xml"
    ]

    for feed_url in rss_feeds:
        try:
            response = requests.get(feed_url)
            soup = BeautifulSoup(response.content, 'xml')
            items = soup.find_all('item')
            print(f"  - {len(items)} items from {feed_url}")

            for item in items[:10]:  # Limit to latest 10
                title = item.title.get_text()
                link = item.link.get_text()
                insert_threat_data("RSS Feed", title, link)
        except Exception as e:
            print(f"[!] Error fetching RSS feed {feed_url}: {e}")

# --- APScheduler Setup ---
def schedule_scrapers():
    setup_database()

    scheduler = BackgroundScheduler()

    # Schedule all scrapers
    scheduler.add_job(scrape_rss_feeds, 'interval', hours=12)
    scheduler.add_job(scrape_certin_data, 'interval', hours=12)
    scheduler.add_job(scrape_cve, 'interval', hours=12)
    scheduler.add_job(scrape_otx_trending, 'interval', hours=12)

    scheduler.start()

    print("[*] APScheduler is running. All scrapers set to run every 12 hours.")

    try:
        while True:
            time.sleep(60)
    except (KeyboardInterrupt, SystemExit):
        scheduler.shutdown()
        print("[*] Scheduler stopped.")

# --- Entry Point ---
if __name__ == "__main__":
    schedule_scrapers()
