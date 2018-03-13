const { app } = require('electron');
const os = require('os');
const path = require('path');

const getInstallationPath = () => {
  switch (os.platform()) {
    case 'darwin': {
      return path.join(app.getPath('home'), 'Applications', 'Appifier Apps');
    }
    case 'win32':
    default: {
      return path.join(app.getPath('userData'), 'Apps');
    }
  }
};

module.exports = getInstallationPath;
