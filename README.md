# Getting Started with Create React Electron App

- react 17
- react-script 4.0.3
- electron 16
- electron-builder
- tailwindcss
- daisy.ui

```
create-react-electron-app
    - start            : react-scripts start
    - build            : react-scripts build
    - eject            : react-scripts eject
    - electron:start   : concurrently "cross-env NODE_ENV=development BROWSER=none npm run start" "wait-on http://localhost:3000 && electron ."
    - electron:build   : npm run build && electron-builder
    - electron:release : npm run build && electron-builder --publish=always
```