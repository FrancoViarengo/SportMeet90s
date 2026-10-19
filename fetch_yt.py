import urllib.request
import re
import json

url = 'https://www.youtube.com/@sportmeet90s/videos'
headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36'}
req = urllib.request.Request(url, headers=headers)
try:
    with urllib.request.urlopen(req) as resp:
        html = resp.read().decode('utf-8', errors='ignore')
        with open('yt_page.html', 'w', encoding='utf-8') as f:
            f.write(html)
        print("Length:", len(html))
        # Find videoId and title
        matches = re.findall(r'"videoId":"([a-zA-Z0-9_-]{11})".*?"title":\{"runs":\[\{"text":"([^"]+)"\}\]', html)
        print("Matches:", len(matches))
        for vid, title in matches:
            print(f"ID: {vid} | Title: {title}")
except Exception as e:
    print("YT error:", e)
