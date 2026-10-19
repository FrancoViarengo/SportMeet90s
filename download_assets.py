import os
import urllib.request
import json

os.makedirs('public/archive', exist_ok=True)

# List of assets from YouTube & archive
with open('sportmeet90s_videos.json', 'r', encoding='utf-8') as f:
    vids = json.load(f)

for v in vids:
    vid = v['id']
    thumb_url = f"https://img.youtube.com/vi/{vid}/maxresdefault.jpg"
    dest = f"public/archive/{vid}.jpg"
    try:
        req = urllib.request.Request(thumb_url, headers={'User-Agent': 'Mozilla/5.0'})
        with urllib.request.urlopen(req) as resp, open(dest, 'wb') as out:
            out.write(resp.read())
        print(f"Downloaded {vid}.jpg ({os.path.getsize(dest)} bytes)")
    except Exception as e:
        print(f"Error downloading {vid}: {e}")
        # fallback to hqdefault
        try:
            fallback = f"https://img.youtube.com/vi/{vid}/hqdefault.jpg"
            req = urllib.request.Request(fallback, headers={'User-Agent': 'Mozilla/5.0'})
            with urllib.request.urlopen(req) as resp, open(dest, 'wb') as out:
                out.write(resp.read())
            print(f"Downloaded fallback {vid}.jpg ({os.path.getsize(dest)} bytes)")
        except Exception as e2:
            print(f"Failed fallback: {e2}")

print("Assets download completed.")
