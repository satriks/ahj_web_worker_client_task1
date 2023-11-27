const path = require('path')
const HtmlWebPackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { ServiceWorkerPlugin } = require('service-worker-webpack')
// const WorkboxPlugin = require('workbox-webpack-plugin')

module.exports = {
  devtool: 'source-map',
  entry: {
    main: './src/index.js',
    'service.worker': './src/js/service.worker.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '',
    filename: '[name].js'

  },
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, use: { loader: 'babel-loader' } },
      { test: /\.html$/, use: [{ loader: 'html-loader' }] },
      { test: /\.txt$/, use: 'raw-loader' },
      { test: /\.css$/i, use: [MiniCssExtractPlugin.loader, 'css-loader'] },
      {
        test: /\.(png|jpg|gif|cur)$/i, dependency: { not: ['url'] }, use: [{ loader: 'url-loader', options: { limit: 8192 } }], type: 'javascript/auto',  // eslint-disable-line
      }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './src/index.html',
      filename: './index.html'
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css'
    }),
    new ServiceWorkerPlugin({})
    // new WorkboxPlugin.InjectManifest({
    //   swSrc: './src/js/service-worker.js'

    // })
  ]
}
