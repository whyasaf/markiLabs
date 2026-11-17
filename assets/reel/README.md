# Tanıtım videosu (ana sayfa reel'i)

`scene-tr.html` ve `scene-en.html`, ana sayfadaki tanıtım videosunun kaynakları (HTML/CSS animasyonu, 20,5 sn).
Video kare kare çekilip ffmpeg ile birleştirilir:

```bash
cd assets/reel
node render169.mjs scene-en.html /tmp/reel-frames 20.5        # 1600x900, 30 kare/sn
ffmpeg -framerate 30 -i /tmp/reel-frames/f%04d.jpg -c:v libx264 -preset slow -crf 22 \
  -pix_fmt yuv420p -movflags +faststart ../../public/videos/marki-reel-en.mp4
ffmpeg -i /tmp/reel-frames/f0075.jpg -q:v 3 ../../public/videos/marki-reel-en-poster.jpg
```

Türkçe için `scene-tr.html` → `marki-reel.mp4` / `marki-reel-poster.jpg`. Görseller doğrudan `public/` klasöründen okunur.
