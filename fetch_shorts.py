import urllib.request
import re
import json

url = "https://www.youtube.com/channel/UCKFjEkPNXRxrNunFtK_XgRQ/shorts"
req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'})
try:
    with urllib.request.urlopen(req) as resp:
        html = resp.read().decode('utf-8', errors='ignore')
        shorts = set(re.findall(r'"videoId":"([a-zA-Z0-9_-]{11})"', html))
        print("Shorts video IDs:", len(shorts), shorts)
except Exception as e:
    print("Error:", e)
