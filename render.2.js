const { ipcRenderer } = require('electron');

let mainResponse = ipcRenderer.sendSync('sync-channel', {
  name: 'tejas',
  number: 9900888061
});

console.log(mainResponse);
