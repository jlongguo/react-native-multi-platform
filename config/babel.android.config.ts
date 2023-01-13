module.exports = {
    presets: ["module:metro-react-native-babel-preset"],
    plugins: [
      ["react-native-image-to-base64", { limit: 100 * 1024 }],
      [
        require.resolve("babel-plugin-module-resolver"),
        {
          cwd: "babelrc",
          extensions: [".ts", ".tsx", ".js", ".ios.js", ".android.js"],
          alias: {
            "@": "src",
          },
        },
      ],
    ],
  };
