#!/usr/bin/env bash
#
# Refresh the built course sites in this hub from their source repositories
# (expected to be siblings of this repo). Run after rebuilding a course's docs/.
#
set -euo pipefail
ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
SRC="$(dirname "$ROOT")"   # parent dir that holds the course source repos

MAP=(
  "apigeex-training:fapi-30-day"
  "apigeex-for-spring-devs:spring-boot-devs"
  "tetrate-ai-gateway-for-apigee-devs:tetrate-ai-gateway"
)

for pair in "${MAP[@]}"; do
  src="${pair%%:*}"; dst="${pair##*:}"
  if [ -d "$SRC/$src/docs" ]; then
    echo ">> syncing $src/docs -> $dst/"
    rm -rf "${ROOT:?}/$dst"
    cp -R "$SRC/$src/docs" "$ROOT/$dst"
  else
    echo "!! missing $SRC/$src/docs (skipped)"
  fi
done
# Mastery has no build step — it is the flat APIGEE-Training repo, pulled from GitHub.
echo ">> syncing APIGEE-Training -> mastery/"
tmp="$(mktemp -d)"
if git clone --depth 1 https://github.com/Sreenivas-Sadhu-Prabhakara/APIGEE-Training "$tmp" >/dev/null 2>&1; then
  rm -rf "${ROOT:?}/mastery"; mkdir -p "$ROOT/mastery"
  cp -R "$tmp"/* "$ROOT/mastery/"
  find "$ROOT/mastery" -name '.git' -prune -o -name '.DS_Store' -exec rm -f {} +
  rm -rf "$ROOT/mastery/.git"
fi
rm -rf "$tmp"

# Re-apply SEO to every page (meta description, canonical, Open Graph, Twitter,
# JSON-LD, favicon) plus regenerate sitemap.xml + robots.txt. Idempotent: it
# replaces the managed <!-- SEO:START -->...<!-- SEO:END --> block, so running it
# after each sync restores SEO the cp -R above would otherwise have wiped.
echo ">> re-injecting SEO (tools/seo_inject.py)"
python3 "$ROOT/tools/seo_inject.py"

echo ">> done. Review, then: git add -A && git commit && git push"
