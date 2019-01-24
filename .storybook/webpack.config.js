// https://github.com/storybooks/storybook/issues/1946
const path = require("path");

module.exports = (config, configType) => {
  config.resolve = {
    modules: ["node_modules"],
    extensions: [".web.js", ".js", ".json", ".web.jsx", ".jsx"],
    alias: {
      "react-native$": require.resolve("react-native-web")
    }
  };

  config.module.rules.unshift({
    test: /\.(png|jpe?g|gif)$/,
    use: [
      {
        loader: "react-native-web-image-loader",
        options: {
          name: "[name].[ext]",
          scalings: { "": 1, "@2x": 2, "@3x": 3 }
        }
      }
    ]
  });

  config.module.rules.push({
    test: /\.js$/,
    use: [
      {
        loader: require.resolve("babel-loader"),
        options: {
          plugins: ["@babel/plugin-proposal-class-properties"],
          presets: ["@babel/preset-env", "@babel/preset-react"]
        }
      }
    ]
  });

  return config;
};
