#!/usr/bin/env node
/**
 * Scans content/post/ecg-post-*.md and outputs a JSON array of
 * { slug, title, date } for use by the notify-new-posts API.
 */
const fs = require("fs");
const path = require("path");

const postDir = path.join(__dirname, "..", "content", "post");
const files = fs.readdirSync(postDir).filter((f) => /^ecg-post-\d+\.md$/i.test(f));

const posts = [];

for (const file of files) {
  const content = fs.readFileSync(path.join(postDir, file), "utf8");
  const slug = file.replace(/\.md$/i, "");

  // Extract title from front matter
  let title = slug;
  const titleMatch = content.match(/^title\s*=\s*"([^"]+)"/m) || content.match(/^title\s*:\s*"?([^"\n]+)/m);
  if (titleMatch) title = titleMatch[1].trim();

  // Extract date
  let date = "";
  const dateMatch = content.match(/^date\s*=\s*"?([^"\n]+)/m) || content.match(/^date\s*:\s*"?([^"\n]+)/m);
  if (dateMatch) date = dateMatch[1].trim().replace(/"/g, "");

  // Skip drafts — support both TOML (`draft = true`) and YAML (`draft: true`)
  if (/^draft\s*[:=]\s*true\b/m.test(content)) continue;

  // Skip scheduled (future-dated) posts: Hugo won't have published them yet,
  // so notifying subscribers would mail out a 404 link.
  if (date) {
    const ts = Date.parse(date);
    if (!Number.isNaN(ts) && ts > Date.now()) continue;
  }

  posts.push({ slug, title, date });
}

// Sort by date descending
posts.sort((a, b) => (b.date || "").localeCompare(a.date || ""));

process.stdout.write(JSON.stringify(posts, null, 2) + "\n");
