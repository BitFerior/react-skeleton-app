const { merge } = require("webpack-merge");
const commonConfig = require("./webpack.common.js");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");

const path = require("path");

module.exports = merge(commonConfig, {
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    open: true,
  },

  plugins: [
    ...commonConfig.plugins,
    new HtmlWebpackPlugin({        //simplifies the creation of html files. if any assets are changed this plugin auto makes changes in html files
      template: "public/index.html",
    }),
    new webpack.HotModuleReplacementPlugin(), //updates our code without reloading page
  ],

 
  optimization: {
    usedExports: true,
  },
});
