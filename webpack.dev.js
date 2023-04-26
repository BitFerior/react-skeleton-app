const { merge } = require("webpack-merge");
const commonConfig = require("./webpack.common.js");
const ESLintPlugin = require("eslint-webpack-plugin");

module.exports = merge(commonConfig, {
  mode: "development",
  devtool: "inline-source-map", //  tells Webpack to include a source map as a data URI at the end of the JavaScript bundle file.
  devServer: {
    open: true,
    hot: true,
  },
  plugins: [
    ...commonConfig.plugins,
    new ESLintPlugin({
      extensions: ["js", "jsx", "ts", "tsx"],
    }),
  ],
});
