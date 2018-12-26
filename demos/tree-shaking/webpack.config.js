const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  mode: 'development',
  optimization: {
    usedExports: true
  },
  resolve: {
    // until #421 lands, we need to explicitly ignore the 'browser' field in the @esri/pkg.
    mainFields: ["module"]
  }
};