import fs from "node:fs";
import path from "node:path";

const apps = [
  { slug: "linkease", country: "pk", id: "6743674626" },
  { slug: "gamechanger", country: "us", id: "1308415878" },
  { slug: "gabu", country: "pk", id: "6443456022" },
  { slug: "chi-caregiver", country: "no", id: "1566324609" },
  { slug: "red-eyed-films", country: "us", id: "6468818138" },
  { slug: "poker-run-network", country: "us", id: "6756013238" },
  { slug: "nightly-whats-up", country: "us", id: "1667230632" },
  { slug: "nexlane-ads", country: "us", id: "6736761530" },
  { slug: "l3-attendance-system", country: "us", id: "6476187276" },
  { slug: "listishop", country: "us", id: "6483000895" },
  { slug: "renew-fitness", country: "us", id: "6504458241" },
  { slug: "swishswipe", country: "pk", id: "6740293282" },
  { slug: "mon-ticket-promo", country: "pk", id: "6745189242" },
  { slug: "muslimbiz", country: "pk", id: "6504187196" },
  { slug: "festiness", country: "pk", id: "6742417446" }
];

async function fetchJson(url) {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`Request failed for ${url}: ${response.status}`);
  }

  return response.json();
}

async function fetchBuffer(url) {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`Image download failed for ${url}: ${response.status}`);
  }

  return Buffer.from(await response.arrayBuffer());
}

async function downloadIcon(app) {
  const lookupUrl = `https://itunes.apple.com/lookup?country=${app.country}&id=${app.id}`;
  const data = await fetchJson(lookupUrl);
  const result = data.results?.[0];

  if (!result) {
    throw new Error(`No App Store result for ${app.slug}`);
  }

  const artworkUrl = result.artworkUrl512 || result.artworkUrl100 || result.artworkUrl60;

  if (!artworkUrl) {
    throw new Error(`No artwork URL for ${app.slug}`);
  }

  const buffer = await fetchBuffer(artworkUrl);
  const targetDir = path.join("public", "projects", app.slug);

  fs.mkdirSync(targetDir, { recursive: true });
  fs.writeFileSync(path.join(targetDir, "icon.jpg"), buffer);
  console.log(`downloaded ${app.slug}`);
}

for (const app of apps) {
  await downloadIcon(app);
}
