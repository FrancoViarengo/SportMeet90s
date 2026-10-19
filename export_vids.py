import json

with open('sportmeet90s_videos.json', 'r', encoding='utf-8') as f:
    vids = json.load(f)

with open('sportmeet90s_details.txt', 'w', encoding='utf-8') as out:
    for v in vids:
        out.write("=" * 60 + "\n")
        out.write(f"TITLE: {v['title']}\n")
        out.write(f"ID: {v['id']} | URL: {v['url']}\n")
        out.write(f"THUMBNAIL: {v['thumbnail']}\n")
        out.write(f"DESC:\n{v['description']}\n\n")

print("Exported sportmeet90s_details.txt successfully")
