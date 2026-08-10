# 💀 BRUTAL-FPS - Quick Start Guide

## 🚀 For Users: Download & Install

### Windows Users
1. **Double-click** `build-exe.bat` to create your installer
2. **Find** the installer in the `release/` folder
3. **Run** `BRUTAL-FPS-Setup-1.0.0.exe`
4. **Enjoy!** Your FPS booster is ready

### macOS Users  
1. **Open Terminal** and navigate to this folder
2. **Run**: `./build-mac.sh`
3. **Find** the DMG in the `release/` folder
4. **Drag** BRUTAL-FPS to Applications

### Linux Users
1. **Open Terminal** and navigate to this folder
2. **Run**: `./build-linux.sh`
3. **Find** the AppImage in the `release/` folder
4. **Make executable**: `chmod +x BRUTAL-FPS-*.AppImage`
5. **Run**: `./BRUTAL-FPS-*.AppImage`

---

## 🛠️ For Developers: Build All Platforms

### One Command Build
```bash
# Windows
build-all.bat

# macOS/Linux
npm install
npm run electron:build:all
```

This creates installers for:
- ✅ Windows (.exe installer + portable)
- ✅ macOS (.dmg)
- ✅ Linux (.AppImage + .deb)

### Individual Platform Builds

```bash
# Windows only
npm run electron:build

# macOS only
npm run electron:mac

# Linux only
npm run electron:linux
```

---

## 📁 Output Files

After building, check the `release/` folder:

| File | Platform | Type |
|------|----------|------|
| `BRUTAL-FPS-Setup-1.0.0.exe` | Windows | Installer |
| `BRUTAL-FPS-Portable-1.0.0.exe` | Windows | Portable |
| `BRUTAL-FPS-1.0.0.dmg` | macOS | DMG |
| `BRUTAL-FPS-1.0.0.AppImage` | Linux | AppImage |
| `BRUTAL-FPS-1.0.0.deb` | Linux | Debian Package |

---

## ⚡ Quick Commands Reference

| Command | Description |
|---------|-------------|
| `npm install` | Install dependencies |
| `npm run dev` | Run in development mode |
| `npm run build` | Build Next.js app |
| `npm run electron:dev` | Run Electron in dev mode |
| `npm run electron:build` | Build Windows .exe |
| `npm run electron:mac` | Build macOS .dmg |
| `npm run electron:linux` | Build Linux packages |
| `npm run electron:build:all` | Build for all platforms |

---

## 🎮 Using BRUTAL-FPS

Once installed:

1. **Launch** the application
2. **Click** "BRUTAL BOOST" button
3. **Select** your boost mode:
   - 🟢 Balanced (safe)
   - ⚡ Performance (recommended)
   - 🔥 Brutal (serious gains)
   - 💀 Extreme (maximum)
   - 🥔 Potato (low-end PCs)
   - 🌙 Silent (laptops)

4. **Enjoy** 30-60% FPS increase!

---

## ❓ Need Help?

- 📖 Read [INSTALLATION.md](./INSTALLATION.md) for detailed instructions
- 🐛 Report issues on GitHub
- 💬 Join our Discord community

---

<div align="center">

**⚔️ DESTROY LAG. DOMINATE GAMES. ⚔️**

</div>
