/* eslint-disable no-console */
const path = require('path');
const fs = require('fs-extra');
const builder = require('electron-builder');

const { Platform } = builder;

console.log(`Machine: ${process.platform}`);

Promise.resolve()
  .then(() => {
    const opts = {
      targets: Platform.MAC.createTarget(),
      config: {
        appId: 'com.appifier.app',
        asar: false,
        directories: {
          buildResources: 'build-resources',
        },
        mac: {
          category: 'public.app-category.utilities',
        },
        afterPack: ({ appOutDir }) => {
          console.log('appOutDir:', appOutDir);

          const resourcesAppPath = process.platform === 'darwin'
            ? path.join(
              appOutDir,
              'Appifier.app',
              'Contents',
              'Resources',
              'app',
            )
            : path.join(
              appOutDir,
              'resources',
              'app',
            );

          const sourceElectronIconPath = path.join(
            __dirname,
            'electron-icon.png',
          );

          const destElectronIconPath = path.join(
            resourcesAppPath,
            'electron-icon.png',
          );

          console.log('Copying additional files...');

          return fs.copy(sourceElectronIconPath, destElectronIconPath);
        },
      },
    };

    return builder.build(opts);
  })
  .then(() => {
    console.log('build successful');
  })
  .catch((err) => {
    console.log(err);
    process.exit(1);
  });
