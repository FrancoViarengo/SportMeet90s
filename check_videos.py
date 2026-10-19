import urllib.request
import re

for vid in ["bT-1bo053mA", "95-FjQ-qewQ", "4lI-AonUARs", "RElvfsTFUrU"]:
    url = f"https://www.youtube.com/watch?v={vid}"
    req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'})
    try:
        with urllib.request.urlopen(req) as resp:
            html = resp.read().decode('utf-8', errors='ignore')
            title = re.search(r'<title>(.*?)</title>', html)
            owner = re.search(r'"ownerChannelName":"(.*?)"', html)
            canonical = re.search(r'"canonicalBaseUrl":"(.*?)"', html)
            print(f"VID: {vid} | Title: {title.group(1) if title else 'N/A'} | Owner: {owner.group(1) if owner else 'N/A'} | Channel: {canonical.group(1) if canonical else 'N/A'}")
    except Exception as e:
        print(f"VID: {vid} Error: {e}")
