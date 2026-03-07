#!/usr/bin/env node
import fs from "fs";
import path from "path";
import process from "process";
import { chromium } from "playwright";

const DEFAULT_PROPERTY = "https://agoodbear.github.io/";
const DEFAULT_URL_LIST_ENDPOINT =
  "https://agoodbear.github.io/gsc/new-urls-latest.txt";
const DEFAULT_LOCAL_URL_LIST = path.join(
  process.cwd(),
  "public",
  "gsc",
  "new-urls-latest.txt"
);

function parseArgs(argv) {
  const args = {
    property: process.env.GSC_PROPERTY_URL || DEFAULT_PROPERTY,
    inputFile: "",
    inputUrl: process.env.GSC_URL_LIST_ENDPOINT || DEFAULT_URL_LIST_ENDPOINT,
    profileDir:
      process.env.GSC_PROFILE_DIR ||
      path.join(process.cwd(), ".playwright-gsc-profile-chromium"),
    limit: 0,
    dryRun: false,
    output: path.join(process.cwd(), ".gsc", "last-run.json"),
  };

  for (let i = 2; i < argv.length; i += 1) {
    const token = argv[i];
    const next = argv[i + 1];
    if (token === "--property" && next) {
      args.property = next;
      i += 1;
    } else if (token === "--file" && next) {
      args.inputFile = next;
      i += 1;
    } else if (token === "--url" && next) {
      args.inputUrl = next;
      i += 1;
    } else if (token === "--profile-dir" && next) {
      args.profileDir = next;
      i += 1;
    } else if (token === "--limit" && next) {
      args.limit = Number(next) || 0;
      i += 1;
    } else if (token === "--dry-run") {
      args.dryRun = true;
    } else if (token === "--output" && next) {
      args.output = next;
      i += 1;
    }
  }

  return args;
}

async function readUrlsFromTextEndpoint(url) {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Failed to fetch URL list: ${url} (${response.status})`);
  }
  const txt = await response.text();
  return txt
    .split(/\r?\n/)
    .map((s) => s.trim())
    .filter(Boolean);
}

async function loadUrls(args) {
  if (args.inputFile) {
    const txt = fs.readFileSync(args.inputFile, "utf-8");
    return txt
      .split(/\r?\n/)
      .map((s) => s.trim())
      .filter(Boolean);
  }
  try {
    return await readUrlsFromTextEndpoint(args.inputUrl);
  } catch (error) {
    if (fs.existsSync(DEFAULT_LOCAL_URL_LIST)) {
      const txt = fs.readFileSync(DEFAULT_LOCAL_URL_LIST, "utf-8");
      return txt
        .split(/\r?\n/)
        .map((s) => s.trim())
        .filter(Boolean);
    }
    throw error;
  }
}

function normalizeUrls(urls) {
  const set = new Set();
  for (const url of urls) {
    if (!url.startsWith("http")) continue;
    if (!url.includes("/post/")) continue;
    set.add(url.replace(/\/?$/, "/"));
  }
  return [...set];
}

async function ensureLoggedIn(page, property) {
  await page.goto(
    `https://search.google.com/search-console?resource_id=${encodeURIComponent(property)}`,
    { waitUntil: "domcontentloaded" }
  );

  const hasSearchBox = await page
    .getByRole("combobox", { name: /檢查|Inspect|URL/i })
    .first()
    .isVisible()
    .catch(() => false);

  if (!hasSearchBox) {
    console.log("Google Search Console 尚未登入，請在開啟的 Chromium 視窗完成登入後按 Enter...");
    await new Promise((resolve) => {
      process.stdin.resume();
      process.stdin.once("data", () => resolve());
    });
    await page.goto(
      `https://search.google.com/search-console?resource_id=${encodeURIComponent(property)}`,
      { waitUntil: "domcontentloaded" }
    );
  }
}

async function closeModalIfPresent(page) {
  const closeButton = page.getByRole("button", { name: /^關閉$/ }).last();
  if (await closeButton.isVisible().catch(() => false)) {
    await closeButton.click().catch(() => {});
  }
}

async function submitOne(page, url) {
  const combobox = page
    .getByRole("combobox", { name: /檢查「|Inspect|URL/i })
    .first();

  await combobox.click({ timeout: 10000 });
  await combobox.fill("");
  await combobox.fill(url);
  await combobox.press("Enter");

  await page.getByText(url, { exact: false }).first().waitFor({ timeout: 45000 });

  const btn = page
    .getByRole("button", { name: /要求建立索引|再次提出要求|Request indexing/i })
    .first();

  const btnText = (await btn.innerText().catch(() => "")).trim();
  if (/再次提出要求|已要求建立索引/i.test(btnText)) {
    return { url, status: "already_requested" };
  }

  await btn.click({ timeout: 10000 });

  const quotaModal = page.getByText(/超過配額|quota|請明天再嘗試/i).first();
  const successModal = page.getByRole("dialog", { name: /已要求建立索引|Request submitted/i }).first();

  const outcome = await Promise.race([
    quotaModal
      .waitFor({ state: "visible", timeout: 120000 })
      .then(() => "quota")
      .catch(() => ""),
    successModal
      .waitFor({ state: "visible", timeout: 120000 })
      .then(() => "success")
      .catch(() => ""),
  ]);

  if (outcome === "quota") {
    await closeModalIfPresent(page);
    return { url, status: "quota_exceeded" };
  }

  await closeModalIfPresent(page);
  return { url, status: outcome === "success" ? "submitted" : "submitted_unknown" };
}

async function main() {
  const args = parseArgs(process.argv);
  const rawUrls = await loadUrls(args);
  let urls = normalizeUrls(rawUrls);

  if (args.limit > 0) {
    urls = urls.slice(0, args.limit);
  }

  if (urls.length === 0) {
    console.log("No URLs to submit.");
    return;
  }

  if (args.dryRun) {
    console.log(JSON.stringify({ dryRun: true, total: urls.length, urls }, null, 2));
    return;
  }

  fs.mkdirSync(path.dirname(args.output), { recursive: true });
  fs.mkdirSync(args.profileDir, { recursive: true });

  const context = await chromium.launchPersistentContext(args.profileDir, {
    headless: false,
    viewport: { width: 1400, height: 920 },
  });

  const page = context.pages()[0] ?? (await context.newPage());

  const report = {
    property: args.property,
    source: args.inputFile || args.inputUrl,
    started_at: new Date().toISOString(),
    total: urls.length,
    results: [],
  };

  try {
    await ensureLoggedIn(page, args.property);

    for (const url of urls) {
      const result = await submitOne(page, url);
      report.results.push(result);
      console.log(`${result.status}\t${url}`);
      if (result.status === "quota_exceeded") {
        break;
      }
      await page.waitForTimeout(1200);
    }
  } finally {
    report.finished_at = new Date().toISOString();
    fs.writeFileSync(args.output, JSON.stringify(report, null, 2) + "\n", "utf-8");
    await context.close();
    console.log(`\nReport written to ${args.output}`);
  }
}

main().catch((err) => {
  console.error(err);
  process.exitCode = 1;
});
