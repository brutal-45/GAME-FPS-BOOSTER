#!/usr/bin/env bash
# ============================================================================
#  BRUTAL-FPS — Direct Wiki Publisher
#  Publishes docs/wiki/*.md directly into the GitHub Wiki repo:
#     https://github.com/brutal-45/GAME-FPS-BOOSTER.wiki.git
#
#  USAGE:
#     ./publish-wiki.sh                 # uses GH_TOKEN (or git credentials)
#     WIKI_PAT=ghp_xxx ./publish-wiki.sh   # explicit PAT (recommended)
#
#  NOTE (GitHub limitation):
#     The .wiki.git repository does NOT exist until the repo owner creates the
#     first wiki page in the web UI:
#        repo → Wiki tab → "Create the first page" → save as "Home"
#     Until then this script exits with instructions (push cannot create it).
# ============================================================================
set -euo pipefail

# Resolve the project directory BEFORE any cd, so docs/wiki/ is always found
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
SRC="$SCRIPT_DIR/docs/wiki"
cd "$SCRIPT_DIR"

# --- resolve repo (owner/repo) from git remote ---
REMOTE_URL=$(git config --get remote.origin.url || true)
if [[ -z "$REMOTE_URL" ]]; then
  REMOTE_URL="https://github.com/brutal-45/GAME-FPS-BOOSTER.git"
fi
REPO_FULL=$(echo "$REMOTE_URL" | sed -E 's#(https?://[^/]+/|git@github.com:)##; s#\.git$##')
OWNER=${REPO_FULL%%/*}
REPO=${REPO_FULL##*/}
WIKI_URL="https://github.com/$OWNER/$REPO.wiki.git"
PUBLIC_WIKI_URL="$WIKI_URL"

echo "ℹ️  Direct wiki repo: $PUBLIC_WIKI_URL"
echo "ℹ️  Source pages:     docs/wiki/*.md"

# --- auth ---
AUTH_TOKEN="${WIKI_PAT:-${GH_TOKEN:-}}"
if [[ -n "$AUTH_TOKEN" ]]; then
  WIKI_URL="https://x-access-token:${AUTH_TOKEN}@github.com/$OWNER/$REPO.wiki.git"
fi

# --- clone (fails clearly if wiki not yet initialized) ---
WORK=$(mktemp -d)
if git clone --quiet "$WIKI_URL" "$WORK/wiki" 2>/dev/null; then
  echo "✅ Wiki repo cloned."
else
  echo ""
  echo "❌ The wiki repository does not exist yet:"
  echo "   $PUBLIC_WIKI_URL"
  echo ""
  echo "   GitHub only creates it after the REPO OWNER creates the first page:"
  echo "   1. Open https://github.com/$OWNER/$REPO"
  echo "   2. Click the 'Wiki' tab"
  echo "   3. 'Create the first page' → paste docs/wiki/Home.md → Save as 'Home'"
  echo "   4. Re-run: ./publish-wiki.sh"
  echo ""
  echo "   (A token with wiki write access — e.g. a classic PAT with 'repo'"
  echo "    scope or WIKI_PAT secret — is required for pushes.)"
  rm -rf "$WORK"
  exit 1
fi
cd "$WORK/wiki"

# --- copy pages (Home replaces any existing Home) ---
if [[ ! -d "$SRC" ]]; then
  echo "❌ docs/wiki/ not found at $SRC"; exit 1
fi

# keep Home/Installation/.../_Sidebar/_Footer; skip README.md (repo-only guide)
for f in "$SRC"/*.md; do
  base=$(basename "$f")
  [[ "$base" == "README.md" ]] && continue
  cp "$f" "$base"
done

git add -A
if git diff --cached --quiet; then
  echo "✅ Wiki already up to date — nothing to push."
else
  git -c user.name="brutal-fps-wiki" -c user.email="wiki@brutal-fps.local" \
    commit -m "Update BRUTAL-FPS wiki pages" >/dev/null
  git push --quiet "$WIKI_URL" master:master
  echo "✅ Wiki updated and pushed to $OWNER/$REPO.wiki.git"
fi
rm -rf "$WORK"
