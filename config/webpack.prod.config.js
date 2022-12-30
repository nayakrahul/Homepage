var webpack = require('webpack');
var {merge} = require('webpack-merge');

var baseConfig = require('./webpack.config');
var optimizationConfig = require('./webpack.opt.config');

const productionConfiguration = function (env) {
  const NODE_ENV = 'production';
  return {
    plugins: [
      new webpack.DefinePlugin({ 'process.env.NODE_ENV': JSON.stringify(NODE_ENV) }),
    ]
  };
};

module.exports = merge(baseConfig, optimizationConfig, productionConfiguration);
