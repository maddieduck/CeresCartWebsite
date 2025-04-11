const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './src/index.js', // or wherever your React entry point is
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    clean: true
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      }
    ]
  },  
  resolve: {
    extensions: ['.js', '.jsx']
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html' // where your HTML lives
    }),
    new CopyWebpackPlugin({
        patterns: [
            { from: './src/ReuseCode/images', to: 'images' },
            //{ from: './html', to: 'html' },
            { from: './src', to: 'src', globOptions: { ignore: ['**/*.js', '**/*.jsx'] } } // Exclude compiled files
          //{ from: './styles.css', to: 'styles.css' }, // Only copy, no minification
        ],
      }),
  ],
  watchOptions: {
    ignored: /node_modules/,
    poll: 1000
  }
};
