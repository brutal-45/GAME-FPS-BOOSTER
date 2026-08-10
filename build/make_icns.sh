#!/bin/bash
# Script to create macOS .icns icon from PNG
# Run this on a Mac to generate the proper icon file

set -e

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
ICON_PNG="$SCRIPT_DIR/icon.png"
ICONSET_DIR="$SCRIPT_DIR/icon.iconset"

if [ ! -f "$ICON_PNG" ]; then
    echo "Error: icon.png not found in $SCRIPT_DIR"
    exit 1
fi

echo "Creating macOS icon from $ICON_PNG..."

# Create iconset directory
rm -rf "$ICONSET_DIR"
mkdir -p "$ICONSET_DIR"

# Generate all required sizes
echo "Generating icon sizes..."
sips -z 16 16 "$ICON_PNG" --out "$ICONSET_DIR/icon_16x16.png"
sips -z 32 32 "$ICON_PNG" --out "$ICONSET_DIR/icon_16x16@2x.png"
sips -z 32 32 "$ICON_PNG" --out "$ICONSET_DIR/icon_32x32.png"
sips -z 64 64 "$ICON_PNG" --out "$ICONSET_DIR/icon_32x32@2x.png"
sips -z 128 128 "$ICON_PNG" --out "$ICONSET_DIR/icon_128x128.png"
sips -z 256 256 "$ICON_PNG" --out "$ICONSET_DIR/icon_128x128@2x.png"
sips -z 256 256 "$ICON_PNG" --out "$ICONSET_DIR/icon_256x256.png"
sips -z 512 512 "$ICON_PNG" --out "$ICONSET_DIR/icon_256x256@2x.png"
sips -z 512 512 "$ICON_PNG" --out "$ICONSET_DIR/icon_512x512.png"
sips -z 1024 1024 "$ICON_PNG" --out "$ICONSET_DIR/icon_512x512@2x.png"

# Convert to .icns
echo "Converting to .icns..."
iconutil -c icns "$ICONSET_DIR" -o "$SCRIPT_DIR/icon.icns"

# Cleanup
rm -rf "$ICONSET_DIR"

echo "✓ Created $SCRIPT_DIR/icon.icns"
echo ""
echo "macOS icon created successfully!"
echo "You can now build the macOS app with: npm run electron:mac"
