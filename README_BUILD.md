# 💀 BRUTAL-FPS - Build Instructions for All Platforms

This guide explains how to build BRUTAL-FPS installers for Windows, macOS, and Linux.

---

## 🎯 Quick Build Options

### For End Users (Easiest)

**Windows:** Double-click `build-exe.bat`  
**macOS:** Run `./build-mac.sh` in Terminal  
**Linux:** Run `./build-linux.sh` in Terminal

### For Developers (All Platforms)

```bash
# Install dependencies first
npm install

# Build for your current platform
npm run electron:build        # Windows
npm run electron:mac          # macOS
npm run electron:linux        # Linux

# OR build for ALL platforms at once
npm run electron:build:all
```

---

## 📋 Prerequisites

### Required Software

| Platform | Required | Optional (Recommended) |
|----------|----------|----------------------|
| **All** | Node.js 18+ or Bun | Git |
| **Windows** | - | Visual Studio Build Tools |
| **macOS** | Xcode Command Line Tools | - |
| **Linux** | libgtk-3, libnotify, libnss | fakeroot, dpkg-deb |

### Installation Commands

#### Windows
```batch
# Install Node.js from https://nodejs.org
# OR install Bun
powershell -c "irm bun.sh/install | iex"
```

#### macOS
```bash
# Install Xcode Command Line Tools
xcode-select --install

# Install Node.js via Homebrew
brew install node

# OR install Bun
curl -fsSL https://bun.sh/install | bash
```

#### Linux (Ubuntu/Debian)
```bash
# Install system dependencies
sudo apt-get update
sudo apt-get install -y \
    libgtk-3-0 \
    libnotify4 \
    libnss3 \
    libxss1 \
    libxtst6 \
    xdg-utils \
    wget \
    curl

# Install Node.js
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs

# OR install Bun
curl -fsSL https://bun.sh/install | bash
```

#### Linux (Fedora/RHEL)
```bash
sudo dnf install -y \
    gtk3 \
    libnotify \
    nss \
    libXScrnSaver \
    libXtst \
    xdg-utils \
    wget \
    curl
```

---

## 🏗️ Building Step by Step

### Step 1: Clone or Download

```bash
git clone https://github.com/yourusername/brutal-fps.git
cd brutal-fps
```

### Step 2: Install Dependencies

```bash
# Using npm
npm install

# OR using Bun (faster)
bun install
```

### Step 3: Generate Icons (if needed)

```bash
# Python script to generate icons
python build/create_icons.py
```

### Step 4: Build the Application

#### Option A: Single Platform

**Windows:**
```bash
npm run electron:build
```
Output: `release/BRUTAL-FPS-Setup-1.0.0.exe`

**macOS:**
```bash
npm run electron:mac
```
Output: `release/BRUTAL-FPS-1.0.0.dmg`

**Linux:**
```bash
npm run electron:linux
```
Output: 
- `release/BRUTAL-FPS-1.0.0.AppImage`
- `release/BRUTAL-FPS-1.0.0.deb`

#### Option B: All Platforms

```bash
npm run electron:build:all
```

This builds everything at once (takes longer).

---

## 📦 Build Output

After successful build, check the `release/` folder:

### Windows Builds
```
release/
├── BRUTAL-FPS-Setup-1.0.0.exe      # Standard installer
└── BRUTAL-FPS-Portable-1.0.0.exe   # Portable version
```

### macOS Builds
```
release/
└── BRUTAL-FPS-1.0.0.dmg            # DMG installer
```

### Linux Builds
```
release/
├── BRUTAL-FPS-1.0.0-x86_64.AppImage  # Universal AppImage
└── BRUTAL-FPS-1.0.0-amd64.deb        # Debian package
```

---

## 🔧 Troubleshooting Build Issues

### Common Errors

#### "electron-builder not found"
```bash
npm install -g electron-builder
# OR
npx electron-builder
```

#### "Node-gyp rebuild failed" (Windows)
```batch
npm install --global windows-build-tools
```

#### "Cannot find module" errors
```bash
rm -rf node_modules
npm install
```

#### macOS: "App can't be signed"
```bash
# For development builds, signing is optional
# Add to electron-builder.json:
"mac": {
  "identity": null
}
```

#### Linux: "AppStream metadata error"
```bash
# Ensure you have appstream-util installed
sudo apt-get install appstream-util
```

---

## ⚙️ Advanced Configuration

### Custom Build Settings

Edit `electron-builder.json` to customize:

- App name and version
- Icon files
- Installation paths
- File associations
- Auto-update settings

### Building for Different Architectures

```bash
# ARM64 (Apple Silicon, Raspberry Pi)
npm run electron-builder -- --arm64

# 32-bit Windows
npm run electron-builder -- --ia32

# Multiple architectures
npm run electron-builder -- --x64 --arm64
```

### Code Signing (Production)

#### Windows
```bash
# Set certificate environment variables
set WIN_CSC_LINK=path/to/certificate.pfx
set WIN_CSC_KEY_PASSWORD=your_password
npm run electron:build
```

#### macOS
```bash
# Set certificate environment variables
export CSC_LINK="path/to/certificate.p12"
export CSC_KEY_PASSWORD=your_password
export APPLE_ID=your@apple.id
export APPLE_APP_SPECIFIC_PASSWORD=your_password
npm run electron:mac
```

---

## 📊 Build Size Optimization

To reduce installer size:

1. **Remove unnecessary files** from build
2. **Enable compression** in electron-builder.json
3. **Use external dependencies** where possible

Example configuration:
```json
{
  "compression": "maximum",
  "removePackageScripts": true,
  "removePackageKeywords": true
}
```

---

## 🚀 Distribution

### Where to Share Your Builds

- **GitHub Releases** (recommended for open source)
- **Your website**
- **Itch.io** (for games and game tools)
- **Steam** (requires Steamworks)

### Version Numbering

Follow semantic versioning: `MAJOR.MINOR.PATCH`

- **MAJOR**: Breaking changes
- **MINOR**: New features
- **PATCH**: Bug fixes

Update version in `package.json` before each release.

---

## 📞 Need Help?

- Check [INSTALLATION.md](./INSTALLATION.md) for user installation guides
- Review [QUICK_START.md](./QUICK_START.md) for quick commands
- Open an issue on GitHub for bugs
- Join our Discord for community support

---

<div align="center">

**⚔️ DESTROY LAG. DOMINATE GAMES. ⚔️**

Made with 💀 by **Brutal Tools**

</div>
