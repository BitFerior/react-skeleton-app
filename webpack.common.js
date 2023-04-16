const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
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

  module: {
    rules: [
      {
        test: /\.js|\.jsx$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",

          options: {
            presets: ["@babel/preset-env"],
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
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
    ],
  },

  resolve: {
    extensions: [ ".js", ".jsx", ".ts", ".tsx"],
    roots: [__publicdir],
  },
  plugins: [
    new CleanWebpackPlugin(), //cleans and rebuild build folder on every re run
    new HtmlWebpackPlugin({
      template: "public/index.html",
      filename: "./index.html",
    }),
  ],
};
