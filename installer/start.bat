@echo off
title BRUTAL-FPS 
color 0C
cd /d "%~dp0"

:: Check if running from installed location 
if exist "start.bat" (
    cd /d "%~dp0"
)

:: Kill any existing instances
taskkill /f /im node.exe >nul 2>&1
taskkill /f /im bun.exe >nul 2>&1

:: Start the application
start "" "http://localhost:3000"
bun run server.js 

exit
