#!/bin/bash
# Create 3 luxury MP4 showcase videos from bottle images
# Each video: slow zoom + pan with subtle ken-burns effect, 8 seconds, looped
set -e

mkdir -p /home/z/my-project/public/videos

ASSETS=/home/z/my-project/assets
OUT=/home/z/my-project/public/videos

# Video 1: Heritage Tonic Water — slow zoom-in with subtle upward pan
ffmpeg -y -loop 1 -i "$ASSETS/bottle1.png" \
  -vf "scale=1200:2100:force_original_aspect_ratio=increase,crop=1080:1920,eq=brightness=0.02:saturation=1.05,\
zoompan=z='min(zoom+0.0008,1.15)':d=240:s=1080x1920:x='iw/2-(iw/zoom/2)':y='ih-(ih/zoom)-40':fps=30" \
  -t 8 -c:v libx264 -preset slow -crf 18 -pix_fmt yuv420p \
  -movflags +faststart -profile:v high -level 4.0 \
  "$OUT/heritage_tonic.mp4" 2>&1 | tail -3

echo "=== Video 1 done ==="

# Video 2: Artisan Sparkling Botanical — gentle zoom with horizontal pan
ffmpeg -y -loop 1 -i "$ASSETS/bottle2.png" \
  -vf "scale=1200:2100:force_original_aspect_ratio=increase,crop=1080:1920,eq=brightness=0.02:saturation=1.05,\
zoompan=z='if(lte(zoom,1.0),1.15,max(1.001,zoom-0.0008))':d=240:s=1080x1920:x='iw/2-(iw/zoom/2)':y='ih/2-(ih/zoom/2)+sin(on/30)*15':fps=30" \
  -t 8 -c:v libx264 -preset slow -crf 18 -pix_fmt yuv420p \
  -movflags +faststart -profile:v high -level 4.0 \
  "$OUT/artisan_botanical.mp4" 2>&1 | tail -3

echo "=== Video 2 done ==="

# Video 3: Noir Kombucha Reserve — dramatic zoom out with subtle vertical pan
ffmpeg -y -loop 1 -i "$ASSETS/bottle3.png" \
  -vf "scale=1200:2100:force_original_aspect_ratio=increase,crop=1080:1920,eq=brightness=-0.02:saturation=1.1:contrast=1.05,\
zoompan=z='min(zoom+0.001,1.18)':d=240:s=1080x1920:x='iw/2-(iw/zoom/2)+sin(on/40)*10':y='ih/2-(ih/zoom/2)-30':fps=30" \
  -t 8 -c:v libx264 -preset slow -crf 18 -pix_fmt yuv420p \
  -movflags +faststart -profile:v high -level 4.0 \
  "$OUT/noir_kombucha.mp4" 2>&1 | tail -3

echo "=== Video 3 done ==="

ls -lh $OUT
