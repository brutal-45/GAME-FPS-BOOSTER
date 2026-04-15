const { contextBridge, ipcRenderer } = require('electron');

// Expose protected methods
contextBridge.exposeInMainWorld('electronAPI', {
  // Platform info
  platform: process.platform,
  isElectron: true,
  
  // App controls 
  minimize: () => ipcRenderer.send('window-minimize'),
  maximize: () => ipcRenderer.send('window-maximize'),
  close: () => ipcRenderer.send('window-close'),
  
  // Notifications
  showNotification: (title, body) => 
    new Notification(title, { body }).show(),
  
  // Events
  onQuickBoost: (callback) => {
    ipcRenderer.on('quick-boost', callback);
  }
});
