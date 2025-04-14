import sqlite3

def show_latest_threats(limit=20):
    conn = sqlite3.connect("cyber_threats.db")
    cursor = conn.cursor()
    
    cursor.execute('''
        SELECT source, title, url FROM threats ORDER BY id DESC LIMIT ?
    ''', (limit,))
    
    rows = cursor.fetchall()
    conn.close()

    print("\n===== Latest Threat Feed =====\n")
    for idx, (source, title, url) in enumerate(rows, start=1):
        print(f"{idx}. [{source}] {title}")
        print(f"   🔗 {url}\n")

if __name__ == "__main__":
    show_latest_threats()
