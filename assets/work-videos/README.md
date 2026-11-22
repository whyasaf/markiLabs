# İş kartı tanıtım videoları

Neon, Cultivated, whyasaf, Vitren ve Plus Otoyol'un 12-18 saniyelik tanıtım videolarının kaynakları (HTML/CSS
animasyonu, 1600x1000). `scene-tr.html` Türkçe, `scene-en.html` İngilizce sürüm (Cultivated'ın yazıları zaten
İngilizce, tek sürüm). `assets/` içindeki görseller sitelerin kendisinden ve ilk ekran görüntüsünden.

```bash
cd assets/work-videos
node render.mjs neon/scene-en.html /tmp/neon-frames 17        # saniye: neon 17, cultivated 17, whyasaf 16.5, vitren 18, plus 12
ffmpeg -framerate 30 -i /tmp/neon-frames/f%04d.jpg -vf scale=1280:800 -c:v libx264 -preset slow -crf 24 \
  -pix_fmt yuv420p -movflags +faststart ../../public/videos/work-neonotokurtarma-en.mp4
# kapak: neon f0240, plus f0180, diğerleri f0060 (scale=1280:800)
# kart kopyası: -vf "scale=960:-2:flags=lanczos,fps=24" -crf 25 → work-<ad>[-en]-card.mp4
```

Sahneler ortak stili `../base.css` (bu klasördeki `base.css`) üzerinden alır.
