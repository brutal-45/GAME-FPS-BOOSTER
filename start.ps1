# BRUTAL-FPS Quick Start Script for Windows PowerShell 
# Run this script to install and start BRUTAL-FPS

$Host.UI.RawUI.WindowTitle = "BRUTAL-FPS - Ultimate Gaming Performance Booster"
$Host.UI.RawUI.BackgroundColor = "Black"
$Host.UI.RawUI.ForegroundColor = "Red"
Clear-Host

Write-Host ""
Write-Host "  ╔══════════════════════════════════════════════════════════════════╗" -ForegroundColor Red
Write-Host "  ║                                                                  ║" -ForegroundColor Red
Write-Host "  ║     ██████╗ ██╗   ██╗██████╗ ██╗   ██╗████████╗███████╗          ║" -ForegroundColor Red
Write-Host "  ║     ██╔══██╗██║   ██║██╔══██╗██║   ██║╚══██╔══╝██╔════╝          ║" -ForegroundColor Red
Write-Host "  ║     ██████╔╝██║   ██║██████╔╝██║   ██║   ██║   █████╗            ║" -ForegroundColor Red
Write-Host "  ║     ██╔══██╗██║   ██║██╔══██╗██║   ██║   ██║   ██╔══╝            ║" -ForegroundColor Red
Write-Host "  ║     ██║  ██║╚██████╔╝██████╔╝╚██████╔╝   ██║   ███████╗          ║" -ForegroundColor Red
Write-Host "  ║     ╚═╝  ╚═╝ ╚═════╝ ╚═════╝  ╚═════╝    ╚═╝   ╚══════╝          ║" -ForegroundColor Red
Write-Host "  ║                                                                  ║" -ForegroundColor Red
Write-Host "  ║              ULTIMATE GAMING PERFORMANCE BOOSTER                 ║" -ForegroundColor Red
Write-Host "  ║                                                                  ║" -ForegroundColor Red
Write-Host "  ╚══════════════════════════════════════════════════════════════════╝" -ForegroundColor Red 
Write-Host ""
Write-Host "                   Developed under BRUTAL TOOLS" -ForegroundColor Yellow
Write-Host ""

# Check if node_modules exists
if (-not (Test-Path "node_modules")) {
    Write-Host "  [!] Dependencies not found. Installing..." -ForegroundColor Yellow
    Write-Host ""
    
    # Check for Bun
    $bun = Get-Command bun -ErrorAction SilentlyContinue
    if ($bun) {
        Write-Host "  [*] Using Bun for installation..." -ForegroundColor Green
        bun install
        bun run db:push
    }
    else {
        # Check for Node.js
        $node = Get-Command node -ErrorAction SilentlyContinue
        if ($node) {
            Write-Host "  [*] Using npm for installation..." -ForegroundColor Green
            npm install
            npm run db:push
        }
        else {
            Write-Host "  [ERROR] Neither Bun nor Node.js is installed!" -ForegroundColor Red
            Write-Host ""
            Write-Host "  Please install one of the following:"
            Write-Host "    - Bun:    https://bun.sh"
            Write-Host "    - Node.js: https://nodejs.org"
            Write-Host ""
            Read-Host "Press Enter to exit"
            exit 1
        }
    }
}

# Start the application
Write-Host "  [*] Starting BRUTAL-FPS..." -ForegroundColor Green
Write-Host "  [*] Opening http://localhost:3000 in your browser..." -ForegroundColor Green
Write-Host ""

# Open browser
Start-Process "http://localhost:3000"

# Check for Bun first
$bun = Get-Command bun -ErrorAction SilentlyContinue
if ($bun) {
    bun run dev
}
else {
    npm run dev
}
