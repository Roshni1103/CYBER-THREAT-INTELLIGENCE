import requests
from bs4 import BeautifulSoup
from database import insert_threat_data, create_tables
from datetime import datetime
from apscheduler.schedulers.blocking import BlockingScheduler

BASE_URL = "https://www.cert-in.org.in"
ADVISORIES_URL = f"{BASE_URL}/s2cMainServlet?pageid=PUBADVLIST"

def scrape_certin_data():
    print("[*] Scraping CERT-In...")
    headers = {"User-Agent": "Mozilla/5.0"}
    try:
        response = requests.get(ADVISORIES_URL, headers=headers, timeout=10)
        response.raise_for_status()
    except Exception as e:
        print("[!] Failed to fetch advisory list:", e)
        return

    soup = BeautifulSoup(response.text, 'html.parser')
    advisory_links = soup.select('ul li a[href*="s2cMainServlet?pageid=PUBLICATION"]')

    if not advisory_links:
        print("[!] No advisories found on the page.")
        return

    for link in advisory_links[:5]:  # Limit to top 5
        advisory_url = BASE_URL + "/" + link['href']
        advisory_id = link.text.strip()

        try:
            detail_res = requests.get(advisory_url, headers=headers, timeout=10)
            detail_res.raise_for_status()
        except Exception as e:
            print(f"[!] Failed to fetch advisory details for {advisory_id}:", e)
            continue

        detail_soup = BeautifulSoup(detail_res.text, 'html.parser')
        paragraphs = detail_soup.find_all("p")

        description = "\n".join(p.text.strip() for p in paragraphs[:3]) if paragraphs else "No description available."
        affected = paragraphs[3].text.strip() if len(paragraphs) > 3 else "Not specified."

        threat_data = {
            "advisory_id": advisory_id,
            "date": datetime.now().strftime("%Y-%m-%d"),
            "threat_type": "CERT-In Advisory",
            "severity": "Medium",  # You can improve this logic later
            "description": description,
            "affected_systems": affected,
            "source_url": advisory_url
        }

        insert_threat_data(threat_data)
        print(f"[+] Inserted: {advisory_id}")

# APScheduler setup
if __name__ == "__main__":
    create_tables()
    scheduler = BlockingScheduler()
    scheduler.add_job(scrape_certin_data, 'interval', hours=12)
    print("[*] Starting scheduler: CERT-In scraping every 12 hours")
    scheduler.start()
