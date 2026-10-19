import urllib.request
import json
import re

posts = [
    "https://www.instagram.com/p/DY0bFCTj5EK/",
    "https://www.instagram.com/reel/DcbgvDPO8Jf/"
]

for p in posts:
    print("Testing:", p)
    # try embed
    embed_url = p.rstrip('/') + '/embed/captioned/'
    req = urllib.request.Request(embed_url, headers={'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'})
    try:
        with urllib.request.urlopen(req) as resp:
            html = resp.read().decode('utf-8', errors='ignore')
            # find caption and image
            print("Embed length:", len(html))
            caption_m = re.findall(r'<div class="Caption"[^>]*>(.*?)</div>', html, re.DOTALL)
            if caption_m:
                print("Caption:", caption_m[0][:300])
            img_m = re.findall(r'<img [^>]*src="([^"]+)"', html)
            for im in img_m:
                if 'cdninstagram' in im or 'fbcdn' in im:
                    print("Found Image in embed:", im[:150])
    except Exception as e:
        print("Embed error:", e)
