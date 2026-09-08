#!/bin/bash
# BRUTAL-FPS Kali Linux Build Script
# Builds .deb + AppImage packages tuned for Kali Linux (Debian trixie / t64 libs)

set -e

echo "╔══════════════════════════════════════════════════════════════════╗"
echo "║            BRUTAL-FPS KALI LINUX BUILD SCRIPT                    ║"
echo "║        Build .deb + AppImage special for Kali Linux              ║"
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
    echo "Install with: apt install -y nodejs npm  OR  curl -fsSL https://bun.sh/install | bash"
    exit 1
fi

echo ""
echo "[*] Installing dependencies..."
$RUNNER install

echo ""
echo "[*] Building Kali Linux packages (.deb + AppImage)..."
$RUNNER exec electron-builder --config electron-builder-kali.json --linux AppImage deb --x64 --publish never

echo ""
echo "╔══════════════════════════════════════════════════════════════════╗"
echo "║                    BUILD COMPLETE!                               ║"
echo "╚══════════════════════════════════════════════════════════════════╝"
echo ""
echo "Your Kali packages are ready in the 'release-kali' folder:"
ls -lh release-kali/*.deb 2>/dev/null || true
ls -lh release-kali/*.AppImage 2>/dev/null || true
echo ""
echo "Install on Kali Linux:"
echo "  sudo dpkg -i release-kali/BRUTAL-FPS-1.0.1-kali.deb"
echo "  sudo apt-get install -f        # fix any missing dependencies"
echo "  brutal-fps-kali                # launch from terminal"
echo ""
echo "Or run the AppImage (no install):"
echo "  chmod +x release-kali/BRUTAL-FPS-1.0.1-kali.AppImage"
echo "  ./release-kali/BRUTAL-FPS-1.0.1-kali.AppImage"
echo ""
