#!/bin/bash
# BRUTAL-FPS Linux Build Script
# Creates AppImage and .deb packages for Linux

set -e

echo "╔══════════════════════════════════════════════════════════════════╗"
echo "║              BRUTAL-FPS Linux BUILD SCRIPT                       ║"
echo "║             Build AppImage and .deb for Linux                    ║"
echo "╚══════════════════════════════════════════════════════════════════╝"
echo ""

# Check for Node.js or Bun
if command -v bun &> /dev/null; then
    echo "[✓] Bun detected"
    RUNNER="bun"
elif command -v node &> /dev/null; then
    echo "[✓] Node.js detected"
    RUNNER="npm"
else
    echo "[ERROR] Neither Bun nor Node.js is installed!"
    echo "Please install from: https://bun.sh or https://nodejs.org"
    exit 1
fi

echo ""
echo "[*] Installing dependencies..."
$RUNNER install

echo ""
echo "[*] Building Next.js application..."
$RUNNER run build

echo ""
echo "[*] Building Linux packages (AppImage and .deb)..."
$RUNNER run electron-builder --linux

echo ""
echo "╔══════════════════════════════════════════════════════════════════╗"
echo "║                    BUILD COMPLETE!                               ║"
echo "╚══════════════════════════════════════════════════════════════════╝"
echo ""
echo "Your Linux packages are ready in the 'release' folder:"
ls -lh release/*.AppImage 2>/dev/null || true
ls -lh release/*.deb 2>/dev/null || true
echo ""
echo "Installation instructions:"
echo "  - AppImage: chmod +x BRUTAL-FPS-*.AppImage && ./BRUTAL-FPS-*.AppImage"
echo "  - Debian/Ubuntu: sudo dpkg -i BRUTAL-FPS-*.deb"
echo ""
