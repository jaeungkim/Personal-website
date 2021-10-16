// const { merge } = require('webpack-merge');
// const common = require('./webpack.common.js');
// const imagemin = require( "imagemin" )
// const webp = require( "imagemin-webp" )

// imagemin( ['src/images/*.{jpg,png}'], {
//   destination: 'src/images',
//   plugins: [
//       webp( { quality: 60 } )
//   ]
// } )

// module.exports = merge(common, {
//   mode: 'production',
//   devtool: "eval",
//   performance: {
//     hints: false,
//     maxEntrypointSize: 512000,
//     maxAssetSize: 512000
//   }
// });
// webpack-prod-config.js
// contains configuration data related to prod build
const SriPlugin = require("webpack-subresource-integrity");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require("path");
const fs = require("fs");
const webpack = require("webpack");
const merge = require("webpack-merge");
const CopyPlugin = require("copy-webpack-plugin");
const packageJson = require("./package.json");
const common = require("./webpack.common.js");
const appDirectory = fs.realpathSync(process.cwd());
module.exports = merge(common, {
  mode: "production",
  devtool: false,
  output: {
    filename: "[chunkhash]_[name].js",
    path: path.resolve(appDirectory, "dist", "src", "assets"),
    publicPath: "/src/assets/",
    crossOriginLoading: "anonymous",
  },
  performance: {
    maxEntrypointSize: 512000,
    maxAssetSize: 512000
  },
  optimization: {
    minimize: false,
    runtimeChunk: "single",
    splitChunks: {
      chunks: "all",
      maxInitialRequests: Infinity,
      minSize: 0,
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name(module) {
            const packageName = module.context.match(
              /[\\/]node_modules[\\/](.*?)([\\/]|$)/,
            )[1];
            return `npm.${packageName.replace("@", "")}`;
          },
        },
      },
    },
  },
  plugins: [
    new HtmlWebPackPlugin({
      isProduction: true,
      meta: { version: packageJson.version },
      template: path.resolve(appDirectory, "public/index.html"),
      filename: "../../index.html",
    }),
    new SriPlugin({
      hashFuncNames: ["sha256", "sha384"],
      enabled: true,
    }),
    new CopyPlugin({patterns: [
      {
        from: "src/assets",
        to: ".",
        force: true,
      },
      {
        from: "public/",
        to: "",
      },
    ]}),
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify("production"),
      },
    }),
    new webpack.optimize.AggressiveMergingPlugin(),
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
  ],
});