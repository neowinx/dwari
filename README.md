# Dwari 

**A little keystroke helper for Warhammer: Vermintide**


## Download

Download the corresponding release [here](https://github.com/neowinx/dwari/releases) and unzip its contents

## Use

Double clic the `dwari.exe` executable

## Keymapping

The default keymapping is as follows:

- **Mouse 4** : Auto Click every 100 milliseconds

## Gimmmi da code

If you want to build from code read this section

### Requirements

- [Git](https://git-scm.com) To clone and run this repository

- [Node.js](https://nodejs.org/en/download/) **v10** 

- [pkg](https://www.npmjs.com/package/pkg)

### Windows build

In windows, ensure you installed [windows-build-tools](https://www.npmjs.com/package/windows-build-tools) 
correctly as robotjs and iohook use node-gyp to do their magic

Also, for the application package to an `.exe` I usually install [pkg](https://www.npmjs.com/package/pkg) globally

```
npm i -g pkg
```

then just run the build like this

```
pkg . -o bin/dwari.exe
```

### Errors when executing dwari.exe

The files included in the `bin-build` folder are nedded in order for the correct execution of the .exe in windows. 
These are patched `.node` and `.dll` files in order to run the executable under the `dwari.exe` name
I use [rid.exe](https://github.com/ironSource/rename-import-dll/releases) to produce these patches

If for some reason the included files under `bin-build` doesn't work in your machine you could just patch your
`.node` files doing that

```bash
cp ./node_modules/iohook/builds/node-v64-win32-x64/build/Release/* bin-build
rid.exe bin-build/iohook.node node.exe dwari.exe
```

[ Here ](https://github.com/zeit/pkg/issues/161) you could find more information about this issue

## License

[CC0 1.0 (Public Domain)](LICENSE.md)
