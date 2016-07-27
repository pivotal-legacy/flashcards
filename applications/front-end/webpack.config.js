var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
      filename: 'bundle.js'
  },
  module: {
      loaders: [
        {
          test: /\.js$/,
          exclude: /(node_modules)/,
          loader: 'babel'
        }
      ]
  },
  plugins: [new HtmlWebpackPlugin({
    template: "src/index.html"
  })]
};
