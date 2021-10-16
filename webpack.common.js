const webpack = require("webpack");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const path = require("path");
const fs = require("fs");

const appDirectory = fs.realpathSync(process.cwd());

module.exports = {
  entry: ["@babel/polyfill", path.resolve(appDirectory, "src/index.js")],
  mode: "production",
  plugins: [
    new CleanWebpackPlugin({
      dry: false,
      verbose: true,
    }),
    new webpack.ProvidePlugin({
      classnames: "classnames",
    }),
  ],
  resolve: {
    // File extensions. Add others and needed (e.g. scss, json)
    extensions: [".js", ".jsx"],
    modules: ["node_modules"],
    // Aliases help with shortening relative paths
    // 'Components/button' === '../../../components/button'
    alias: {
      _screens: path.resolve(appDirectory, "src/screens"),
      _images: path.resolve(appDirectory, "src/assets/images"),
    },
  },
  module: {
    rules: [
      {
        test: /\.svg$/,
        use: ["@svgr/webpack"],
      },
      {
        test: /\.(png|jpe?g|webp|git|svg|)$/i,
        use: [
          {
            loader: `img-optimize-loader`,
            options: {
              compress: {
                // This will transform your png/jpg into webp.
                webp: true,
                disableOnDevelopment: true,
              },
            },
          },
        ],
      },

      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: ["file-loader"],
      },

      {
        test: /\.(js|jsx)$/,
        include: [
          path.resolve(appDirectory, "src"),
          path.resolve(appDirectory, "src/assets/fonts"),
        ],
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/react"],
          },
        },
      },
      {
        test: /\.?local.(sa|sc|c)ss$/,
        use: [
          {
            loader: "style-loader",
          },
          {
            loader: "css-loader",
            options: {
              //   discardDuplicates: true,
              importLoaders: 2,
              //   // This enables local scoped CSS based in CSS Modules spec
              modules: {
                //   // generates a unique name for each class (e.g. [name]_[local]_[hash:base64:5])
                localIdentName: "[folder]_[local]_[hash:base64:5]",
              },
            },
          },
          {
            loader: "postcss-loader",
            options: {
              plugins() {
                // post css plugins, can be exported to postcss.config.js
                return [require("precss"), require("autoprefixer")];
              },
            },
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: true,
            },
          },
        ],
      },
      {
        test: /\.(sa|sc|c)ss$/,
        exclude: /\.?local.(sa|sc|c)ss$/,
        loader: [
          "style-loader",
          "css-loader",
          {
            loader: "sass-loader",
            options: {
              sourceMap: true,
            },
          },
        ],
      },
      {
        test: /\.(sa|sc|c)ss$/,
        include: path.resolve(appDirectory, "src/assets/fonts"),
        exclude: /\.?local.(sa|sc|c)ss$/,
        loader: [
          "style-loader",
          "css-loader",
          {
            loader: "sass-loader",
            options: {
              sourceMap: true,
            },
          },
        ],
      },
    ],
  },
};
