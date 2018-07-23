const {app, BrowserWindow, session} = require('electron');
const settings = require('./settings');
const fs = require('fs');
const path = require('path');

let mainWindow;
function createMainWindow () {
  // Create the browser window
  mainWindow = new BrowserWindow({
    width: settings.window.size.width, height: settings.window.size.height,
    frame: false, center: true, show: false
  });
  
  // ready-to-show /*mainWindow.once('ready-to-show', function() {});*/
  mainWindow.loadURL('https://todoist.com/');

  mainWindow.webContents.on('dom-ready', function() {
    // Inject CSS
    const css = fs.readFileSync(path.join(__dirname, 'assets/styles/override.css'), 'utf8');
    mainWindow.webContents.insertCSS(css);

    mainWindow.show();
    mainWindow.focus();
  });

  // Save window size to settings before close
  mainWindow.on('close', function(e) {
    settings.window.setSize(mainWindow.getSize());
  });
}

app.on('ready', function() {
  // Disable Google Analytics 
  const filter = {
    urls: ['*://*.google-analytics.com/*']
  };
  session.defaultSession.webRequest.onBeforeRequest(filter, (details, callback) => {
    callback({cancel: true})
  });

  createMainWindow();
});

app.on('window-all-closed', function (e) {
  app.quit();
});