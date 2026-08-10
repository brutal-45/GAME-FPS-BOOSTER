@echo off
title BRUTAL-FPS - Build All Platforms
color 0C
cls

echo.
echo ╔══════════════════════════════════════════════════════════════════╗
echo ║              BRUTAL-FPS MULTI-PLATFORM BUILDER                   ║
echo ║         Build for Windows, macOS, and Linux simultaneously       ║
echo ╚══════════════════════════════════════════════════════════════════╝
echo.

:: Check for Node.js/Bun
where bun >nul 2>nul
if %errorlevel% equ 0 (
    echo [✓] Bun detected
    set RUNNER=bun
    goto :build
)

where node >nul 2>nul
if %errorlevel% equ 0 (
    echo [✓] Node.js detected
    set RUNNER=npm
    goto :build
)

echo [ERROR] Neither Bun nor Node.js is installed!
echo Please install from: https://bun.sh or https://nodejs.org
pause
exit /b 1

:build
echo.
echo [*] Installing dependencies...
%RUNNER% install

echo.
echo [*] Building Next.js application...
%RUNNER% run build

echo.
echo [*] Building for all platforms (Windows, macOS, Linux)...
echo     This may take several minutes...
%RUNNER% run electron:build:all

echo.
echo ╔══════════════════════════════════════════════════════════════════╗
echo ║                    BUILD COMPLETE!                               ║
echo ╚══════════════════════════════════════════════════════════════════╝
echo.
echo Your installers are ready in the 'release' folder:
echo.
echo WINDOWS:
echo   - BRUTAL-FPS-Setup-1.0.0.exe (Installer)
echo   - BRUTAL-FPS-Portable-1.0.0.exe (Portable)
echo.
echo MACOS:
echo   - BRUTAL-FPS-1.0.0.dmg
echo.
echo LINUX:
echo   - BRUTAL-FPS-1.0.0.AppImage
echo   - BRUTAL-FPS-1.0.0.deb
echo.
dir release\*.* 2>nul | find "File(s)"
echo.
pause
