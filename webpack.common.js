const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const __publicdir = path.resolve(__dirname, "public");
const __builddir = path.resolve(__dirname, "build");

module.exports = {
  entry: "./src/index.tsx",
  output: {
    filename: "[name].[contenthash].js",
    path: __builddir,
    publicPath: "/",
  },
  performance: {   // this object disables different hints coming from webpack in form of warnings. webpack itself gives some hints to make ur app performance better
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
            presets: ["@babel/preset-env"],  //includes all the necessary plugins to compile modern JavaScript syntax (ES6+) into compatible syntax with browser
          },
        },
      },

      {
        test: /\.(tsx|ts)$/,
        exclude: /node_modules/,
        use: {
          loader: "ts-loader",
        },
      },

      {
        test: /\.(scss|css)$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
    ],
  },

  resolve: {
    extensions: [ ".js", ".jsx", ".ts", ".tsx", ".css", ".scss", ".sass"],
    roots: [__publicdir],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "public/index.html",
      filename: "./index.html",
    }),

    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css'
  })
  ],
};
