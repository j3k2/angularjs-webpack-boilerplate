const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './public/dist/'),
    publicPath: '/dist/'
  },
  module: {
    rules: [{
      test: /\.html$/,
      use: [ {
        loader: 'html-loader',
        options: {
          minimize: true
        }
      }],
    }]
  },
  devServer: {
    contentBase: './public/',
    historyApiFallback: true
  },
  plugins: [
    new CleanWebpackPlugin(['./public/dist/'])
  ]
};
