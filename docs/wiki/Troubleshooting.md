# 🛠️ Troubleshooting

Quick fixes for the most common BRUTAL-FPS problems.

---

## 🪟 Windows

**"Windows protected your PC" (SmartScreen)**
→ Click **More info → Run anyway**. Open-source unsigned apps trigger this; the app
is safe and open source.

**App won't start**
→ Install the [Visual C++ Redistributable](https://aka.ms/vs/17/release/vc_redist.x64.exe),
run as Administrator, or check antivirus quarantine.

**Installer fails**
→ Temporarily disable antivirus, make sure you can write to the chosen folder.

---

## 🍎 macOS

**"App can't be opened because the developer cannot be verified"**
→ Right-click the app → **Open**, or:

```bash
xattr -rd com.apple.quarantine /Applications/BRUTAL-FPS.app
```

**Wrong version of DMG?**
→ Intel Macs: `-x64.dmg`. Apple Silicon (M1/M2/M3): `-arm64.dmg` (or the
`-universal.dmg`).

---

## 🐧 Linux

**AppImage: "Permission denied"**
```bash
chmod +x BRUTAL-FPS-1.0.1.AppImage
```

**AppImage: "FUSE is not available"**
```bash
sudo apt install -y fuse     # Debian/Ubuntu/Kali (fuse3)
# or run without FUSE:
./BRUTAL-FPS-1.0.1.AppImage --appimage-extract-and-run
```

**`.deb` install fails (missing dependencies)**
```bash
sudo apt-get update
sudo apt-get install -f
sudo dpkg -i BRUTAL-FPS-1.0.1.deb
```

**Missing libraries (older distros)**
```bash
sudo apt-get install libgtk-3-0 libnotify4 libnss3 libxss1 libasound2
# Kali 2024+/Debian trixie (t64 names):
sudo apt-get install libgtk-3-0t64 libnotify4t64 libnss3 libxss1t64 libasound2t64
```

---

## 💀 Kali Linux specifics

- Use the Kali package (`build-kali.sh`) so dependencies resolve with `t64` names.
- If the app can't find your GPU/driver:
  ```bash
  sudo apt install -y kali-linux-gpu
  glxinfo | grep "OpenGL renderer"
  ```
- FUSE on Kali: `sudo apt install -y fuse3`.

---

## ⚡ App runs but boost seems weak

1. Check 📊 **Dashboard** temps — if CPU > 85 °C, switch to **Silent** or **Balanced**
2. Close heavy background apps before boosting
3. For emulators, open 📱 **Emulators** and click **Optimize** on yours
4. Make sure your GPU drivers are current

## 📦 Download fails or file is corrupt

- Use the direct link from the [Releases page](https://github.com/brutal-45/GAME-FPS-BOOSTER/releases)
- Clear browser cache, retry
- Verify file size matches the release listing

## 🐛 Still stuck?

Open an issue: <https://github.com/brutal-45/GAME-FPS-BOOSTER/issues>
Include your OS, app version, and the error message.
