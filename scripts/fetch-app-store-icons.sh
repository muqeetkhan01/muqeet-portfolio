#!/bin/zsh
set -euo pipefail

apps=(
  "linkease|pk|6743674626|https://apps.apple.com/pk/app/linkease-for-travel-families/id6743674626"
  "gamechanger|us|1308415878|https://apps.apple.com/us/app/gamechanger/id1308415878"
  "gabu|pk|6443456022|https://apps.apple.com/pk/app/gabu/id6443456022"
  "chi-caregiver|no|1566324609|https://apps.apple.com/no/app/chi-caregiver/id1566324609"
  "red-eyed-films|us|6468818138|https://apps.apple.com/us/app/red-eyed-films/id6468818138"
  "poker-run-network|us|6756013238|https://apps.apple.com/us/app/poker-run-network/id6756013238"
  "nightly-whats-up|us|1667230632|https://apps.apple.com/us/app/nightly-whats-up/id1667230632"
  "nexlane-ads|us|6736761530|https://apps.apple.com/us/app/nexlane-ads/id6736761530"
  "l3-attendance-system|us|6476187276|https://apps.apple.com/us/app/l3-attendance-system/id6476187276"
  "listishop|us|6483000895|https://apps.apple.com/us/app/listishop/id6483000895"
  "renew-fitness|us|6504458241|https://apps.apple.com/us/app/renew-fitness/id6504458241"
  "swishswipe|pk|6740293282|https://apps.apple.com/pk/app/swishswipe/id6740293282"
  "mon-ticket-promo|pk|6745189242|https://apps.apple.com/pk/app/mon-ticket-promo/id6745189242"
  "muslimbiz|pk|6504187196|https://apps.apple.com/pk/app/muslimbiz/id6504187196"
  "festiness|pk|6742417446|https://apps.apple.com/pk/app/festiness/id6742417446"
)

for app in "${apps[@]}"; do
  IFS='|' read -r slug country app_id app_url <<< "$app"

  lookup_url="https://itunes.apple.com/lookup?country=${country}&id=${app_id}"
  artwork_url=$(curl -L -s "$lookup_url" | jq -r '.results[0].artworkUrl512 // .results[0].artworkUrl100 // .results[0].artworkUrl60 // empty')

  if [[ -z "$artwork_url" ]]; then
    artwork_url=$(curl -L -s "$app_url" | rg -o 'https://[^"]+/[0-9]+x[0-9]+bb\.(jpg|png)' -m 1 || true)
  fi

  if [[ -z "$artwork_url" ]]; then
    echo "missing $slug"
    exit 1
  fi

  mkdir -p "public/projects/$slug"
  curl -L -s "$artwork_url" -o "public/projects/$slug/icon.jpg"
  echo "downloaded $slug"
done
