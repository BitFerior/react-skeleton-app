const { merge } = require("webpack-merge");
const commonConfig = require("./webpack.common.js");
module.exports = merge(commonConfig, {
  mode: "production",
  performance: {
    hints: false,
  },
  module: {
    rules: [
      {
        test: /\.js|\.jsx$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
    ],
  },
});
