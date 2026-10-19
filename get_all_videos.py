import urllib.request
import re
import json

vids = ['hDW5bjA_YjE', '2k_ivWFJEiU', 'bT-1bo053mA', 'nQsz3eL1cEo', 'tZk_F3hE_gg', '95-FjQ-qewQ', 'nfJiJpokT5k', 'LLXwKIFtj9M', '4lI-AonUARs']

results = []
for vid in vids:
    url = f"https://www.youtube.com/watch?v={vid}"
    req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'})
    try:
        with urllib.request.urlopen(req) as resp:
            html = resp.read().decode('utf-8', errors='ignore')
            title = re.search(r'<title>(.*?)</title>', html)
            title_text = title.group(1).replace(" - YouTube", "") if title else "Video"
            desc_m = re.search(r'"shortDescription":"(.*?)"', html)
            desc_text = desc_m.group(1) if desc_m else ""
            desc_text = desc_text.encode('utf-8').decode('unicode_escape', errors='ignore')
            thumb = f"https://img.youtube.com/vi/{vid}/maxresdefault.jpg"
            results.append({
                'id': vid,
                'title': title_text,
                'description': desc_text,
                'thumbnail': thumb,
                'url': url
            })
            print(f"[{vid}] {title_text}")
    except Exception as e:
        print(f"[{vid}] Error: {e}")

with open('sportmeet90s_videos.json', 'w', encoding='utf-8') as f:
    json.dump(results, f, ensure_ascii=False, indent=2)

print("Saved sportmeet90s_videos.json with", len(results), "videos")
