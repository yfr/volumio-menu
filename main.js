var path = require('path')
var menubar = require('menubar');

const mb = menubar({
  'index': 'http://volumio.local',
  'width': 340,
  'height': 450,
  'preload-window': true,
  'icon': path.join(__dirname, './volumio-logo.png'),
  'resizable': false,
  webPreferences: {
    nodeIntegration: false
  }
});
