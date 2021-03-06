var HtmlWebpackPlugin = require('html-webpack-plugin')
var config = {
  mode: "production",
  devtool: 'source-map',
  context: __dirname + '/src', // `__dirname` is root of project and `/src` is source
  entry: {
    app: './index.js'
  },
  output: {
    path: __dirname + '/dist', // `/dist` is the destination
    filename: 'bundle.js' // bundle created by webpack it will contain all our app logic. we will link to this .js file from our html page.
  },
  module: {
    rules: [
      {
        test: /\.js$/, // rule for .js files
        exclude: /node_modules/,
        loader: "babel-loader" // apply this loader for js files
      },
      {
        test: /\.css$/,
        use: [
          'style-loader', // the order is important. it executes in reverse order !
          'css-loader' // this will load first !
        ]
      },
      {
        test: /\.txt$/,
        use: 'raw-loader'
      }
    ]
  },
  plugins: [new HtmlWebpackPlugin({
    template: 'index.html',
    js: './gl-matrix.min.js'
  })]
};

module.exports = config
