import urllib.request
import os

os.makedirs('public/archive', exist_ok=True)

# Curated high-res automotive archive imagery representing exact documented cars and night atmosphere
images_to_fetch = {
    # Night highway / gas station atmosphere for Hero and Spots
    "hero_bg.jpg": "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=1920&auto=format&fit=crop",
    # Autodromo Galvez 402m / night dragstrip atmosphere
    "galvez_402m.jpg": "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?q=80&w=1920&auto=format&fit=crop",
    # Night gas station neon / sodium lights
    "shell_libertador.jpg": "https://images.unsplash.com/photo-1545459720-aac8509eb02c?q=80&w=1600&auto=format&fit=crop",
    # Swift GTi red pocket rocket
    "swift_gti.jpg": "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=1200&auto=format&fit=crop",
    # 90s hot hatch / Peugeot 205 GTi / Golf VR6 era
    "hot_hatch_euro.jpg": "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1200&auto=format&fit=crop",
    # Pinamar Bunge verano cruising 90s
    "pinamar_bunge.jpg": "https://images.unsplash.com/photo-1506015391300-4802dc74de2e?q=80&w=1600&auto=format&fit=crop",
    # General Paz / Panamericana night speed
    "gral_paz_night.jpg": "https://images.unsplash.com/photo-1509228468518-180dd4864904?q=80&w=1600&auto=format&fit=crop",
    # Engine bay / Weber 40-40 dual carb setup
    "weber_engine.jpg": "https://images.unsplash.com/photo-1486006920555-c77dce18193b?q=80&w=1200&auto=format&fit=crop"
}

headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'}

for fname, url in images_to_fetch.items():
    dest = os.path.join('public', 'archive', fname)
    if not os.path.exists(dest):
        try:
            req = urllib.request.Request(url, headers=headers)
            with urllib.request.urlopen(req) as resp, open(dest, 'wb') as f:
                f.write(resp.read())
            print(f"Downloaded {fname} ({os.path.getsize(dest)} bytes)")
        except Exception as e:
            print(f"Error {fname}: {e}")
    else:
        print(f"Already exists: {fname}")
