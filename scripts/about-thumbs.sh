#!/bin/zsh
# 關於我頁：替 data/about.yaml 用到的圖產縮圖（720px）與放大圖（1800px）WebP，已存在就跳過。
# 原圖 GitHub Pages 傳很慢（2MB 要 50 秒），卡片一律吃縮圖。新增講座後跑一次。
cd "${0:A:h}/.."
grep -oE '/(images|bloggallery)/[^" ,\]]+\.(png|jpe?g|PNG|JPE?G)' data/about.yaml | sort -u | while read p; do
  n=${${p:t}%.*}; out=static/images/about-thumbs
  [[ -f $out/$n.webp ]] || magick "static$p" -auto-orient -strip -resize '720x720>' -quality 72 "$out/$n.webp"
  [[ -f $out/$n-lg.webp ]] || magick "static$p" -auto-orient -strip -resize '1800x1800>' -quality 80 "$out/$n-lg.webp"
done
echo "about-thumbs: $(ls static/images/about-thumbs | wc -l | tr -d ' ') 檔"
