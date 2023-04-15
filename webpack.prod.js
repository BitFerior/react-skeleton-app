const { merge } = require("webpack-merge");
const commonConfig = require("./webpack.common.js");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = merge(commonConfig, {
  mode: "production",
  plugins: [
    ...commonConfig.plugins,
    new HtmlWebpackPlugin({
      //simplifies the creation of html files. if any assets are changed this plugin auto makes changes in html files
      template: "public/index.html",
    }),
   
  ],
});
