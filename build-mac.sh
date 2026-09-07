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
    echo "[*] Creating macOS icon from build/icon.png..."
    ./build/make_icns.sh
fi

echo ""
echo "[*] Installing dependencies..."
$RUNNER install

echo ""
echo "[*] Building macOS DMGs (Intel x64 + Apple Silicon arm64)..."
$RUNNER run electron:mac

echo ""
echo "╔══════════════════════════════════════════════════════════════════╗"
echo "║                    BUILD COMPLETE!                               ║"
echo "╚══════════════════════════════════════════════════════════════════╝"
echo ""
echo "Your DMG file is ready in the 'release' folder:"
ls -lh release/*.dmg 2>/dev/null || echo "Check release/ folder for output"
echo ""
