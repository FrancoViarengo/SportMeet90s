import urllib.request

video_url = "https://assets.mixkit.co/videos/preview/mixkit-night-traffic-in-a-city-street-42795-large.mp4"
dest = "public/archive/hero_night_loop.mp4"

try:
    req = urllib.request.Request(video_url, headers={'User-Agent': 'Mozilla/5.0'})
    with urllib.request.urlopen(req) as resp, open(dest, 'wb') as f:
        f.write(resp.read())
    print("Downloaded hero_night_loop.mp4 successfully")
except Exception as e:
    print("Video download error:", e)
