const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    index: './src/screenController.js',
    /* print: './src/print.js', */
  },
  devServer: {
    static: './dist',
  },
  devtool: 'inline-source-map',
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Battleship',
      template: './src/index.html',
    }),
  ],
  output: {
    filename: '[name].bunlde.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
    publicPath: '/' /* this has to do with webpack-dev-middleware */,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },
  optimization: {
    runtimeChunk: 'single',
  },
};
