const path = require('path');

module.exports = {
  entry: './app/js/app.module.js',
  output: {
    path: path.resolve(__dirname, '../'),
    filename: 'bundle.js'
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: [/(node_modules)/],
        include: [
          path.resolve(__dirname, '../js')
        ],
        use: [
          {
            loader: 'babel-loader',
            query: {
              cacheDirectory: true
            }
          },
          {
            loader: 'eslint-loader',
            query: {
              failOnWarning: false,
              failOnError: true
            }
          }
        ]
      },
      {
        test: /\.less$/,
        use: [
          {
            loader: 'style-loader' // creates style nodes from JS strings
          },
          {
            loader: 'css-loader' // translates CSS into CommonJS
          },
          {
            loader: 'less-loader' // compiles Less to CSS
          }
        ]
      }
    ]
  }
};
