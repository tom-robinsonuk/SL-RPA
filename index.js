const { app, BrowserWindow } = require('electron');

let mainWindow;

// Creates a chromium browser window (electron)
app.whenReady().then(() => {
    mainWindow = new BrowserWindow({
        width: 1200,
        height: 800,
        webPreferences: {
            nodeIntegration: false, // prevents security risks
            contextIsolation: true, // Required for safe JS execution
            preload: __dirname + './preload.js' // Inject custom JS later on.
        }
    });

    // Change this to read from a config file later on. as we will need this for user settings. 
    mainWindow.loadURL('https://marketplace.secondlife.com/');
});