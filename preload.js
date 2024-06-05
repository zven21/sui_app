const { contextBridge } = require('electron');

contextBridge.exposeInMainWorld('myAPI', {
  // 你可以在这里定义预加载脚本中可用的API
});
