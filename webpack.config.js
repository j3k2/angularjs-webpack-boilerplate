const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const merge = require('webpack-merge');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const commonConfig = {
  entry: './src/app.module.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './public/dist/'),
    publicPath: '/dist/'
  },
  module: {
    rules: [{
      test: /\.scss$/,
      use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: ['css-loader', 'sass-loader']
      })
    },
    {
      test: /\.html$/,
      use: [{
        loader: 'html-loader',
        options: {
          minimize: true
        }
      }]
    },
    {
      test: /\.(woff|woff2|eot|ttf|otf|png|svg|jpg|gif)$/,
      use: [
        'file-loader'
      ]
    }]
  },
  plugins: [
    new CleanWebpackPlugin(['./public/dist/']),
    new ExtractTextPlugin('style.css'),
  ]
};
const devConfig = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [{
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        },
          'eslint-loader']
      }
    ]
  },
  devServer: {
    contentBase: './public/',
    historyApiFallback: true
  },
  devtool: 'eval-source-map' // https://webpack.js.org/configuration/devtool/#devtool
};
const prodConfig = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [{
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }]
      }
    ]
  },
  plugins: [
    new UglifyJsPlugin()
  ]
};


module.exports = env => {
  if (env && (env.production || (env.NODE_ENV && env.NODE_ENV.indexOf('prod') > -1))) {
    console.log('Using production config');
    return merge(commonConfig, prodConfig);
  } else {
    console.log('Using development config');
    return merge(commonConfig, devConfig);
  }
}
