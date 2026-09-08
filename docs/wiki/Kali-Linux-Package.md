# 💀 Kali Linux Package

Kali Linux is a Debian-based distro, so BRUTAL-FPS runs on it natively. The repo
includes a **Kali-special build** so the package's dependencies match Kali 2024/2025+
package names (Debian trixie style `t64` libraries).

---

## 📦 What's in the Kali package

| File | Purpose |
|------|---------|
| `electron-builder-kali.json` | Kali build config (deps, branding, artifact names) |
| `build-kali.sh` | One-command build script |
| `release-kali/BRUTAL-FPS-1.0.1-kali.deb` | Debian package (built output) |
| `release-kali/BRUTAL-FPS-1.0.1-kali.AppImage` | Portable AppImage (built output) |

**Package identity:**

- Executable: `brutal-fps-kali`
- Package name: `brutal-fps-kali`
- Desktop entry: **BRUTAL-FPS** (Games category, `StartupWMClass` set)

**Dependencies** (with fallbacks so it also works on older Debian/Ubuntu):

```
libgtk-3-0t64 | libgtk-3-0
libasound2t64 | libasound2
libnss3
libxss1t64 | libxss1
libnotify4t64 | libnotify4
fuse3 | fuse
```

---

## 🛠️ Build it on Kali

### 1. Prerequisites

```bash
sudo apt update
sudo apt install -y git curl nodejs npm \
  libgtk-3-0t64 libnotify4t64 libnss3 libxss1t64 libasound2t64 fuse
```

> Bun (recommended) is even faster: `curl -fsSL https://bun.sh/install | bash`

### 2. Clone & build

```bash
git clone https://github.com/brutal-45/GAME-FPS-BOOSTER.git
cd GAME-FPS-BOOSTER
./build-kali.sh
```

Output lands in `release-kali/`:

- `BRUTAL-FPS-1.0.1-kali.deb`
- `BRUTAL-FPS-1.0.1-kali.AppImage`

### 3. Install

```bash
# .deb (recommended)
sudo dpkg -i release-kali/BRUTAL-FPS-1.0.1-kali.deb
sudo apt-get install -f        # fix any missing dependencies
brutal-fps-kali                # launch

# …or the AppImage (no install)
chmod +x release-kali/BRUTAL-FPS-1.0.1-kali.AppImage
./release-kali/BRUTAL-FPS-1.0.1-kali.AppImage
```

If FUSE is missing: `sudo apt install -y fuse3`, or run with
`--appimage-extract-and-run`.

---

## ✨ Graphics drivers on Kali (important for gaming FPS)

For best results install the proper GPU driver before benchmarking:

```bash
sudo apt update && sudo apt install -y kali-linux-gpu    # meta package
```

AMD/NVIDIA users can check the driver with `glxinfo | grep "OpenGL renderer"`.
