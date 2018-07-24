# Todoist Electron [![Build Status](https://travis-ci.org/grandsilence/todoist-electron.svg?branch=master)](https://travis-ci.org/grandsilence/todoist-electron)
It's a web wrapper for Windows / Linux based on Electron Framework.

# Features
- Disabled Google Analytics
- Replaced fonts to GDI-safe (nice readable when DirectWrite disabled)
- Removed anoyable elements: social, "all tasks done"

# Roadmap
- Tray icon
- Borderless window
- Custom loader

## How to build
```cmd
git clone https://github.com/grandsilence/todoist-electron.git
cd todoist-electron
npm install
```
**Windows**: `npm run build-win`  
**Linux**: `npm run build-linux`  
**Mac OS**: `npm run build-mac`