# 📥 Installation

BRUTAL-FPS ships installers for every major platform. Every release on the
[Releases page](https://github.com/brutal-45/GAME-FPS-BOOSTER/releases) contains:

| Platform | Files |
|----------|-------|
| **Windows** | `BRUTAL-FPS-Setup-1.0.1.exe` (NSIS installer) + `BRUTAL-FPS-Portable-1.0.1.exe` |
| **macOS** | `BRUTAL-FPS-1.0.1-x64.dmg` (Intel) + `BRUTAL-FPS-1.0.1-arm64.dmg` (Apple Silicon) + `-universal.dmg` |
| **Linux** | `BRUTAL-FPS-1.0.1.AppImage` (universal) + `BRUTAL-FPS-1.0.1.deb` (Debian/Ubuntu/Kali) |

---

## 🪟 Windows

### Option A — Installer (recommended)

1. Download `BRUTAL-FPS-Setup-1.0.1.exe`
2. Double-click and follow the wizard (Next → Next → Finish)
3. Launch from the desktop or Start Menu shortcut

### Option B — Portable

1. Download `BRUTAL-FPS-Portable-1.0.1.exe`
2. Run it anywhere — no installation needed (great for USB drives)

> If Windows SmartScreen warns you, click **More info → Run anyway**.

---

## 🍎 macOS

1. Download the correct DMG:
   - `BRUTAL-FPS-1.0.1-x64.dmg` for **Intel** Macs
   - `BRUTAL-FPS-1.0.1-arm64.dmg` for **Apple Silicon** (M1/M2/M3)
2. Open the DMG and drag **BRUTAL-FPS** into the **Applications** folder
3. First launch: right-click the app → **Open** (bypasses Gatekeeper; normal for
   unsigned open-source apps)
4. If macOS says the app is damaged, clear the quarantine flag:
   ```bash
   xattr -rd com.apple.quarantine /Applications/BRUTAL-FPS.app
   ```

---

## 🐧 Linux (Debian / Ubuntu / Mint / Pop!_OS)

### Option A — .deb package

```bash
wget https://github.com/brutal-45/GAME-FPS-BOOSTER/releases/latest/download/BRUTAL-FPS-1.0.1.deb
sudo dpkg -i BRUTAL-FPS-1.0.1.deb
sudo apt-get install -f        # fix any missing dependencies
brutal-fps                     # launch (in /opt/BRUTAL-FPS/)
```

### Option B — AppImage (no install)

```bash
wget https://github.com/brutal-45/GAME-FPS-BOOSTER/releases/latest/download/BRUTAL-FPS-1.0.1.AppImage
chmod +x BRUTAL-FPS-1.0.1.AppImage
./BRUTAL-FPS-1.0.1.AppImage
```

If you get a **FUSE** error:

```bash
sudo apt install -y fuse              # Debian/Ubuntu
./BRUTAL-FPS-1.0.1.AppImage --appimage-extract-and-run   # alternative
```

---

## 💀 Kali Linux (special package)

Kali Linux is Debian-based and fully supported. A **Kali-special build** ships in the
repo (`electron-builder-kali.json` + `build-kali.sh`) with dependencies that match
Kali's `t64` package names (`libgtk-3-0t64`, `libasound2t64`, …).

### Install (from source for now)

```bash
sudo apt update
sudo apt install -y git curl nodejs npm libgtk-3-0t64 libnotify4t64 libnss3 libxss1t64 libasound2t64 fuse

git clone https://github.com/brutal-45/GAME-FPS-BOOSTER.git
cd GAME-FPS-BOOSTER
./build-kali.sh                       # → release-kali/BRUTAL-FPS-1.0.1-kali.deb

sudo dpkg -i release-kali/BRUTAL-FPS-1.0.1-kali.deb
sudo apt-get install -f
brutal-fps-kali                       # launch
```

Or run the AppImage:

```bash
chmod +x release-kali/BRUTAL-FPS-1.0.1-kali.AppImage
./release-kali/BRUTAL-FPS-1.0.1-kali.AppImage
```

See [Kali Linux Package](Kali-Linux-Package) for details.

---

## ⚙️ After installation

1. Launch BRUTAL-FPS → the full booster dashboard opens
2. Click **⚡ BRUTAL BOOST**
3. Pick a mode (see [Boost Modes](Boost-Modes)) and enjoy!

The app also lives in your **system tray** — right-click for Quick Boost, Open
Dashboard, or Quit.
