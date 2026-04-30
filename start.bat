@echo off
title BRUTAL-FPS - Ultimate Gaming Performance Booster
color 0C
cls

echo.
echo   ╔══════════════════════════════════════════════════════════════════╗
echo   ║                                                                  ║
echo   ║     ██████╗ ██╗   ██╗██████╗ ██╗   ██╗████████╗███████╗         ║
echo   ║     ██╔══██╗██║   ██║██╔══██╗██║   ██║╚══██╔══╝██╔════╝         ║
echo   ║     ██████╔╝██║   ██║██████╔╝██║   ██║   ██║   █████╗           ║
echo   ║     ██╔══██╗██║   ██║██╔══██╗██║   ██║   ██║   ██╔══╝           ║
echo   ║     ██║  ██║╚██████╔╝██████╔╝╚██████╔╝   ██║   ███████╗         ║
echo   ║     ╚═╝  ╚═╝ ╚═════╝ ╚═════╝  ╚═════╝    ╚═╝   ╚══════╝         ║
echo   ║                                                                  ║
echo   ║              ULTIMATE GAMING PERFORMANCE BOOSTER                 ║
echo   ║                                                                  ║
echo   ╚══════════════════════════════════════════════════════════════════╝
echo.
echo                     Developed under Brutal Tools
echo.

:: Check if node_modules exists
if not exist "node_modules" (
    echo   [!] Dependencies not found. Running install.bat first...
    echo.
    call install.bat
)

:: Kill any existing processes
taskkill /f /im node.exe >nul 2>&1
taskkill /f /im bun.exe >nul 2>&1

:: Check for Bun (preferred)
where bun >nul 2>nul
if %errorlevel% equ 0 (
    echo   [*] Starting BRUTAL-FPS with Bun...
    echo   [*] Opening http://localhost:3000 in your browser...
    echo.
    start "" "http://localhost:3000"
    bun run dev
    goto :end
)

:: Fall back to npm
where npm >nul 2>nul
if %errorlevel% equ 0 (
    echo   [*] Starting BRUTAL-FPS with npm...
    echo   [*] Opening http://localhost:3000 in your browser...
    echo.
    start "" "http://localhost:3000"
    npm run dev
    goto :end
)
 
:: Neither found
echo.
echo   [ERROR] Neither Bun nor npm is installed!
echo.
echo   Please install one of the following:
echo     - Bun (recommended): https://bun.sh
echo     - Node.js: https://nodejs.org
echo.
pause
exit /b 1

:end
pause
