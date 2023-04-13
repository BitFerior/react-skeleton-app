const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const public = path.resolve(__dirname, "public");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "[name].[contenthash].js",
    path: path.resolve(__dirname, "build"),
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
    extensions: [".*", ".js", ".jsx", ".ts", ".tsx"],
    roots: [public],
  },
  plugins: [
    new CleanWebpackPlugin(), //cleans and rebuild build folder on every re run
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      filename: "./index.html",
    }),
  ],
};
