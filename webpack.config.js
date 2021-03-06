const autoprefixer = require('autoprefixer');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: [
    './src/index.jsx',
  ],
  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      use: ['babel-loader', 'eslint-loader'],
    }, {
      test: /\.(css|less)$/,
      loader: [{
        loader: 'style-loader',
      }, {
        loader: 'css-loader',
      }, {
        loader: 'postcss-loader',
        options: {
          plugins: [
            autoprefixer({
              browsers: ['ie >= 8', 'last 4 version'],
            }),
          ],
        },
      }, {
        loader: 'less-loader',
      }],
    }, {
      test: /\.(ttf|eot|woff|woff2)$/,
      use: {
        loader: 'file-loader',
        options: {
          name: './fonts/[name].[ext]',
        },
      },
    }],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src', 'index.html'),
      hash: true,
    }),
  ],
  resolve: {
    extensions: ['*', '.js', '.jsx'],
    modules: [
      path.resolve(__dirname, 'src'),
      path.resolve(__dirname, 'node_modules'),
    ],
  },
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'app.js',
    publicPath: '/',
  },
  devServer: {
    hot: false,
    inline: false,
    contentBase: './public',
    historyApiFallback: {
      rewrites: [{
        from: /^\/accounts\/.*$/,
        to: () => 'index.html',
      }, {
        from: /^\/block\/.*$/,
        to: () => 'index.html',
      }],
    },
  },
};
