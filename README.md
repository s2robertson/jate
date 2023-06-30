# J.A.T.E

## Description
J.A.T.E stands for Just Another Text Editor.  I worked on this as an exercise in developing a progressive web app (PWA).  I set up
[webpack](https://webpack.js.org/) to bundle assets, [Workbox](https://developer.chrome.com/docs/workbox/) to perform client-side 
caching, and [webpack-pwa-manifest](https://www.npmjs.com/package/webpack-pwa-manifest) to generate a manifest.  I also used
[idb](https://www.npmjs.com/package/idb) to save the user's input in IndexedDB.

## Installation
Using `npm install` in the root directory will install all dependencies, including the client and server.  Before running, the client
needs to be built with either `npm run client` (which builds for development) or `npm run build` (which builds for production).  The
script `npm run start:dev` will also build for development in addition to starting the server.

## Usage
The user can enter text, which is saved to localStorage whenever CodeMirror emits a change event.  Whenever the editor loses focus
(including on tab/window close), the editor contents are saved to IndexedDB.  There is a button in the top left that can be used to
install the app as a PWA on the user's desktop.

## Credits
The initial files were provided by University of Toronto Coding Bootcamp, and they make use of [CodeMirror](https://codemirror.net/).
In addition to the `package.json` in the root folder, there is also a `package.json` in the `clients` folder, which is where the PWA
related dependencies are declared.

## License
MIT