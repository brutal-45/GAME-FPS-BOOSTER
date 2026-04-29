@echo off
title BRUTAL-FPS - Build Windows Executable
color 0C
cls

echo.
echo  ╔══════════════════════════════════════════════════════════════════╗
echo  ║              BRUTAL-FPS EXECUTABLE BUILDER                        ║
echo  ║                  Build .EXE for Windows                           ║
echo  ╚══════════════════════════════════════════════════════════════════╝
echo.

:: Check for Node.js/Bun
where bun >nul 2>nul
if %errorlevel% equ 0 (
    echo  [✓] Bun detected
    set RUNNER=bun
    goto :build 
)

where node >nul 2>nul
if %errorlevel% equ 0 (
    echo  [✓] Node.js detected
    set RUNNER=npm
    goto :build
)

echo  [ERROR] Neither Bun nor Node.js is installed!
echo  Please install from: https://bun.sh or https://nodejs.org
pause
exit /b 1

:build
echo.
echo  [*] Installing dependencies...
%RUNNER% install

echo.
echo  [*] Building Next.js application...
%RUNNER% run build

echo.
echo  [*] Building Windows executable...
%RUNNER% run electron:build

echo.
echo  ╔══════════════════════════════════════════════════════════════════╗
echo  ║                    BUILD COMPLETE!                                ║
echo  ╚══════════════════════════════════════════════════════════════════╝
echo.
echo  Your executable is ready in the 'release' folder:
echo    - BRUTAL-FPS-1.0.0-x64.exe (Installer)
echo    - BRUTAL-FPS-Portable-1.0.0.exe (Portable)
echo.
pause
