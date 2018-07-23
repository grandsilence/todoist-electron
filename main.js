const {app, BrowserWindow} = require('electron');
var mainWindow;

function createWindow () {
  // Create the browser window.
  mainWindow = new BrowserWindow({width: 800, height: 600, frame: false});

  // и загрузит index.html приложение.
  mainWindow.loadURL('https://todoist.com');
  mainWindow.webContents.on('did-finish-load', function() {
    mainWindow.webContents.insertCSS(`

    `);
  });

  mainWindow.webContents.on('dom-ready', function() {
    mainWindow.webContents.insertCSS(`
    body { font-family: Arial, Tahoma, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol" !important; }

    /* Draggable elements */
    #top_bar, #left_menu, #content, #editor
    { -webkit-app-region: drag; }

    /* Disable drag for some inner elements */
    #top_icons, #agenda_view, #quick_find, .left_menu_toggle, #list_holder
    { -webkit-app-region: no-drag; }
    `);
  });

 

  //let contents = win.webContents;
  //contents.getElementById('top_bar').style = "display:none";
}

app.on('ready', createWindow);
