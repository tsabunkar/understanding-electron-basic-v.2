const { ipcRenderer } = require('electron');

// Sending message from render process to-> mainProcess on channel1
// send() will not return anything
ipcRenderer.send('channel1', 'Message send from the renderer process');
// !NOTE : IPC sends messages asynchronously

ipcRenderer.on('channel1', (e, args) => {
  console.log('Listening to the channel1 from the renderer process');
});
