const config = require('./webpack.config');
const webpackMerge = require('webpack-merge');
const DefinePlugin = require('webpack/lib/DefinePlugin');

module.exports = webpackMerge(config, {
  debug: true,
  cache: true,
  devtool: '#cheap-eval-source-map',

  module: {
    loaders: [
      {
        test: /\.scss$/,
        loaders: ['style', 'css','sass'],
        exclude: /(node_modules)/
      }
    ]
  },

  plugins: [
    new DefinePlugin({
      ENV: JSON.stringify('develop')
    })
  ]

});
