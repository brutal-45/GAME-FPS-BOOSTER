const { app, BrowserWindow, Tray, Menu, shell } = require('electron');
const path = require('path');

let mainWindow = null;
let tray = null; 
let isQuitting = false;

// App icon path
function getIconPath() {
  if (app.isPackaged) {
    if (process.platform === 'win32') {
      return path.join(process.resourcesPath, 'assets', 'icon.ico');
    }
    return path.join(process.resourcesPath, 'assets', 'icon.png');
  }
  return path.join(__dirname, '../build/icon.png');
}

// Create the main application window
function createWindow() {
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
    },
    show: false,
  });

  // Load the standalone HTML file
  if (app.isPackaged) {
    mainWindow.loadFile(path.join(process.resourcesPath, 'app', 'index.html'));
  } else {
    mainWindow.loadFile(path.join(__dirname, '../public/brutal-fps-standalone.html'));
  }

  // Show window when ready
  mainWindow.once('ready-to-show', () => {
    if (mainWindow) {
      mainWindow.show();
      mainWindow.focus();
    }
  });

  // Handle external links
  mainWindow.webContents.setWindowOpenHandler(({ url }) => {
    shell.openExternal(url);
    return { action: 'deny' };
  });

  // Handle window close - minimize to tray
  mainWindow.on('close', (event) => {
    if (!isQuitting) {
      event.preventDefault();
      if (mainWindow) mainWindow.hide();
    }
  });

  mainWindow.on('closed', () => {
    mainWindow = null;
  });
}

// Create system tray icon
function createTray() {
  const { nativeImage } = require('electron');
  const iconPath = getIconPath();
  let icon;
  
  try {
    icon = nativeImage.createFromPath(iconPath);
    if (icon.isEmpty()) {
      icon = nativeImage.createEmpty();
    }
  } catch (e) {
    icon = nativeImage.createEmpty();
  }
  
  tray = new Tray(icon.resize({ width: 16, height: 16 }));

  const contextMenu = Menu.buildFromTemplate([
    {
      label: '🎮 Open Dashboard',
      click: () => {
        if (mainWindow) {
          mainWindow.show();
          mainWindow.focus();
        }
      },
    },
    {
      label: '⚡ Quick Boost',
      click: () => {
        if (mainWindow) {
          mainWindow.show();
          mainWindow.webContents.executeJavaScript(`
            if (typeof startBoost === 'function') startBoost();
          `);
        }
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
    if (mainWindow) {
      mainWindow.show();
      mainWindow.focus();
    }
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
