import requests
from bs4 import BeautifulSoup

BASE_URL = "https://www.cert-in.org.in"
ADVISORIES_URL = f"{BASE_URL}/advisories/"

headers = {"User-Agent": "Mozilla/5.0"}
response = requests.get(ADVISORIES_URL, headers=headers)

# print raw HTML (first 50 lines)
html_lines = response.text.splitlines()
for line in html_lines[:50]:
    print(line)
