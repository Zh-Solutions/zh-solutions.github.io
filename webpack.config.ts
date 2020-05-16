const path = require('path');
const webpack = require('webpack');
const HtmlWebPackPlugin = require('html-webpack-plugin');

const sourcePath = path.resolve(__dirname, 'src');

module.exports = (env) => ({
  mode: 'development',
  entry: './src/index.tsx',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    alias: {
      'src': sourcePath
    }
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.APP_ENV': JSON.stringify(env)
    }),
    new HtmlWebPackPlugin({
      template: './public/index.html',
      filename: 'index.html'
    })
  ],
  devServer: {
    historyApiFallback: true
  }
})
