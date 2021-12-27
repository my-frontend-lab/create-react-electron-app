const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('API', {
  greeting: (name) => {
    return `Hello, ${name}!`;
  }
})

process.once('loaded', () => {
  window.ipcRenderer = ipcRenderer;
  console.log('Hello Preload');
});
