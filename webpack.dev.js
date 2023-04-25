const { merge } = require("webpack-merge");
const commonConfig = require("./webpack.common.js");
module.exports = merge(commonConfig, {
  mode: "development",
  devtool: "inline-source-map",  //  tells Webpack to include a source map as a data URI at the end of the JavaScript bundle file.
  devServer: {
    open: true,
  },
  optimization: {
    usedExports: true,  // it analyze the only used exports in the project and avoids adding unused exports in the bundle
  },

});
