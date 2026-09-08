# 🔄 CI/CD & Releases

BRUTAL-FPS uses **GitHub Actions** to build every platform automatically and publish
GitHub Releases — no manual packaging needed.

---

## ⚙️ Workflow: `Build & Release All Platforms`

File: `.github/workflows/build.yml`

### Triggers

| Trigger | What happens |
|---------|--------------|
| Push tag `v*` (e.g. `v1.0.1`) | Build all platforms **and publish a release** |
| Manual "Run workflow" | Build all platforms, upload artifacts |

### Build matrix

| Job | Runner | Outputs |
|-----|--------|---------|
| Windows | `windows-latest` | `BRUTAL-FPS-Setup-*.exe`, `BRUTAL-FPS-Portable-*.exe` |
| macOS | `macos-latest` | `BRUTAL-FPS-*-x64.dmg`, `-arm64.dmg`, `-universal.dmg` |
| Linux | `ubuntu-latest` | `BRUTAL-FPS-*.AppImage`, `BRUTAL-FPS-*.deb` |
| Kali Linux (optional) | `ubuntu-latest` | `BRUTAL-FPS-*-kali.deb`, `-kali.AppImage` |

A final **Create GitHub Release** job downloads all artifacts and publishes them with
auto-generated release notes.

---

## 🚀 How to release a new version

**Easiest — tag and push:**

```bash
git tag v1.0.2
git push origin v1.0.2
```

That's it. The workflow builds every platform and creates the release with all
installers attached.

**Release numbering** follows [semver](https://semver.org):
`MAJOR.MINOR.PATCH` — bump version in `package.json` first (the build uses that
version for artifact names).

## 📦 What an automatic release contains

- `BRUTAL-FPS-Setup-<version>.exe` + `BRUTAL-FPS-Portable-<version>.exe`
- `BRUTAL-FPS-<version>-x64.dmg` + `-arm64.dmg` (+ `-universal.dmg`)
- `BRUTAL-FPS-<version>.AppImage` + `.deb`

> `.blockmap` and `builder-debug.yml` files are automatic electron-builder extras —
> safe to ignore.

## 🧪 Manual run (no release)

1. Open the **Actions** tab
2. "Build & Release All Platforms" → **Run workflow**
3. Artifacts are downloadable from the run page (a release is **not** created)

## 🩺 Keeping CI green

- Keep `electron-builder` in `devDependencies` in sync with the config schema
  (v26+ — see [Building from Source](Building-from-Source))
- On tag pushes the workflow runs from the **tagged commit**, so push config fixes
  before tagging
- GitHub Permissions: the workflow declares `contents: write` so it can create releases

## 📋 Release checklist

1. `package.json` → bump `version`
2. Update `README.md` / docs version mentions
3. Commit & push to `master`
4. `git tag vX.Y.Z && git push origin vX.Y.Z`
5. Verify the release appears with all 6+ assets
