const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');

export default {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './public/dist/'),
    publicPath: '/dist/'
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env']
        }
      }
    },
    {
      test: /\.html$/,
      use: [{
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
