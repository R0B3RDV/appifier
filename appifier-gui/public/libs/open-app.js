const os = require('os');
const { app, shell } = require('electron');
const path = require('path');

const openApp = (id, name) => {
  switch (os.platform()) {
    case 'darwin': {
      const appPath = path.join(app.getPath('home'), 'Applications', 'Appifier Apps', `${name}.app`);
      shell.openItem(appPath);
      break;
    }
    case 'win32':
    default: {
      const shortcutPath = path.join(app.getPath('userData'), 'Apps', id, `${name}.exe`);
      shell.openItem(shortcutPath);
    }
  }
};

module.exports = openApp;
