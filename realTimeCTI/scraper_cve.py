import requests
import sqlite3
from datetime import datetime, timedelta, timezone

DB_FILE = "cyber_threats.db"

# Use timezone-aware datetime (UTC)
now = datetime.now(timezone.utc)
seven_days_ago = (now - timedelta(days=7)).strftime('%Y-%m-%dT%H:%M:%S.000Z')
now_str = now.strftime('%Y-%m-%dT%H:%M:%S.000Z')

NVD_API_URL = (
    f"https://services.nvd.nist.gov/rest/json/cves/2.0?"
    f"resultsPerPage=10&pubStartDate={seven_days_ago}&pubEndDate={now_str}"
)

def scrape():
    print("[*] Scraping latest CVEs from NVD API...")

    try:
        response = requests.get(NVD_API_URL, timeout=10, stream=True)
        response.raise_for_status()
        data = response.json()
    except Exception as e:
        print("[!] Failed to fetch CVE data:", e)
        return

    if "vulnerabilities" not in data:
        print("[!] Unexpected data format")
        return

    conn = sqlite3.connect(DB_FILE)
    cursor = conn.cursor()

    for item in data["vulnerabilities"]:
        cve = item.get("cve", {})
        cve_id = cve.get("id")
        source_url = f"https://nvd.nist.gov/vuln/detail/{cve_id}"
        published = cve.get("published")
        description = cve.get("descriptions", [{}])[0].get("value", "N/A")
        severity = "N/A"
        affected = "N/A"

        # Extract severity
        metrics = cve.get("metrics", {})
        if "cvssMetricV31" in metrics:
            severity = metrics["cvssMetricV31"][0]["cvssData"].get("baseSeverity", "N/A")
        elif "cvssMetricV30" in metrics:
            severity = metrics["cvssMetricV30"][0]["cvssData"].get("baseSeverity", "N/A")

        cursor.execute("SELECT * FROM threats WHERE advisory_id = ?", (cve_id,))
        if cursor.fetchone():
            print(f"[!] Duplicate skipped: {cve_id}")
            continue

        cursor.execute("""
            INSERT INTO threats (date, advisory_id, threat_type, severity, description, affected_systems, source, scraped_at)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?)
        """, (
            published,
            cve_id,
            "CVE",
            severity,
            description,
            affected,
            source_url,
            datetime.now().isoformat()
        ))

        print(f"[+] Inserted: {cve_id}")

    conn.commit()
    conn.close()

# Optional: allow manual run
if __name__ == "__main__":
    scrape()
