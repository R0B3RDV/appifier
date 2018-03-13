const { app } = require('electron');
const path = require('path');

const getInstallationPath = () =>
  path.join(app.getPath('home'), 'Applications', 'Appifier Apps');

module.exports = getInstallationPath;
