@echo off
title BRUTAL-FPS - Build Setup.exe
color 0C
cls

echo.
echo   ╔══════════════════════════════════════════════════════════════════╗
echo   ║              BRUTAL-FPS SETUP BUILDER                            ║
echo   ║           Create Windows Installer (.exe)                         ║
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

:: Check for Inno Setup
if not exist "C:\Program Files (x86)\Inno Setup 6\ISCC.exe" (
    if not exist "C:\Program Files\Inno Setup 6\ISCC.exe" (
        echo   [WARNING] Inno Setup 6 not found!
        echo   Download from: https://jrsoftware.org/isdl.php
        echo.
        echo   Continuing with portable build...
        set BUILD_PORTABLE=1
    )
)

echo   [Step 1/4] Installing dependencies...
bun install
if %errorlevel% neq 0 (
    echo   [ERROR] Failed to install dependencies!
    pause
    exit /b 1
)

echo.
echo   [Step 2/4] Building Next.js application...
bun run build
if %errorlevel% neq 0 (
    echo   [ERROR] Build failed!
    pause
    exit /b 1
)

echo.
echo   [Step 3/4] Preparing installer files...

:: Create app folder for installer
if not exist "installer\app" mkdir "installer\app"

:: Copy standalone files
xcopy /E /I /Y ".next\standalone\*" "installer\app\"
xcopy /E /I /Y ".next\static" "installer\app\.next\static\"
xcopy /E /I /Y "public" "installer\app\public\"

:: Copy additional files
copy /Y "start.bat" "installer\app\"
copy /Y "install.bat" "installer\app\"
copy /Y "README.md" "installer\app\README.txt"
copy /Y "LICENSE" "installer\app\LICENSE.txt" 2>nul

:: Create start.bat for installed app
(
echo @echo off
echo title BRUTAL-FPS
echo cd /d "%%~dp0"
echo start "" "http://localhost:3000"
echo node server.js
) > "installer\app\start-app.bat"

echo.
echo   [Step 4/4] Creating installer...

:: Check if Inno Setup exists
if exist "C:\Program Files (x86)\Inno Setup 6\ISCC.exe" (
    "C:\Program Files (x86)\Inno Setup 6\ISCC.exe" "installer\BRUTAL-FPS-Setup.iss"
    goto :done
)

if exist "C:\Program Files\Inno Setup 6\ISCC.exe" (
    "C:\Program Files\Inno Setup 6\ISCC.exe" "installer\BRUTAL-FPS-Setup.iss"
    goto :done
)

:: Fallback: Create portable ZIP
echo   Creating portable package instead...
if not exist "installer\output" mkdir "installer\output"

:: Use PowerShell to create ZIP
powershell -Command "Compress-Archive -Path 'installer\app\*' -DestinationPath 'installer\output\BRUTAL-FPS-Portable-v1.0.0.zip' -Force"

echo.
echo   ╔══════════════════════════════════════════════════════════════════╗
echo   ║                    BUILD COMPLETE!                                ║
echo   ╠══════════════════════════════════════════════════════════════════╣
echo   ║                                                                    ║
echo   ║  Output: installer\output\BRUTAL-FPS-Portable-v1.0.0.zip         ║
echo   ║                                                                    ║
echo   ║  To create a proper setup.exe:                                    ║
echo   ║  1. Install Inno Setup 6 from https://jrsoftware.org/isdl.php    ║
echo   ║  2. Run this script again                                         ║
echo   ║                                                                    ║
echo   ╚══════════════════════════════════════════════════════════════════╝
goto :end

:done
echo.
echo   ╔══════════════════════════════════════════════════════════════════╗
echo   ║                    BUILD COMPLETE!                                ║
echo   ╠══════════════════════════════════════════════════════════════════╣
echo   ║                                                                    ║
echo   ║  Output: installer\output\BRUTAL-FPS_Setup_v1.0.0.exe            ║
echo   ║                                                                    ║
echo   ║  Users can now:                                                   ║
echo   ║  1. Download the setup.exe                                        ║
echo   ║  2. Run it as administrator                                       ║
echo   ║  3. Install BRUTAL-FPS on their PC                                ║
echo   ║                                                                    ║
echo   ╚══════════════════════════════════════════════════════════════════╝

:end
pause
