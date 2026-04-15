import { contextBridge, ipcRenderer } from 'electron';

// Expose protected methods that allow the renderer process to use
// the ipcRenderer without exposing the entire object
contextBridge.exposeInMainWorld('electronAPI', {
  // App info
  getAppPath: () => ipcRenderer.invoke('get-app-path'),
  
  // Notifications
  showNotification: (title: string, body: string) => 
    ipcRenderer.invoke('show-notification', title, body), 
  
  // Window controls
  minimizeToTray: () => ipcRenderer.invoke('minimize-to-tray'),
  quitApp: () => ipcRenderer.invoke('quit-app'),
  
  // Event listeners
  onQuickBoost: (callback: () => void) => {
    ipcRenderer.on('quick-boost', callback);
    return () => ipcRenderer.removeListener('quick-boost', callback);
  },
  
  onToggleMiniMode: (callback: () => void) => {
    ipcRenderer.on('toggle-mini-mode', callback);
    return () => ipcRenderer.removeListener('toggle-mini-mode', callback);
  },
  
  // Platform info
  platform: process.platform,
  isElectron: true,
});

// TypeScript declaration for window.electronAPI
declare global {
  interface Window {
    electronAPI: {
      getAppPath: () => Promise<string>;
      showNotification: (title: string, body: string) => Promise<void>;
      minimizeToTray: () => Promise<void>;
      quitApp: () => Promise<void>;
      onQuickBoost: (callback: () => void) => () => void;
      onToggleMiniMode: (callback: () => void) => () => void;
      platform: string;
      isElectron: boolean;
    };
  }
}
