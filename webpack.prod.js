const { merge } = require("webpack-merge");
const commonConfig = require("./webpack.common.js");

module.exports = merge(commonConfig, {
  ...common,
  mode: "production",
  plugins: [
    ...common.plugins,
    new HtmlWebpackPlugin({
      //simplifies the creation of html files. if any assets are changed this plugin auto makes changes in html files
      template: "public/index.html",
    }),
    new CompressionPlugin({
      // it returns compressed files of all assets in bundle.js, even it gives a compressed bundle file. it reduces assets loading time
      test: /\.js(\?.*)?$/i,
      filename: "[path][query]",
      algorithm: "gzip",
      deleteOriginalAssets: false, //if it is true, original assets when they are compressed gets deleted and build uses compressed ones. it tries to save disk space
    }),
  ],
});
