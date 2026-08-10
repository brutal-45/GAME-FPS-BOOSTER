import { app, BrowserWindow, Tray, Menu, nativeImage, shell } from 'electron'; 
import * as path from 'path';
import * as url from 'url';

let mainWindow: BrowserWindow | null = null;
let tray: Tray | null = null;
let isQuitting = false;
  
// App icon path
function getIconPath(): string {
  if (app.isPackaged) {
    if (process.platform === 'win32') {
      return path.join(process.resourcesPath, 'assets', 'icon.ico');
    }
    return path.join(process.resourcesPath, 'assets', 'icon.png');
  }
  return path.join(__dirname, '../build/icon.png');
}

// Get the port for Next.js dev server or production URL
function getAppUrl(): string {
  if (app.isPackaged) {
    // Production: Load from Next.js standalone server
    // The server runs on port 3000 by default
    const port = process.env.PORT || '3000';
    return `http://localhost:${port}`;
  } else {
    // Development: Load from Next.js dev server
    return 'http://localhost:3000';
  }
}

// Create the main application window
function createWindow(): void {
  mainWindow = new BrowserWindow({
    width: 1400,
    height: 900,
    minWidth: 1000,
    minHeight: 700,
    title: 'BRUTAL-FPS - Ultimate Gaming Performance Booster',
    icon: getIconPath(),
    backgroundColor: '#0a0a0a',
    frame: true,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      preload: path.join(__dirname, 'preload.js')
    },
    show: false,
  });

  // Load the Next.js application
  const appUrl = getAppUrl();
  mainWindow.loadURL(appUrl);

  // Show window when ready
  mainWindow.once('ready-to-show', () => {
    mainWindow?.show();
    mainWindow?.focus();
  });

  // Handle external links
  mainWindow.webContents.setWindowOpenHandler(({ url }) => {
    if (url.startsWith('http://localhost')) {
      return { action: 'allow' };
    }
    shell.openExternal(url);
    return { action: 'deny' };
  });

  // Handle window close - minimize to tray
  mainWindow.on('close', (event) => {
    if (!isQuitting) {
      event.preventDefault();
      mainWindow?.hide();
    }
  });

  mainWindow.on('closed', () => {
    mainWindow = null;
  });
}

// Create system tray icon
function createTray(): void {
  const iconPath = getIconPath();
  let icon: nativeImage;
  
  try {
    icon = nativeImage.createFromPath(iconPath);
    if (icon.isEmpty()) {
      // Create a simple colored square as fallback
      icon = nativeImage.createEmpty();
    }
  } catch {
    icon = nativeImage.createEmpty();
  }
  
  tray = new Tray(icon.resize({ width: 16, height: 16 }));

  const contextMenu = Menu.buildFromTemplate([
    {
      label: '🎮 Open Dashboard',
      click: () => {
        mainWindow?.show();
        mainWindow?.focus();
      },
    },
    {
      label: '⚡ Quick Boost',
      click: () => {
        mainWindow?.show();
        // Simulate boost button click
        mainWindow?.webContents.executeJavaScript(`
          if (typeof startBoost === 'function') startBoost();
        `);
      },
    },
    { type: 'separator' },
    {
      label: '❌ Quit BRUTAL-FPS',
      click: () => {
        isQuitting = true;
        app.quit();
      },
    },
  ]);

  tray.setToolTip('BRUTAL-FPS - Gaming Performance Booster');
  tray.setContextMenu(contextMenu);

  // Show window on tray icon click
  tray.on('click', () => {
    mainWindow?.show();
    mainWindow?.focus();
  });
}

// App lifecycle events
app.whenReady().then(() => {
  createWindow();
  createTray();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('before-quit', () => {
  isQuitting = true;
});

// Disable menu bar in production
if (app.isPackaged) {
  Menu.setApplicationMenu(null);
}
