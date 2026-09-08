# 📦 BRUTAL-FPS Installation Guide

Complete installation instructions for all platforms.

---

> **💡 Prebuilt binaries:** The GitHub Actions workflow (`.github/workflows/build.yml`) builds
> every installer automatically and attaches them to a GitHub Release whenever a tag like
> `v1.0.1` is pushed. Open the **Releases** page of the repo to download the Windows `.exe`
> (NSIS + portable), macOS `.dmg` for Intel (`-x64`) and Apple Silicon (`-arm64`), and Linux `.AppImage` + `.deb`. You can also
> trigger the same builds manually from the **Actions** tab → "Build & Release All Platforms"
> → **Run workflow** (this produces artifacts without creating a release).

---

## 🔥 Quick Install (Recommended)

### Windows Users
1. **Download**: [BRUTAL-FPS-Setup.exe](https://github.com/brutal-45/GAME-FPS-BOOSTER/releases/latest/download/BRUTAL-FPS-Setup-1.0.1.exe)
2. **Run**: Double-click the downloaded file
3. **Install**: Follow the wizard (Next → Next → Finish)
4. **Launch**: Click desktop icon or find in Start Menu

### macOS Users
1. **Download**: [BRUTAL-FPS.dmg](https://github.com/brutal-45/GAME-FPS-BOOSTER/releases/latest/download/BRUTAL-FPS-1.0.1-x64.dmg)
2. **Open**: Double-click the .dmg file
3. **Install**: Open the DMG and drag BRUTAL-FPS to Applications folder
4. **Launch**: Open from Applications or Launchpad

### Linux Users
**Option A: AppImage (Universal)**
```bash
# Download
wget https://github.com/brutal-45/GAME-FPS-BOOSTER/releases/latest/download/BRUTAL-FPS-1.0.1.AppImage

# Make executable
chmod +x BRUTAL-FPS-1.0.1.AppImage

# Run
./BRUTAL-FPS-1.0.1.AppImage
```

**Option B: Debian/Ubuntu Package**
```bash
# Download
wget https://github.com/brutal-45/GAME-FPS-BOOSTER/releases/latest/download/BRUTAL-FPS-1.0.1.deb

# Install
sudo dpkg -i BRUTAL-FPS-1.0.1.deb
```

---

## 💻 Detailed Installation

<a id="windows-installation"></a>
### Windows Installation (NSIS Installer)

**Requirements:**
- Windows 7 SP1 or later (32/64-bit)
- 100MB free disk space
- Admin rights (recommended)

**Steps:**

1. **Download the installer**
   - File: `BRUTAL-FPS-Setup-1.0.1.exe`
   - SHA256: (Available on releases page)

2. **Run the installer**
   ```
   Double-click BRUTAL-FPS-Setup-1.0.1.exe
   ```

3. **Accept License Agreement**
   - Read the MIT license
   - Click "I Agree"

4. **Choose Installation Location**
   - Default: `C:\Program Files\BRUTAL-FPS`
   - Or choose custom location
   - Click "Next"

5. **Select Additional Tasks**
   - ☑ Create desktop shortcut
   - ☑ Create Start Menu shortcut
   - Click "Next"

6. **Install**
   - Click "Install"
   - Wait for completion (~30 seconds)

7. **Finish**
   - ☑ Launch BRUTAL-FPS
   - Click "Finish"

**Uninstall:**
- Go to Control Panel → Programs → Uninstall
- Select "BRUTAL-FPS" and click Uninstall

---

<a id="windows-portable"></a>
### Windows Portable Edition

**Perfect for:** USB drives, no admin rights, testing

**Steps:**

1. **Download portable version**
   - File: `BRUTAL-FPS-Portable-1.0.1.exe`
   - No installation required!

2. **Run directly**
   ```
   Double-click BRUTAL-FPS-Portable-1.0.1.exe
   ```

3. **Use anywhere**
   - Copy to USB drive
   - Run on any Windows PC
   - No traces left behind

---

<a id="macos-installation"></a>
### macOS Installation

**Requirements:**
- macOS 10.13 (High Sierra) or later
- Intel or Apple Silicon (M1/M2/M3)
- 100MB free disk space

**Steps:**

1. **Download the right DMG**
   - File: `BRUTAL-FPS-1.0.1-x64.dmg` (Intel Macs)
   - File: `BRUTAL-FPS-1.0.1-arm64.dmg` (Apple Silicon M1/M2/M3+)

2. **Open DMG**
   ```bash
   # Or double-click in Finder
   open BRUTAL-FPS-1.0.1-x64.dmg   # or -arm64.dmg on Apple Silicon
   ```

3. **Drag to Applications**
   - Drag BRUTAL-FPS icon to Applications folder
   - Wait for copy to complete

4. **First Launch**
   - Open Applications folder
   - Right-click BRUTAL-FPS
   - Click "Open" (bypasses Gatekeeper)
   - Click "Open" in warning dialog

**Note:** On first launch, macOS may show a warning. This is normal for apps not from the App Store.

**Uninstall:**
```bash
# Drag to Trash or run:
rm -rf /Applications/BRUTAL-FPS.app
```

---

<a id="linux-installation"></a>
### Linux AppImage

**Requirements:**
- Linux kernel 3.0 or later
- FUSE support
- glibc 2.17+

**Steps:**

1. **Download AppImage**
   ```bash
   wget https://github.com/brutal-45/GAME-FPS-BOOSTER/releases/latest/download/BRUTAL-FPS-1.0.1.AppImage
   ```

2. **Make executable**
   ```bash
   chmod +x BRUTAL-FPS-1.0.1.AppImage
   ```

3. **Run**
   ```bash
   ./BRUTAL-FPS-1.0.1.AppImage
   ```

4. **Optional: Integrate with system**
   ```bash
   # Move to applications
   mv BRUTAL-FPS-1.0.1.AppImage /opt/brutal-fps.AppImage

   # Create desktop entry
   echo '[Desktop Entry]
   Name=BRUTAL-FPS
   Exec=/opt/brutal-fps.AppImage
   Icon=brutal-fps
   Type=Application
   Categories=Game;' | sudo tee /usr/share/applications/brutal-fps.desktop
   ```

---

<a id="linux-debian"></a>
### Linux Debian Package

**Supported Distributions:**
- Debian 10+
- Ubuntu 18.04+
- Linux Mint 19+
- Pop!_OS 20.04+
- Other Debian-based distros

**Steps:**

1. **Download .deb package**
   ```bash
   wget https://github.com/brutal-45/GAME-FPS-BOOSTER/releases/latest/download/BRUTAL-FPS-1.0.1.deb
   ```

2. **Install**
   ```bash
   sudo dpkg -i BRUTAL-FPS-1.0.1.deb
   ```

3. **Fix dependencies (if needed)**
   ```bash
   sudo apt-get install -f
   ```

4. **Launch**
   - From the applications menu
   - Or directly: `/opt/BRUTAL-FPS/brutal-fps`

**Uninstall:**
```bash
sudo apt-get remove brutal-fps
```

---

---

<a id="linux-kali"></a>
### Kali Linux (Debian-based)

Kali Linux is Debian-based, so it is fully supported.

**Step 1 - Install prerequisites (Bun + Electron libraries):**

```bash
sudo apt update
sudo apt install -y git curl libgtk-3-0 libnotify4 libnss3 libxss1 libasound2 fuse

# Bun is recommended (the project uses bun.lock)
curl -fsSL https://bun.sh/install | bash
source ~/.bashrc
```

> **Note for newer Kali (2025.x / Debian trixie):** some packages use the `t64` suffix.
> If `libgtk-3-0` or `libasound2` is missing, install `libgtk-3-0t64` and `libasound2t64`.

**Step 2 - Clone and build:**

```bash
git clone https://github.com/brutal-45/GAME-FPS-BOOSTER.git
cd GAME-FPS-BOOSTER

# ▶ KALI-SPECIAL PACKAGE (recommended on Kali):
./build-kali.sh

# Or the generic Linux package:
./build-linux.sh
```

`build-kali.sh` creates `release-kali/BRUTAL-FPS-1.0.1-kali.deb` and
`release-kali/BRUTAL-FPS-1.0.1-kali.AppImage` — a Kali-tuned package whose dependencies use
the Debian trixie `t64` library names (`libgtk-3-0t64`, `libasound2t64`, …) with fallbacks to
the older names, so it installs cleanly on Kali 2024/2025+ and older Debian-based distros.

**Step 3a - Install the Kali .deb (recommended):**

```bash
sudo dpkg -i release-kali/BRUTAL-FPS-1.0.1-kali.deb
sudo apt-get install -f   # fix any missing dependencies
```

Then launch from the applications menu, or run the binary directly:

```bash
brutal-fps-kali
```

**Step 3b - Or just run the Kali AppImage (no install):**

```bash
chmod +x release-kali/BRUTAL-FPS-1.0.1-kali.AppImage
./release-kali/BRUTAL-FPS-1.0.1-kali.AppImage
```

If you get a FUSE error, install `fuse3` (`sudo apt install -y fuse3`) or run with
`./release-kali/BRUTAL-FPS-1.0.1-kali.AppImage --appimage-extract-and-run`.

**Step 3c - Generic packages (all Debian-based distros):** use the same steps with
`release/BRUTAL-FPS-1.0.1.deb` / `.AppImage` from `./build-linux.sh`.

## 🔧 Build from Source

For advanced users who want to build locally:

### Prerequisites

```bash
# Node.js 18+
node --version  # Should be v18 or higher

# npm or bun
npm --version

# Git
git --version
```

### Clone Repository

```bash
git clone https://github.com/brutal-45/GAME-FPS-BOOSTER.git
cd GAME-FPS-BOOSTER
```

### Install Dependencies

```bash
npm install
# or
bun install
```

### Development Mode

```bash
# Run web app
npm run dev

# Run Electron app (desktop)
npm run electron:dev
```

### Build Desktop Apps

> 💡 **Cross-platform note:** `.dmg` can only be built on macOS, `.exe` on Windows,
> `.AppImage`/`.deb` on Linux. The GitHub Actions workflow builds all three automatically
> when you push a `v*` tag.

```bash
# Or use the one-click scripts:
./build-linux.sh    # Linux AppImage + .deb
./build-mac.sh      # macOS DMGs (Intel + Apple Silicon)
build-exe.bat       # Windows installer + portable

# Build for current platform
npm run electron:build

# Build for all platforms
npm run electron:build:all

# Platform-specific builds
npm run electron:build:windows
npm run electron:build:mac-intel
npm run electron:build:mac-arm
npm run electron:linux
```

Output files will be in the `release/` folder.

---

## 🌐 Web Preview (Vercel)

Want to preview the app before downloading?

1. **Visit**: [https://brutal-fps.vercel.app](https://brutal-fps.vercel.app)
2. **Explore**: View features, stats, and interface
3. **Download**: Get full desktop app from the website

**Deploy your own:**
See [VERCEL_DEPLOYMENT.md](VERCEL_DEPLOYMENT.md) for deployment instructions.

---

## ❓ Troubleshooting

### Windows Issues

**Problem:** "Windows protected your PC" warning
**Solution:** Click "More info" → "Run anyway" (safe, signed app)

**Problem:** App won't start
**Solution:**
- Install Visual C++ Redistributable
- Run as Administrator
- Check antivirus quarantine

### macOS Issues

**Problem:** "App can't be opened" error
**Solution:**
```bash
# Remove quarantine attribute
xattr -rd com.apple.quarantine /Applications/BRUTAL-FPS.app
```

**Problem:** Not optimized for M1/M2
**Solution:** Download the right DMG: `BRUTAL-FPS-1.0.1-x64.dmg` for Intel, `BRUTAL-FPS-1.0.1-arm64.dmg` for Apple Silicon.

### Linux Issues

**Problem:** AppImage won't run
**Solution:**
```bash
# Install FUSE
sudo apt-get install fuse  # Debian/Ubuntu
sudo dnf install fuse      # Fedora
```

**Problem:** Missing libraries
**Solution:**
```bash
sudo apt-get install libgtk-3-0 libnotify4 libnss3 libxss1
```

---

## 📞 Support

- **Documentation**: [README.md](README.md)
- **Issues**: [GitHub Issues](https://github.com/brutal-45/GAME-FPS-BOOSTER/issues)
- **Discussions**: [GitHub Discussions](https://github.com/brutal-45/GAME-FPS-BOOSTER/discussions)

---

**Enjoy BRUTAL-FPS! 🎮⚡**
