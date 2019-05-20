// Modules to control application life and create native browser window
const { app, BrowserWindow } = require('electron');
var readline = require('readline');

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow



function createWindow(event) {

    // Create the browser window.
    mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true
        }
    });

    let mainSession = mainWindow.webContents.session;


    // and load the index.html of the app.
    mainWindow.loadFile('index.html');

    // !Instad of getting that typical interface of download in web, here is th approoach of downloading item 
    // ! directly into the specified file location without actually promting the prompt
    mainSession.on('will-download', (e, downloadItem, webContent) => {
        console.log(downloadItem.getFilename());

        // Get the downlod able file name
        let file = downloadItem.getFilename();

        // using relative path (but absolute path will be best)
        downloadItem.setSavePath('downloads/' + file);

        // Get download size
        let size = downloadItem.getTotalBytes();

        downloadItem.on('updated', (e, state) => {

            // https://electronjs.org/docs/api/download-item#downloaditemgettotalbytes
            console.log('size', downloadItem.getTotalBytes()); // If the size is unknown, it returns 0.
            console.log(downloadItem.getReceivedBytes());
            // Get download progress
            let progress = Math.round((downloadItem.getReceivedBytes() / downloadItem.getTotalBytes()) * 100);

            if (state === 'progressing') {
                // process.stdout.clearLine();
                readline.clearLine();
                // process.stdout.cursorTo(0)
                readline.cursorTo(0);
                process.stdout.write('Download: ' + downloadItem.getReceivedBytes() + '%');
            }
        })

        downloadItem.once('done', (e, state) => {
            if (state === 'completed') {
                process.stdout.write("/n");
                console.log('Download completed sucessfully');
            }
        })


    });

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

