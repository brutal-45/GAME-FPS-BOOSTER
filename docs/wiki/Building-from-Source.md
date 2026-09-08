# 🔧 Building from Source

Build BRUTAL-FPS installers for your platform — or all platforms via CI.

---

## Prerequisites

- **Node.js 18+** (or **Bun** — recommended; the repo uses `bun.lock`)
- **Git**
- Linux: `libgtk-3-0 libnotify4 libnss3 libxss1 libasound2t64 fuse`
- macOS: Xcode Command Line Tools (`xcode-select --install`)

## 1. Clone

```bash
git clone https://github.com/brutal-45/GAME-FPS-BOOSTER.git
cd GAME-FPS-BOOSTER
```

## 2. Install dependencies

```bash
bun install       # or: npm install
```

## 3. Build

### One-click scripts

| Platform | Command |
|----------|---------|
| Windows | `build-exe.bat` (installer + portable) |
| macOS | `./build-mac.sh` (x64 + arm64 DMGs) |
| Linux | `./build-linux.sh` (AppImage + deb) |
| Kali | `./build-kali.sh` (Kali-tuned deb + AppImage) |
| All (scripts) | `build-all.bat` |

### npm scripts

```bash
npm run electron:build           # Windows NSIS + portable
npm run electron:mac             # macOS x64 + arm64 DMGs
npm run electron:linux           # Linux AppImage + .deb

# Single-arch macOS
npm run electron:build:mac-intel # x64 only
npm run electron:build:mac-arm   # arm64 only
```

Output goes to `release/` (or `release-kali/` for the Kali config).

---

## 📁 What gets bundled

The desktop app is an Electron shell that loads the self-contained booster
dashboard (`public/brutal-fps-standalone.html`), mapped to
`resources/app/index.html` inside the package. This keeps installers lean:

- `electron/main.js` — Electron entry (window, tray, quick boost)
- `public/brutal-fps-standalone.html` — the full UI/engine (no server needed)
- `build/icon.*` — app icons

## 🔧 Configuration

- `electron-builder.json` — main packaging config (uses **electron-builder 26+**)
- `electron-builder-kali.json` — Kali-specific config
- `package.json` — version, scripts, dependencies

> ⚠️ **electron-builder 26 note:** config keys changed vs v24 — `linux.desktop` must be
> `{ "entry": { ... } }` and `linux.deb`/`appImage` options live at the **top level**
> of the config. See `electron-builder.json` in the repo for the working shape.

## 🐛 Common build problems

- **"Cannot find module 'electron'"** → run `bun install` again; Electron must be in
  `devDependencies`.
- **Electron download fails** → set a mirror:
  `ELECTRON_MIRROR=https://npmmirror.com/mirrors/electron/`
- **AppImage FUSE error** → `sudo apt install -y fuse`, or run with
  `--appimage-extract-and-run`.

See [CI/CD & Releases](CI-CD-and-Releases) to let GitHub Actions build for you.
