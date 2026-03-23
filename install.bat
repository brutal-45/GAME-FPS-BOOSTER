@echo off
title BRUTAL-FPS - First Time Setup
color 0C
cls

echo.
echo   ╔══════════════════════════════════════════════════════════════════╗
echo   ║              BRUTAL-FPS FIRST TIME SETUP                          ║
echo   ╚══════════════════════════════════════════════════════════════════╝
echo.

:: Check for Bun or Node
where bun >nul 2>nul
if %errorlevel% equ 0 (
    echo   [OK] Bun detected!
    set RUNNER=bun
    goto :install
)

where node >nul 2>nul
if %errorlevel% equ 0 (
    echo   [OK] Node.js detected!
    set RUNNER=npm
    goto :install
)

echo   [ERROR] Neither Bun nor Node.js is installed!
echo.
echo   Please install one of the following:
echo     - Bun (recommended): https://bun.sh
echo     - Node.js: https://nodejs.org
echo.
pause
exit /b 1

:install
echo.
echo   Installing dependencies...
%RUNNER% install

echo.
echo   Setting up database...
%RUNNER% run db:push

echo.
echo   ╔══════════════════════════════════════════════════════════════════╗
echo   ║                    SETUP COMPLETE!                                ║
echo   ╠══════════════════════════════════════════════════════════════════╣
echo   ║                                                                    ║
echo   ║  To start BRUTAL-FPS: Double-click start.bat                      ║
echo   ║                                                                    ║
echo   ╚══════════════════════════════════════════════════════════════════╝
pause
