const { merge } = require("webpack-merge");
const commonConfig = require("./webpack.common.js");
const ESLintPlugin = require("eslint-webpack-plugin");

module.exports = merge(commonConfig, {
  mode: "development",
  entry: ["react-hot-loader/patch"],
  devtool: "inline-source-map",
  devServer: {
    open: true,
    hot: true,
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
            plugins: ["react-hot-loader/babel"],
          },
        },
      },
    ],
  },
  plugins: [
    new ESLintPlugin({
      extensions: ["js", "jsx", "ts", "tsx"],
    }),
  ],
});
