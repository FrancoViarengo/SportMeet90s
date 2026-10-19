import json

with open('sportmeet90s_videos.json', 'r', encoding='utf-8') as f:
    vids = json.load(f)

for v in vids:
    print("=" * 60)
    print(f"TITLE: {v['title']}")
    print(f"ID: {v['id']} | URL: {v['url']}")
    print(f"THUMBNAIL: {v['thumbnail']}")
    print(f"DESC:\n{v['description']}")
