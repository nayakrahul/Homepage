var OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
var TerserPlugin  = require('terser-webpack-plugin');
var path = require('path');


module.exports = {
  optimization: {
    minimize: true,
        minimizer: [
            new TerserPlugin(),
        ],
  },
  plugins: [
    new OptimizeCssAssetsPlugin(),
  ],
};
