import urllib.request
import re

url = "https://www.youtube.com/watch?v=95-FjQ-qewQ"
req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'})
with urllib.request.urlopen(req) as resp:
    html = resp.read().decode('utf-8', errors='ignore')
    match = re.findall(r'"/(@[^"]+)"', html)
    print("Handles:", set(match))
    channels = re.findall(r'"/(channel/[^"]+)"', html)
    print("Channels:", set(channels))
