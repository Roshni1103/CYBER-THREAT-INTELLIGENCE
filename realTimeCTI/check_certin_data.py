import sqlite3

conn = sqlite3.connect("cyber_threats.db")
cursor = conn.cursor()

cursor.execute("SELECT advisory_id, date FROM threats WHERE threat_type = 'CERT-In Advisory'")
rows = cursor.fetchall()

if rows:
    print("[+] CERT-In entries found in database:\n")
    for row in rows:
        print(f"- Advisory ID: {row[0]} | Date: {row[1]}")
else:
    print("[!] No CERT-In advisories found in database.")

conn.close()
