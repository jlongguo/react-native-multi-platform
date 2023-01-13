import { ExpoConfig } from "expo/config";

// In SDK 46 and lower, use the following import instead:
// import { ExpoConfig } from '@expo/config-types';

const config: ExpoConfig = {
  name: "RnFramework",
  slug: "RnFramework",
  android: {
    package: "com.rnframework.rn", // 这里构建成自己的包名
  },
  ios: {
    bundleIdentifier: "com.rnframework.rn", // 这里构建成自己的包名
  },
};

export default config;
