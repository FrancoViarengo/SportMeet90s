import urllib.request
import re
import json

# Let's fetch channel videos
url = "https://www.youtube.com/@sportmeet90s/videos"
req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'})
try:
    with urllib.request.urlopen(req) as resp:
        html = resp.read().decode('utf-8', errors='ignore')
        # find ytInitialData
        match = re.search(r'var ytInitialData = (\{.*?\});</script>', html)
        if match:
            data = json.loads(match.group(1))
            with open('channel_data.json', 'w', encoding='utf-8') as f:
                json.dump(data, f, indent=2)
            print("Wrote channel_data.json successfully")
        else:
            print("ytInitialData not matched directly")
            vids = re.findall(r'/watch\?v=([a-zA-Z0-9_-]{11})', html)
            print("vids found:", set(vids))
except Exception as e:
    print("Error:", e)
