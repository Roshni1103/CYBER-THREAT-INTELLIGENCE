def scrape_cve():
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
    INSERT INTO threats (source, title, url, date_scraped, advisory_id, threat_type, severity, affected_systems, scraped_at)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
""", (
    "NVD API",  # source
    title,  # title (ensure the title is properly extracted)
    source_url,  # url (the URL for the CVE)
    datetime.utcnow().isoformat(),  # date_scraped (current time in UTC)
    cve_id,  # advisory_id (CVE ID)
    "CVE",  # threat_type (as 'CVE' in this case)
    severity,  # severity
    affected,  # affected_systems (can be detailed based on CVE data)
    datetime.utcnow().isoformat()  # scraped_at (current time in UTC)
))


        print(f"[+] Inserted: {cve_id}")

    conn.commit()
    conn.close()
