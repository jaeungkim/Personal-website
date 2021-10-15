const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const imagemin = require( "imagemin" )
const webp = require( "imagemin-webp" )

imagemin( ['src/images/*.{jpg,png}'], {
  destination: 'src/images',
  plugins: [
      webp( { quality: 60 } )
  ]
} )

module.exports = merge(common, {
  mode: 'production',
  devtool: "eval",
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000
  }
});