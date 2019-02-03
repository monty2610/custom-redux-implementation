const path = require('path');

module.exports = {
  entry: './test.js',
  devtool: 'cheap-module-eval-source-map',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'build.js'
  },

  mode: 'development',
  module: {
    rules: [{
      test: /\.js$/,
      use: [{loader: 'babel-loader'}]
    }]
  }
};
