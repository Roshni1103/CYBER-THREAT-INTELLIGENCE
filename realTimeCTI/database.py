import sqlite3
from datetime import datetime

def setup_database():
    conn = sqlite3.connect('threat_data.db')
    c = conn.cursor()
    c.execute('''
        CREATE TABLE IF NOT EXISTS threats (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            source TEXT,
            title TEXT,
            url TEXT UNIQUE,
            description TEXT,
            date_scraped TEXT
        )
    ''')
    conn.commit()
    conn.close()

def insert_threat_data(source, title, url, description=""):
    conn = sqlite3.connect('threat_data.db')
    c = conn.cursor()
    try:
        c.execute('''
            INSERT OR IGNORE INTO threats (source, title, url, description, date_scraped)
            VALUES (?, ?, ?, ?, ?)
        ''', (source, title, url, description, datetime.utcnow().isoformat()))
        conn.commit()
    except Exception as e:
        print(f"[DB ERROR] Failed to insert: {title}\n{e}")
    finally:
        conn.close()

def fetch_all_threats():
    conn = sqlite3.connect('threat_data.db')
    c = conn.cursor()
    c.execute('SELECT * FROM threats ORDER BY date_scraped DESC')
    data = c.fetchall()
    conn.close()
    return data

# ✅ This will run only if the script is executed directly
if __name__ == '__main__':
    setup_database()
