--- INSTALLATION.md 
# 💀 BRUTAL-FPS - Installation Guide

> **The Ultimate Gaming Performance Booster**
> *Unleash Every Frame. No Mercy. No Limits.*

---

## 📥 Quick Download

| Platform | Download | Instructions |
|----------|----------|--------------|
| **Windows** | [Get Installer](#windows-installation) | `.exe` installer or portable version |
| **macOS** | [Get DMG](#macos-installation) | `.dmg` for Intel & Apple Silicon |
| **Linux** | [Get AppImage](#linux-installation) | AppImage or `.deb` package |

---

## 🔧 Prerequisites

### For Building from Source

If you want to build the application yourself, you'll need:

- **Node.js** (v18 or higher) OR **Bun** (recommended)
  - Install Node.js: https://nodejs.org
  - Install Bun: https://bun.sh

- **Git** (optional, for cloning the repository)
  - Download: https://git-scm.com

---

<a id="windows-installation"></a>
## 💻 Windows Installation

### Option 1: Installer (Recommended)

1. **Download** the installer: `BRUTAL-FPS-Setup-1.0.0.exe`

2. **Run** the installer by double-clicking the file

3. **Follow** the installation wizard:
   - Choose installation directory (default: `C:\Program Files\BRUTAL-FPS`)
   - Create desktop shortcut (recommended)
   - Create Start Menu shortcut (recommended)

4. **Launch** BRUTAL-FPS from:
   - Desktop shortcut
   - Start Menu
   - System tray icon

### Option 2: Portable Version

1. **Download** the portable version: `BRUTAL-FPS-Portable-1.0.0.exe`

2. **Place** it anywhere on your computer (e.g., Desktop, USB drive)

3. **Run** by double-clicking the file

4. **No installation required!** Perfect for USB drives or restricted systems.

### Build from Source (Windows)

```batch
# Clone the repository (or download and extract)
git clone https://github.com/yourusername/brutal-fps.git
cd brutal-fps

# Run the build script
build-exe.bat
```

Or manually:

```batch
# Install dependencies
npm install

# Build the application
npm run electron:build:all
```

Your executables will be in the `release/` folder.

---

<a id="macos-installation"></a>
## 🍎 macOS Installation

### DMG Installer

1. **Download** the DMG file: `BRUTAL-FPS-1.0.0.dmg`

2. **Open** the DMG file by double-clicking it

3. **Drag** the BRUTAL-FPS icon to the Applications folder

4. **Eject** the DMG after installation

5. **Launch** from Applications folder or Launchpad

> **Note for Apple Silicon (M1/M2/M3):** The app supports both Intel and Apple Silicon Macs.

### First Time Launch

If you see a security warning:
1. Go to **System Preferences** → **Security & Privacy**
2. Click **Open Anyway**
3. Confirm you want to open BRUTAL-FPS

### Build from Source (macOS)

```bash
# Clone the repository
git clone https://github.com/brutal-45/GAME-FPS-BOOSTER.git
cd brutal-fps

# Run the build script
./build-mac.sh
```

Or manually:

```bash
# Install dependencies
npm install

# Build the application
npm run electron-builder -- --mac
```

Your DMG will be in the `release/` folder.

---

<a id="linux-installation"></a>
## 🐧 Linux Installation

### Option 1: AppImage (Universal - Recommended)

AppImage works on most modern Linux distributions without installation.

1. **Download** the AppImage: `BRUTAL-FPS-1.0.0.AppImage`

2. **Make it executable:**
   ```bash
   chmod +x BRUTAL-FPS-1.0.0.AppImage
   ```

3. **Run** the application:
   ```bash
   ./BRUTAL-FPS-1.0.0.AppImage
   ```

4. **(Optional)** Integrate with your system:
   ```bash
   # Using appimagelauncher (recommended)
   # Or manually create a .desktop file
   ```

### Option 2: Debian Package (.deb)

For Debian, Ubuntu, Linux Mint, and derivatives:

1. **Download** the .deb package: `BRUTAL-FPS-1.0.0.deb`

2. **Install** using one of these methods:

   **Method A - Terminal:**
   ```bash
   sudo dpkg -i BRUTAL-FPS-1.0.0.deb
   sudo apt-get install -f  # Fix any missing dependencies
   ```

   **Method B - GUI:**
   - Double-click the .deb file
   - Click "Install" in your software center

3. **Launch** from your applications menu or terminal:
   ```bash
   brutal-fps
   ```

### Build from Source (Linux)

```bash
# Clone the repository
git clone https://github.com/yourusername/brutal-fps.git
cd brutal-fps

# Run the build script
./build-linux.sh
```

Or manually:

```bash
# Install dependencies
npm install

# Build the application
npm run electron-builder -- --linux
```

Your packages will be in the `release/` folder.

---

## 🚀 Running BRUTAL-FPS

### After Installation

1. **Launch** the application using your platform's method above

2. **Wait** for the dashboard to load

3. **Click** "BRUTAL BOOST" to optimize your system

4. **Choose** a boost mode based on your needs:
   - 🟢 **Balanced** - Safe, everyday gaming
   - ⚡ **Performance** - Competitive gaming
   - 🔥 **Brutal** - Serious FPS gains
   - 💀 **Extreme** - Maximum performance
   - 🥔 **Potato** - For low-end PCs
   - 🌙 **Silent** - For laptops

### System Tray

BRUTAL-FPS runs in your system tray for quick access:
- **Right-click** the tray icon for quick actions
- **Quick Boost** - Instant optimization
- **Open Dashboard** - Full control panel
- **Quit** - Close the application

---

## ⚙️ Advanced Configuration

### Custom Installation Paths

#### Windows
- Default: `C:\Program Files\BRUTAL-FPS`
- User  `%APPDATA%\BRUTAL-FPS`

#### macOS
- Application: `/Applications/BRUTAL-FPS.app`
- User  `~/Library/Application Support/BRUTAL-FPS`

#### Linux
- AppImage: Anywhere you place it
- .deb install: `/opt/BRUTAL-FPS`
- User  `~/.config/BRUTAL-FPS`

### Command Line Options

```bash
# Windows
BRUTAL-FPS.exe --no-sandbox  # If you encounter issues

# macOS
/Applications/BRUTAL-FPS.app/Contents/MacOS/BRUTAL-FPS --no-sandbox

# Linux
./BRUTAL-FPS-1.0.0.AppImage --no-sandbox
```

---

## 🛠️ Troubleshooting

### Windows Issues

**"Application won't start"**
- Make sure you have Visual C++ Redistributables installed
- Try running as Administrator
- Check Windows Defender isn't blocking the app

**"Installer fails"**
- Disable antivirus temporarily during installation
- Ensure you have write permissions to Program Files

### macOS Issues

**"App can't be opened because it's from an unidentified developer"**
- Go to System Preferences → Security & Privacy
- Click "Open Anyway"
- Or right-click → Open → Open

### Linux Issues

**"Permission denied" with AppImage**
```bash
chmod +x BRUTAL-FPS-*.AppImage
```

**".deb installation fails"**
```bash
sudo apt-get update
sudo apt-get install -f
sudo dpkg -i BRUTAL-FPS-*.deb
```

**"Missing dependencies"**
```bash
# Ubuntu/Debian
sudo apt-get install libgtk-3-0 libnotify4 libnss3 libxss1

# Fedora
sudo dnf install gtk3 notify libXScrnSaver

# Arch
sudo pacman -S gtk3 libnotify nss libxss
```

---

## 📦 Building for All Platforms

If you want to build installers for all platforms:

```bash
# Install dependencies
npm install

# Build for Windows, macOS, and Linux
npm run electron:build:all
```

This will create:
- Windows: `.exe` installer and portable version
- macOS: `.dmg` installer (Intel + Apple Silicon)
- Linux: `.AppImage` and `.deb` packages

All files will be in the `release/` directory.

---

## 🎮 System Requirements

### Minimum Requirements

| Component | Requirement |
|-----------|-------------|
| **OS** | Windows 7+, macOS 10.13+, or Linux (any modern distro) |
| **CPU** | Intel Celeron or equivalent |
| **RAM** | 2GB minimum |
| **Storage** | 100MB free space |
| **Display** | 1024x768 resolution |

### Recommended Requirements

| Component | Requirement |
|-----------|-------------|
| **OS** | Windows 10/11, macOS 11+, or Ubuntu 20.04+ |
| **CPU** | Intel i3 / AMD Ryzen 3 or better |
| **RAM** | 4GB or more |
| **Storage** | 500MB free space |

---

## 📞 Support

Having issues? Here's how to get help:

1. **Check this guide** thoroughly
2. **Review** the FAQ in the application
3. **Open an issue** on GitHub
4. **Contact** support@brutal-tools.com

---

## 📄 License

MIT License - See LICENSE file for details

**BRUTAL-FPS** is 100% FREE forever. No premium versions, no hidden costs, no paywalls.

---

<div align="center">

### ⚔️ **DESTROY LAG. DOMINATE GAMES.** ⚔️

Made with 💀 by **Brutal Tools**

[Website](https://brutal-tools.com) • [GitHub](https://github.com/brutal-tools) • [Discord](https://discord.gg/brutalfps)

</div>

+++ INSTALLATION.md (修改后)
# 📦 BRUTAL-FPS Installation Guide

Complete installation instructions for all platforms.

---

## 🔥 Quick Install (Recommended)

### Windows Users
1. **Download**: [BRUTAL-FPS-Setup.exe](https://github.com/brutal-45/GAME-FPS-BOOSTER/releases/latest/download/BRUTAL-FPS-Setup-1.0.0.exe)
2. **Run**: Double-click the downloaded file
3. **Install**: Follow the wizard (Next → Next → Finish)
4. **Launch**: Click desktop icon or find in Start Menu

### macOS Users
1. **Download**: [BRUTAL-FPS.dmg](https://github.com/brutal-45/GAME-FPS-BOOSTER/releases/latest/download/BRUTAL-FPS-1.0.0.dmg)
2. **Open**: Double-click the .dmg file
3. **Install**: Drag BRUTAL-FPS to Applications folder
4. **Launch**: Open from Applications or Launchpad

### Linux Users
**Option A: AppImage (Universal)**
```bash
# Download
wget https://github.com/brutal-45/GAME-FPS-BOOSTER/releases/latest/download/BRUTAL-FPS-1.0.0.AppImage

# Make executable
chmod +x BRUTAL-FPS-1.0.0.AppImage

# Run
./BRUTAL-FPS-1.0.0.AppImage
```

**Option B: Debian/Ubuntu Package**
```bash
# Download
wget https://github.com/brutal-45/GAME-FPS-BOOSTER/releases/latest/download/BRUTAL-FPS-1.0.0.deb

# Install
sudo dpkg -i BRUTAL-FPS-1.0.0.deb
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
   - File: `BRUTAL-FPS-Setup-1.0.0.exe`
   - Size: ~355 MB
   - SHA256: (Available on releases page)

2. **Run the installer**
   ```
   Double-click BRUTAL-FPS-Setup-1.0.0.exe
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
   - ☑ Add to PATH (optional)
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
   - File: `BRUTAL-FPS-Portable-1.0.0.exe`
   - No installation required!

2. **Run directly**
   ```
   Double-click BRUTAL-FPS-Portable-1.0.0.exe
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

1. **Download DMG**
   - File: `BRUTAL-FPS-1.0.0.dmg`
   - Universal binary (Intel + Apple Silicon)

2. **Open DMG**
   ```bash
   # Or double-click in Finder
   open BRUTAL-FPS-1.0.0.dmg
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
   wget https://github.com/brutal-45/GAME-FPS-BOOSTER/releases/latest/download/BRUTAL-FPS-1.0.0.AppImage
   ```

2. **Make executable**
   ```bash
   chmod +x BRUTAL-FPS-1.0.0.AppImage
   ```

3. **Run**
   ```bash
   ./BRUTAL-FPS-1.0.0.AppImage
   ```

4. **Optional: Integrate with system**
   ```bash
   # Move to applications
   mv BRUTAL-FPS-1.0.0.AppImage /opt/brutal-fps.AppImage

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
   wget https://github.com/brutal-45/GAME-FPS-BOOSTER/releases/latest/download/BRUTAL-FPS-1.0.0.deb
   ```

2. **Install**
   ```bash
   sudo dpkg -i BRUTAL-FPS-1.0.0.deb
   ```

3. **Fix dependencies (if needed)**
   ```bash
   sudo apt-get install -f
   ```

4. **Launch**
   - From applications menu
   - Or run: `brutal-fps`

**Uninstall:**
```bash
sudo apt-get remove brutal-fps
```

---

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

```bash
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
**Solution:** The universal binary supports both Intel and Apple Silicon natively.

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
