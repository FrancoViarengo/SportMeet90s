import urllib.request
import re
import json

vid = "OBbHF8Z-Glw"
url = f"https://www.youtube.com/watch?v={vid}"
headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'}
req = urllib.request.Request(url, headers=headers)
with urllib.request.urlopen(req) as resp:
    html = resp.read().decode('utf-8', errors='ignore')
    title = re.search(r'<title>(.*?)</title>', html)
    print("Page Title:", title.group(1) if title else "None")
    channel = re.search(r'"channelId":"(.*?)"', html)
    print("Channel ID:", channel.group(1) if channel else "None")
    owner = re.search(r'"ownerChannelName":"(.*?)"', html)
    print("Owner:", owner.group(1) if owner else "None")
    desc = re.search(r'"shortDescription":"(.*?)"', html)
    if desc:
        print("Description snippet:", desc.group(1)[:500])
