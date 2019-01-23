// https://github.com/storybooks/storybook/issues/1946
const path = require("path");

module.exports = (config, configType) => {
  config.resolve = {
    modules: ["node_modules"],
    extensions: [".web.js", ".js", ".json", ".web.jsx", ".jsx"],
    alias: {
      "react-native": "react-native-web"
    }
  };

  return config;
};
