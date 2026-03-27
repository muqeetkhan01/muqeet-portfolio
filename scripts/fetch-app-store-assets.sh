#!/bin/zsh
set -euo pipefail
setopt null_glob

apps=(
  "linkease|pk|6743674626"
  "meetworth|us|1662378935"
  "cargorent|us|6448697695"
  "stm|pk|6473781207"
  "gamechanger|us|1308415878"
  "ferebe|us|1546841196"
  "quickclick|pk|6467562036"
  "pawwalk|us|1669535775"
  "ethio-properties|us|1441741097"
  "clean-scenes|us|6474244788"
  "burns-construction|us|6476978785"
  "lose-weight|pk|1266612768"
  "gabu|pk|6443456022"
  "dawn|pk|935631940"
  "haylo-photo-booth|pk|1557655049"
  "stretch2go|us|1605923898"
  "hyperwave|us|1669710037"
  "poker-run-app|us|1626958029"
  "chi-caregiver|no|1566324609"
  "hada|us|6474098538"
  "red-eyed-films|us|6468818138"
  "load-management|us|1554266807"
  "poker-run-network|us|6756013238"
  "nightly-whats-up|us|1667230632"
  "nexlane-ads|us|6736761530"
  "l3-attendance-system|us|6476187276"
  "listishop|us|6483000895"
  "renew-fitness|us|6504458241"
  "swishswipe|pk|6740293282"
  "mon-ticket-promo|pk|6745189242"
  "muslimbiz|pk|6504187196"
  "festiness|pk|6742417446"
)

normalize_ext() {
  local url="$1"

  if [[ "$url" == *"/webp/"* ]]; then
    echo "webp"
    return
  fi

  local ext="${url%%\?*}"
  ext="${ext##*.}"
  ext="${ext:l}"

  if [[ "$ext" == "jpeg" ]]; then
    ext="jpg"
  fi

  if [[ "$ext" != "png" && "$ext" != "jpg" && "$ext" != "webp" ]]; then
    ext="jpg"
  fi

  echo "$ext"
}

for app in "${apps[@]}"; do
  IFS='|' read -r slug country app_id <<< "$app"

  lookup_url="https://itunes.apple.com/lookup?country=${country}&id=${app_id}"
  lookup_json="$(curl -L -s "$lookup_url")"

  icon_url="$(printf '%s' "$lookup_json" | jq -r '.results[0].artworkUrl512 // .results[0].artworkUrl100 // .results[0].artworkUrl60 // empty')"
  cover_url="$(printf '%s' "$lookup_json" | jq -r '.results[0].screenshotUrls[0] // .results[0].ipadScreenshotUrls[0] // .results[0].appletvScreenshotUrls[0] // empty')"

  if [[ "$slug" == "muslimbiz" ]]; then
    icon_url="${icon_url:-https://play-lh.googleusercontent.com/pkKXoPl5q7n8T0s7KREtdvUZn1PLRgx-Ox0t4tkO8af4JpgGbyAxLBTsvEKKBCjwBACQsZisSYNmHPGbBA}"
    cover_url="${cover_url:-https://play-lh.googleusercontent.com/bQt_qbDmFG904qaq47qBxxJf2dN9umtY6qysSG5idUuZeyXLyvvZPrXy23VTTbtCVRIs=w1052-h592}"
  fi

  if [[ -z "$icon_url" || -z "$cover_url" ]]; then
    fallback_page="$(curl -L -s "https://apprecs.com/ios/${app_id}/${slug}")"

    if [[ -z "$icon_url" ]]; then
      icon_url="$(printf '%s' "$fallback_page" | rg -o 'https://apprecs\.org/ios/img/icons/webp/200/[^" ]+' | head -n 1 | tr -d '\\' || true)"
    fi

    if [[ -z "$cover_url" ]]; then
      cover_url="$(printf '%s' "$fallback_page" | rg -o 'https://apprecs\.org/ios/img/screenshots/webp/900/[^" ]+' | head -n 1 | tr -d '\\' || true)"
    fi
  fi

  if [[ -z "$icon_url" ]]; then
    echo "missing icon for $slug" >&2
    exit 1
  fi

  if [[ -z "$cover_url" ]]; then
    cover_url="$icon_url"
  fi

  mkdir -p "public/projects/$slug"
  rm -f "public/projects/$slug"/icon.* "public/projects/$slug"/cover.*

  icon_ext="$(normalize_ext "$icon_url")"
  cover_ext="$(normalize_ext "$cover_url")"

  curl -L -s "$icon_url" -o "public/projects/$slug/icon.${icon_ext}"
  curl -L -s "$cover_url" -o "public/projects/$slug/cover.${cover_ext}"

  echo "synced $slug"
done

{
  echo "export const projectAssets = {"

  for app in "${apps[@]}"; do
    IFS='|' read -r slug _ <<< "$app"
    icon_file="$(find "public/projects/$slug" -maxdepth 1 -type f -name 'icon.*' | head -n 1)"
    cover_file="$(find "public/projects/$slug" -maxdepth 1 -type f -name 'cover.*' | head -n 1)"

    echo "  \"$slug\": {"

    if [[ -n "$icon_file" ]]; then
      echo "    icon: \"/projects/$slug/${icon_file:t}\","
    fi

    if [[ -n "$cover_file" ]]; then
      echo "    cover: \"/projects/$slug/${cover_file:t}\","
    fi

    echo "  },"
  done

  echo "} as const;"
} > src/data/projectAssets.ts
