import urllib.request
import re
import json

url = "https://www.instagram.com/sportmeet90s/"
headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36',
    'Accept-Language': 'es-ES,es;q=0.9,en;q=0.8'
}
req = urllib.request.Request(url, headers=headers)
try:
    with urllib.request.urlopen(req) as response:
        html = response.read().decode('utf-8', errors='ignore')
        with open('ig_dump.html', 'w', encoding='utf-8') as f:
            f.write(html)
        print("HTML saved, length:", len(html))

        # Check og tags
        og_tags = re.findall(r'<meta\s+(?:property|name)=["\']([^"\']+)["\']\s+content=["\']([^"\']*)["\']', html)
        print("Found meta tags:", len(og_tags))
        for k, v in og_tags:
            if 'og:' in k or 'description' in k or 'title' in k:
                print(f"META {k} -> {v}")

        # Check for shortcodes
        posts = set(re.findall(r'/(?:p|reel)/([A-Za-z0-9_-]+)/', html))
        print("Posts/reels found:", posts)

        # Check for image urls
        imgs = set(re.findall(r'https://[^"\'\s]+\.(?:jpg|webp|png)', html))
        print("Images found:", len(imgs))
        for img in list(imgs)[:10]:
            print("IMG:", img)

except Exception as e:
    print("Error:", e)
