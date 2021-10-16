const webpack = require("webpack");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require("path");
const merge = require("webpack-merge");
const fs = require("fs");
const common = require("./webpack.common.js");
const appDirectory = fs.realpathSync(process.cwd());
module.exports = merge(common, {
  mode: "development",
  devtool: "eval",
  output: {
    filename: "bundle.js",
    path: path.resolve(appDirectory, "dist"),
    publicPath: "/",
  },
  devServer: {
    historyApiFallback: true,
    port: 3000,
  },
  plugins: [
    new HtmlWebPackPlugin({
      isProduction: false,
      template: path.resolve(appDirectory, "public/index.html"),
      filename: "index.html",
    }),
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify("development"),
      },
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
  ],
});
