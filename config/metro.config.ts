import { getDefaultConfig } from "@expo/metro-config";
import path from 'path';

const defaultConfig = getDefaultConfig(path.join(__dirname,'../'));

module.exports = {
  ...defaultConfig,
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: true,
        inlineRequires: true,
      },
    }),
  },
  resolver: {
    extraNodeModules: {
      "@": `${__dirname}/src`,
    },
  },
};
