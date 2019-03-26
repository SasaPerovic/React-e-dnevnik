const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: [
    'react-hot-loader/patch',
    './src/index.js'
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'eslint-loader']
      },
      {
        test: /\.js?$/,
        include: /node_modules/,
        use: ['react-hot-loader/webpack'],
      },
      {
        test: /\.(scss|css)$/,
        use: [
          "style-loader", // creates style nodes from JS strings
          "css-loader",   // translates CSS into CommonJS
          "sass-loader"   // compiles Sass to CSS
        ]
      },
      {
        test: /\.(png|jpe?g|gif|ico|svg)$/,
        use: 'file-loader?name=assets/images/[name].[hash].[ext]',
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    modules: [
      'node_modules',
      path.resolve(__dirname, 'src'),
    ],
    alias: {
      "@": __dirname + "/src"
    }
  },
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'ENV': JSON.stringify(process.env.ENV || 'development')
      }
    }),
  ],
  devServer: {
    historyApiFallback: true,
    contentBase: './dist',
    hot: true
  }
};
