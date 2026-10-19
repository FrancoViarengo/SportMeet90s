import os
from PIL import Image, ImageStat

folder = 'public/IMAGENES_Y_VIDEOS'
imgs = [f for f in os.listdir(folder) if f.endswith('.jpg') and not f.startswith('AVATAR')]

with open('image_analysis.txt', 'w', encoding='utf-8') as out:
    for idx, img in enumerate(sorted(imgs)):
        path = os.path.join(folder, img)
        im = Image.open(path)
        stat = ImageStat.Stat(im)
        r, g, b = stat.mean[:3]
        brightness = (r + g + b) / 3
        tag = "NIGHT/MEET" if brightness < 95 else "DAY/GARAGE"
        out.write(f"[{idx:02d}] {img} | {im.size[0]}x{im.size[1]} | Brightness: {brightness:.1f} | Tone: ({r:.0f},{g:.0f},{b:.0f}) | {tag}\n")

print("Saved image_analysis.txt")
