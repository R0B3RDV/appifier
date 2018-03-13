# Juli [![Travis Build Status](https://travis-ci.org/quanglam2807/appifier.svg?branch=master)](https://travis-ci.org/quanglam2807/appifier) [![AppVeyor Build Status](https://ci.appveyor.com/api/projects/status/github/quanglam2807/appifier?branch=master&svg=true)](https://ci.appveyor.com/project/quanglam2807/appifier/branch/master)

**Juli** is an app + Node.js library + CLI which turns any website into Electron app.

![Demo](demo.gif)

> Old Git history prior to March 2018 is squashed. You can still find it [here](https://github.com/quanglam2807/appifier/tree/feb-26-full-history).

### Development
## Requirements
- macOS 10.9+, Windows 7+.
- Node.js 8+.
- Yarn

```bash
# First, clone the project:
git clone https://github.com/quanglam2807/juli.git
cd appifier

# install the dependencies
yarn
# build the code
yarn build
# To develop the template Electron app, run
yarn lib:electron-dev
# It'll automatically watch the files for changes and reload accordingly.
# Still, if you modify files in the main process (./app/main),
# you'll need to manually re-run the script.

# To run all tests for Appifier GUI
yarn run test
```
