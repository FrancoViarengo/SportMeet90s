import urllib.request
import re
import json

url = "https://www.youtube.com/channel/UCKFjEkPNXRxrNunFtK_XgRQ/videos"
req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'})
try:
    with urllib.request.urlopen(req) as resp:
        html = resp.read().decode('utf-8', errors='ignore')
        # find ytInitialData
        match = re.search(r'var ytInitialData\s*=\s*({.*?});</script>', html)
        if match:
            with open('channel_yt.json', 'w', encoding='utf-8') as f:
                f.write(match.group(1))
            print("Wrote channel_yt.json")
            data = json.loads(match.group(1))
            # recursively find videoRenderer
            def find_renderers(obj):
                if isinstance(obj, dict):
                    if 'videoRenderer' in obj:
                        yield obj['videoRenderer']
                    for v in obj.values():
                        yield from find_renderers(v)
                elif isinstance(obj, list):
                    for item in obj:
                        yield from find_renderers(item)

            renderers = list(find_renderers(data))
            print("Found videoRenderers:", len(renderers))
            for r in renderers:
                vid = r.get('videoId')
                title = r.get('title', {}).get('runs', [{}])[0].get('text', '')
                viewCount = r.get('viewCountText', {}).get('simpleText', '')
                published = r.get('publishedTimeText', {}).get('simpleText', '')
                thumbs = r.get('thumbnail', {}).get('thumbnails', [])
                thumb_url = thumbs[-1].get('url') if thumbs else ''
                print(f"VID: {vid} | {title} | {published} | {viewCount} | {thumb_url}")
except Exception as e:
    print("Error:", e)
