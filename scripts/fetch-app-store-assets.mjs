import fs from "node:fs";
import path from "node:path";
import { execFileSync } from "node:child_process";

const repoRoot = path.resolve(path.dirname(new URL(import.meta.url).pathname), "..");
const showcasePath = path.join(repoRoot, "src", "data", "portfolioShowcase.ts");
const projectsDir = path.join(repoRoot, "public", "projects");
const assetsMapPath = path.join(repoRoot, "src", "data", "projectAssets.ts");

const showcaseSource = fs.readFileSync(showcasePath, "utf8");
const apps = [];
const appMatcher = /slug:\s*"([^"]+)"[\s\S]*?href:\s*"([^"]+)"/g;

for (const match of showcaseSource.matchAll(appMatcher)) {
  const [, slug, href] = match;
  const parsed = href.match(/apps\.apple\.com\/([a-z]{2})\/.*?\/id(\d+)/i);

  if (!parsed) {
    continue;
  }

  const [, country, id] = parsed;
  apps.push({ slug, href, country: country.toLowerCase(), id });
}

function runCurl(args) {
  return execFileSync("curl", ["-L", ...args], {
    cwd: repoRoot,
    encoding: "utf8",
    stdio: ["ignore", "pipe", "pipe"]
  });
}

function downloadFile(url, outputPath) {
  execFileSync("curl", ["-L", "-s", url, "-o", outputPath], {
    cwd: repoRoot,
    stdio: ["ignore", "pipe", "pipe"]
  });
}

function inferExtension(url, fallback) {
  const match = url.match(/\.(png|jpg|jpeg|webp)(?:[/?]|$)/i);

  if (!match) {
    return fallback;
  }

  return match[1].toLowerCase() === "jpeg" ? "jpg" : match[1].toLowerCase();
}

function cleanupOldAssets(targetDir, stem) {
  for (const entry of fs.readdirSync(targetDir, { withFileTypes: true })) {
    if (!entry.isFile()) {
      continue;
    }

    if (entry.name.startsWith(`${stem}.`)) {
      fs.rmSync(path.join(targetDir, entry.name));
    }
  }
}

function writeAsset(targetDir, stem, url, fallbackExt) {
  const ext = inferExtension(url, fallbackExt);
  const outputPath = path.join(targetDir, `${stem}.${ext}`);

  cleanupOldAssets(targetDir, stem);
  downloadFile(url, outputPath);

  return `/projects/${path.basename(targetDir)}/${stem}.${ext}`;
}

function fetchLookup(app) {
  const lookupUrl = `https://itunes.apple.com/lookup?country=${app.country}&id=${app.id}`;
  const raw = runCurl(["-s", lookupUrl]);
  const data = JSON.parse(raw);
  const result = data.results?.[0];

  if (!result) {
    throw new Error(`No App Store lookup result for ${app.slug}`);
  }

  return result;
}

const projectAssets = {};
const failures = [];

for (const app of apps) {
  try {
    const result = fetchLookup(app);
    const targetDir = path.join(projectsDir, app.slug);

    fs.mkdirSync(targetDir, { recursive: true });

    const iconUrl = result.artworkUrl512 || result.artworkUrl100 || result.artworkUrl60;
    const screenshotUrl =
      result.screenshotUrls?.[0] ||
      result.ipadScreenshotUrls?.[0] ||
      result.appletvScreenshotUrls?.[0] ||
      result.artworkUrl512 ||
      result.artworkUrl100 ||
      result.artworkUrl60;

    const assetEntry = {};

    if (iconUrl) {
      assetEntry.icon = writeAsset(targetDir, "icon", iconUrl, "jpg");
    }

    if (screenshotUrl) {
      assetEntry.cover = writeAsset(targetDir, "cover", screenshotUrl, "png");
    }

    projectAssets[app.slug] = assetEntry;
    console.log(`synced ${app.slug}`);
  } catch (error) {
    failures.push(app.slug);
    console.error(`failed ${app.slug}: ${error.message}`);
  }
}

const assetFile = `export const projectAssets = ${JSON.stringify(projectAssets, null, 2)} as const;\n`;
fs.writeFileSync(assetsMapPath, assetFile);

if (failures.length > 0) {
  console.error(`missing assets for: ${failures.join(", ")}`);
  process.exitCode = 1;
}
