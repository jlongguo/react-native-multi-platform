'use strict';

const fs = require('fs');
const pathSep = require('path').sep;

let commonModules = null;
const bundleDir ='./bundle';
const manifestFile = `./bundle/common_manifest_${process.env.PLATFORM}.txt`;

function isInManifest(path) {
  if (commonModules === null && fs.existsSync(manifestFile)) {
    const lines = String(fs.readFileSync(manifestFile))
      .split('\n')
      .filter(line => line.length > 0);
    commonModules = new Set(lines);
  } else if (commonModules === null) {
    commonModules = new Set();
  }
  if (commonModules.has(path)) {
    return true;
  }

  return false;
}

function manifest(path) {
  if (path.length) {
    if(!fs.existsSync(bundleDir)) {
      fs.mkdirSync(bundleDir);
    }
    if (!fs.existsSync(manifestFile)) {
      fs.writeFileSync(manifestFile, path);
    } else {
      if (!isInManifest(path)) {
        fs.appendFileSync(manifestFile, '\n' + path);
      }
    }
  }
}

function processModuleFilter(module) {
  // 这个是全局变量
  // if (module['path'].indexOf('__prelude__') >= 0) {
  //   return false;
  // }
  manifest(module['path']);
  return true;
}

function createModuleIdFactory() {
  return path => {
    let name = '';
    if (path.startsWith(__dirname)) {
      name = path.substr(__dirname.length + 1);
    }
    let regExp =
      pathSep == '\\' ? new RegExp('\\\\', 'gm') : new RegExp(pathSep, 'gm');
    return name.replace(regExp, '_');
  };
}

module.exports = {
  serializer: {
    createModuleIdFactory,
    processModuleFilter,
  },
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: true,
        inlineRequires: true,
      },
    }),
  },
};
