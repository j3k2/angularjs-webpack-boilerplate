const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './public/dist/'),
    publicPath: '/dist/'
  },
  devServer: {
    contentBase: './public/'
  },
  plugins: [
    new CleanWebpackPlugin(['./public/dist/'])
  ]
};
