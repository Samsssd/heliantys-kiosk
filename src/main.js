const path = require('path');
try {
  require('electron-reload')([
    __dirname,
    path.join(__dirname, '../public')
  ], {
    electron: require('electron')
  });
} catch (_) {}

const { app, BrowserWindow } = require('electron');

function createWindow() {
  const win = new BrowserWindow({
    width: 1080,          // Portrait width (vertical)
    height: 1920,         // Portrait height (vertical)
    resizable: true,     // Allow resizing
    fullscreen: false,   // No fullscreen
    kiosk: false,        // No kiosk mode
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    }
  });

  win.loadFile(path.join(__dirname, '../public/index.html'));
}

app.whenReady().then(() => {
  createWindow();
});
