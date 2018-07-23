const {app, BrowserWindow, session} = require('electron');
const fs = require('fs');
const path = require('path');

var mainWindow;
function createWindow () {
  // Create the browser window
  mainWindow = new BrowserWindow({
    width: 800, height: 600, frame: false, center: true, show: false
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
}

app.on('ready', function() {
  // Disable Google Analytics 
  const filter = {
    urls: ['*://*.google-analytics.com/*']
  };
  session.defaultSession.webRequest.onBeforeRequest(filter, (details, callback) => {
    callback({cancel: true})
  });
  // Initilize window and open todoist
  createWindow();
});
