#!/usr/bin/env python3
"""
Generate application icons for BRUTAL-FPS
Creates .ico (Windows), .icns (macOS), and .png (Linux) from SVG logo
"""

import os
import sys
from pathlib import Path

def create_placeholder_icon(size=512):
    """Create a simple placeholder PNG icon with skull design"""
    try:
        from PIL import Image, ImageDraw
        img = Image.new('RGBA', (size, size), (0, 0, 0, 0))
        draw = ImageDraw.Draw(img)
        
        # Draw red background circle
        margin = size // 16
        draw.ellipse([margin, margin, size-margin, size-margin], 
                     fill=(255, 0, 0, 255))
        
        # Draw white skull shape (simplified)
        center = size // 2
        skull_size = size // 3
        
        # Skull head
        head_y = center - skull_size // 4
        draw.ellipse([center - skull_size//2, head_y - skull_size//2, 
                      center + skull_size//2, head_y + skull_size//2], 
                     fill=(255, 255, 255, 255))
        
        # Eye sockets
        eye_size = skull_size // 6
        eye_offset = skull_size // 4
        draw.ellipse([center - eye_offset - eye_size//2, head_y - eye_size//4 - eye_size//2,
                      center - eye_offset + eye_size//2, head_y - eye_size//4 + eye_size//2],
                     fill=(0, 0, 0, 255))
        draw.ellipse([center + eye_offset - eye_size//2, head_y - eye_size//4 - eye_size//2,
                      center + eye_offset + eye_size//2, head_y - eye_size//4 + eye_size//2],
                     fill=(0, 0, 0, 255))
        
        # Nose
        nose_y = head_y + skull_size // 8
        draw.polygon([(center, nose_y - eye_size//4),
                      (center - eye_size//3, nose_y + eye_size//2),
                      (center + eye_size//3, nose_y + eye_size//2)],
                     fill=(0, 0, 0, 255))
        
        # Teeth line
        teeth_y = head_y + skull_size // 3
        draw.rectangle([center - skull_size//4, teeth_y - 2,
                       center + skull_size//4, teeth_y + 2],
                      fill=(0, 0, 0, 255))
        
        return img
    except ImportError:
        return None

def main():
    build_dir = Path(__file__).parent
    print("Creating icons for BRUTAL-FPS...")
    
    # Try to use PIL for better quality
    img = create_placeholder_icon(512)
    
    if img:
        # Save PNG for Linux
        png_path = build_dir / "icon.png"
        img.save(png_path)
        print(f"✓ Created {png_path}")
        
        # Save ICO for Windows (multiple sizes)
        ico_path = build_dir / "icon.ico"
        img.save(ico_path, format='ICO', sizes=[(16, 16), (32, 32), (48, 48), (64, 64), (128, 128), (256, 256)])
        print(f"✓ Created {ico_path}")
        
        print("\nNote: For macOS .icns file, run this on a Mac:")
        print("  mkdir icon.iconset")
        print("  sips -z 16 16 icon.png --out icon.iconset/icon_16x16.png")
        print("  sips -z 32 32 icon.png --out icon.iconset/icon_16x16@2x.png")
        print("  sips -z 32 32 icon.png --out icon.iconset/icon_32x32.png")
        print("  sips -z 64 64 icon.png --out icon.iconset/icon_32x32@2x.png")
        print("  sips -z 128 128 icon.png --out icon.iconset/icon_128x128.png")
        print("  sips -z 256 256 icon.png --out icon.iconset/icon_128x128@2x.png")
        print("  sips -z 256 256 icon.png --out icon.iconset/icon_256x256.png")
        print("  sips -z 512 512 icon.png --out icon.iconset/icon_256x256@2x.png")
        print("  sips -z 512 512 icon.png --out icon.iconset/icon_512x512.png")
        print("  iconutil -c icns icon.iconset")
    else:
        print("PIL not available. Please install Pillow: pip install Pillow")
        print("Or manually create icons from public/brutal-fps-logo.svg")

if __name__ == "__main__":
    main()
