#!/bin/bash
# BRUTAL-FPS macOS Build Script
# Creates DMG installer for macOS

set -e

echo "╔══════════════════════════════════════════════════════════════════╗"
echo "║              BRUTAL-FPS macOS BUILD SCRIPT                       ║"
echo "║                  Build .DMG for macOS                            ║"
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

# Create macOS icon if needed
if [ ! -f "build/icon.icns" ]; then
    echo ""
    echo "[*] Creating macOS icon..."
    if [ -f "build/icon.png" ]; then
        mkdir -p build/icon.iconset
        sips -z 16 16 build/icon.png --out build/icon.iconset/icon_16x16.png
        sips -z 32 32 build/icon.png --out build/icon.iconset/icon_16x16@2x.png
        sips -z 32 32 build/icon.png --out build/icon.iconset/icon_32x32.png
        sips -z 64 64 build/icon.png --out build/icon.iconset/icon_32x32@2x.png
        sips -z 128 128 build/icon.png --out build/icon.iconset/icon_128x128.png
        sips -z 256 256 build/icon.png --out build/icon.iconset/icon_128x128@2x.png
        sips -z 256 256 build/icon.png --out build/icon.iconset/icon_256x256.png
        sips -z 512 512 build/icon.png --out build/icon.iconset/icon_256x256@2x.png
        sips -z 512 512 build/icon.png --out build/icon.iconset/icon_512x512.png
        iconutil -c icns build/icon.iconset
        rm -rf build/icon.iconset
        echo "[✓] Created build/icon.icns"
    else
        echo "[!] Warning: build/icon.png not found. Please run create_icons.py first."
    fi
fi

echo ""
echo "[*] Installing dependencies..."
$RUNNER install

echo ""
echo "[*] Building Next.js application..."
$RUNNER run build

echo ""
echo "[*] Building macOS DMG..."
$RUNNER run electron-builder --mac

echo ""
echo "╔══════════════════════════════════════════════════════════════════╗"
echo "║                    BUILD COMPLETE!                               ║"
echo "╚══════════════════════════════════════════════════════════════════╝"
echo ""
echo "Your DMG file is ready in the 'release' folder:"
ls -lh release/*.dmg 2>/dev/null || echo "Check release/ folder for output"
echo ""
