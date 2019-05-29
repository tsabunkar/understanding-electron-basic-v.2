const { ipcRenderer } = require('electron');

ipcRenderer.on('private', (e, args) => {
  console.log(args);
});
