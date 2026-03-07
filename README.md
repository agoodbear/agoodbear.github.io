# hugoBasicExample

This repository offers an example site for [Hugo](https://gohugo.io/) and also it provides the default content for demos hosted on the [Hugo Themes Showcase](https://themes.gohugo.io/).

# Using

1. [Install Hugo](https://gohugo.io/overview/installing/)
2. Clone this repository
```bash
git clone https://github.com/gohugoio/hugoBasicExample.git
cd hugoBasicExample
```
3. Clone the repository you want to test. If you want to test all Hugo Themes then follow the instructions provided [here](https://github.com/gohugoio/hugoThemes#installing-all-themes)
4. Run Hugo and select the theme of your choosing
```bash
hugo server -t YOURTHEME
```
5. Under `/content/` this repository contains the following:
- A section called `/post/` with sample markdown content
- A headless bundle called `homepage` that you may want to use for single page applications. You can find instructions about headless bundles over [here](https://gohugo.io/content-management/page-bundles/#headless-bundle)
- An `about.md` that is intended to provide the `/about/` page for a theme demo
6. If you intend to build a theme that does not fit in the content structure provided in this repository, then you are still more than welcome to submit it for review at the [Hugo Themes](https://github.com/gohugoio/hugoThemes/issues) respository

# Google Search Console Indexing Flow

After each deployment, GitHub Actions now auto-collects newly published `/post/` URLs by diffing:
- Current build sitemap: `public/sitemap.xml`
- Previous live sitemap: `https://agoodbear.github.io/sitemap.xml`

The workflow writes:
- `public/gsc/new-urls-latest.txt`
- `public/gsc/new-urls-latest.json`

Then you can submit those URLs in one command (Chromium mode):

```bash
npm run gsc:index:new
```

Useful options:

```bash
# Dry run (only print URLs)
node scripts/submit_gsc_index.mjs --dry-run

# Submit from a local file
node scripts/submit_gsc_index.mjs --file public/gsc/new-urls-latest.txt

# Submit only first 3 URLs
node scripts/submit_gsc_index.mjs --limit 3
```
