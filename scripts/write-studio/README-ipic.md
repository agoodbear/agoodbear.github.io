# Write Studio iPic Setup

This bridge lets Write Studio upload images to iPic (same account/host you configured inside iPic/Typora).

## 1. Prerequisites

- macOS
- iPic installed (`/Applications/iPic.app`)
- iPic image host already configured in iPic (for example Imgur/S3/R2)
- Xcode Command Line Tools (`swift` command available)

## 2. Start local bridge

From project root:

```bash
node scripts/write-studio/ipic-bridge.mjs
```

Default endpoint:

- `http://127.0.0.1:44777/health`
- `http://127.0.0.1:44777/upload-ipic`

## 3. Enable iPic upload in markdown front matter

In your post front matter:

```yaml
---
typora-upload-image: iPic
---
```

When this key is present, drag/drop or paste image in Write Studio will try iPic upload first.

## 4. Optional local fallback path setting

If iPic upload fails, Write Studio falls back to local path insert.
You can control local copy folder with:

```yaml
typora-copy-images-to: /images
```

## 5. Notes

- Write Studio cannot call iPic directly from browser due browser security model.
- The local bridge handles this native handoff.
- Keep iPic running while uploading.
