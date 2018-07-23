const {app, BrowserWindow} = require('electron');
const fs = require('fs');
const path = require('path');

var mainWindow;

function createWindow () {
  // Create the browser window.
  mainWindow = new BrowserWindow({
    width: 800, height: 600, frame: false, center: true, show: false
  });

  mainWindow.loadURL('https://todoist.com/');
  //mainWindow.webContents.on('did-finish-load', function() {});

  mainWindow.webContents.on('dom-ready', function() {
    // Inject CSS
    const css = fs.readFileSync(path.join(__dirname, 'assets/styles/override.css'), 'utf8');
    mainWindow.webContents.insertCSS(css);

    mainWindow.show();
  });
}

app.on('ready', createWindow);
