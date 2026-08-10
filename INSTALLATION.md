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
git clone https://github.com/yourusername/brutal-fps.git
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
- User data: `%APPDATA%\BRUTAL-FPS`

#### macOS
- Application: `/Applications/BRUTAL-FPS.app`
- User data: `~/Library/Application Support/BRUTAL-FPS`

#### Linux
- AppImage: Anywhere you place it
- .deb install: `/opt/BRUTAL-FPS`
- User data: `~/.config/BRUTAL-FPS`

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
