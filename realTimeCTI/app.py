from flask import Flask, jsonify
import sqlite3
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Enable CORS for React to connect

DATABASE = 'threat_data.db'


def get_alerts_from_db():
    conn = sqlite3.connect(DATABASE)
    cursor = conn.cursor()
    cursor.execute("SELECT title, url FROM threats ORDER BY id DESC LIMIT 100")  # Fetching 100 records
    rows = cursor.fetchall()
    conn.close()

    alerts = [
        {
            'title': row[0],
            'link': row[1]
        } for row in rows
    ]
    return alerts

@app.route('/api/alerts', methods=['GET'])
def api_alerts():
    alerts = get_alerts_from_db()
    return jsonify(alerts)

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=10000)

