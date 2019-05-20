// Modules to control application life and create native browser window
const { app, BrowserWindow, dialog } = require('electron')

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow


showDialog = () => {

    // !Open dialog
    dialog.showOpenDialog({ buttonLabel: 'Select logo', properties: ['openFile', 'multiSelections', 'createDirectory'] },
        (openPath) => {
            console.log(openPath);
        });

    // !Save dialog
    dialog.showSaveDialog({ defaultPath: '/Users' },
        (fileName) => {
            console.log(fileName);
        });

    let buttons = ['Yes', 'No', 'Maybe'];

    // !message box
    dialog.showMessageBox({
        buttons, title: 'Electron Message Dialog', message: 'Please select an answer',
        detail: 'A more decriptive message with some details..'
    }, (buttonIndex) => {
        console.log('User Selected', buttons[buttonIndex]);
    })

}

function createWindow(event) {

    // Create the browser window.
    mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true
        }
    });

    // and load the index.html of the app.
    mainWindow.loadFile('index.html');

    setTimeout(() => {
        showDialog();
    }, 2000);

    // Open the DevTools.
    // mainWindow.webContents.openDevTools()

    // Emitted when the window is closed.
    mainWindow.on('closed', function () {
        mainWindow = null
    })
}

// This method will be called when Electron has finished  initialization 
// and is ready to create browser windows.
app.on('ready', createWindow)

// Quit when all windows are closed.
app.on('window-all-closed', function () {
    // On macOS it is common for applications and their menu bar
    // to stay active until the user quits explicitly with Cmd + Q
    if (process.platform !== 'darwin') app.quit()
})

app.on('activate', function () {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (mainWindow === null) createWindow()
})

