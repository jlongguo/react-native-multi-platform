require("ts-node/register");
if (process.env.PLATFORM == "android") {
  module.exports = require("./config/babel.android.config.ts");
} else {
  module.exports = require("./config/babel.config.ts");
}
