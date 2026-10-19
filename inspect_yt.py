import json
import re

with open('channel_yt.json', 'r', encoding='utf-8') as f:
    text = f.read()

vids = re.findall(r'"videoId":"([a-zA-Z0-9_-]{11})"', text)
print("Unique video IDs:", len(set(vids)))
for v in list(set(vids))[:20]:
    # find title nearby
    pos = text.find(v)
    chunk = text[pos-200:pos+500]
    title_m = re.search(r'"title":\{"runs":\[\{"text":"(.*?)"\}', chunk)
    if not title_m:
        title_m = re.search(r'"text":"([^"]+)"', chunk)
    print(v, "->", title_m.group(1) if title_m else "no title")
