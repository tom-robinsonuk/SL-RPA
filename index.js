const { app, BrowserWindow, session } = require('electron');
const path = require('path'); 

// Force Electron to ignore SSL certificate errors
app.commandLine.appendSwitch('ignore-certificate-errors', 'true');

let mainWindow;

app.whenReady().then(() => {
    session.defaultSession.webRequest.onBeforeSendHeaders((details, callback) => {
        details.requestHeaders['User-Agent'] = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)';
        callback({ cancel: false, requestHeaders: details.requestHeaders });
    });

    mainWindow = new BrowserWindow({
        width: 1200,
        height: 800,
        webPreferences: {
            nodeIntegration: false,
            contextIsolation: true,
            preload: path.join(__dirname, 'preload.js')
        }
    });
    // Change this to read from a config file later on. as we will need this for user settings. 
    mainWindow.loadURL('https://marketplace.secondlife.com/');
});
