# check_otx_data.py

import sqlite3

conn = sqlite3.connect("cyber_threats.db")
cursor = conn.cursor()

cursor.execute("SELECT * FROM threats WHERE threat_type='AlienVault OTX' ORDER BY scraped_at DESC LIMIT 5")
rows = cursor.fetchall()

if not rows:
    print("[!] No AlienVault OTX entries found.")
else:
    print(f"[+] Showing {len(rows)} recent OTX entries:\n")
    for row in rows:
        print(f"-> {row[2]} | Severity: {row[4]}\n{row[5][:200]}...\n---")

conn.close()
