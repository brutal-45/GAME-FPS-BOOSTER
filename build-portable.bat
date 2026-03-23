@echo off
title BRUTAL-FPS - Quick Build
color 0C
cls

echo.
echo   ╔══════════════════════════════════════════════════════════════════╗
echo   ║              BRUTAL-FPS BUILD SCRIPT                              ║
echo   ╚══════════════════════════════════════════════════════════════════╝
echo.

:: Check for Bun
where bun >nul 2>nul
if %errorlevel% neq 0 (
    echo   [ERROR] Bun is not installed!
    echo   Please install from: https://bun.sh
    pause
    exit /b 1
)

echo   [1/3] Installing dependencies...
bun install

echo.
echo   [2/3] Building application...
bun run build

echo.
echo   [3/3] Creating portable package...

:: Create portable folder
if not exist "portable" mkdir "portable"

:: Copy files
xcopy /E /I /Y ".next\standalone\*" "portable\"
xcopy /E /I /Y ".next\static" "portable\.next\static\"
xcopy /E /I /Y "public" "portable\public\"

:: Copy scripts
copy /Y "start.bat" "portable\"
copy /Y "install.bat" "portable\"
copy /Y "README.txt" "portable\"

:: Create launcher
(
echo @echo off
echo title BRUTAL-FPS
echo cd /d "%%~dp0"
echo start "" "http://localhost:3000"
echo node server.js
) > "portable\LAUNCH.bat"

echo.
echo   ╔══════════════════════════════════════════════════════════════════╗
echo   ║                    BUILD COMPLETE!                                ║
echo   ╠══════════════════════════════════════════════════════════════════╣
echo   ║                                                                    ║
echo   ║  Portable build created in: portable\                             ║
echo   ║                                                                    ║
echo   ║  To run: Double-click portable\LAUNCH.bat                         ║
echo   ║                                                                    ║
echo   ║  To create setup.exe:                                             ║
echo   ║    1. Install Inno Setup 6                                        ║
echo   ║    2. Run build-setup.bat                                         ║
echo   ║                                                                    ║
echo   ╚══════════════════════════════════════════════════════════════════╝
pause
