// webpack.config.js
const path = require('path');

module.exports = {
  mode: "development",
  entry: {
    widget: './src/widget/widget.ts' // entry point for wdiget
  }, 
  output: {
    filename: '[name].js', // name the output the same as entry
    path: path.resolve(__dirname, 'public/'), // use dist as output directory
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.ts$/, // Apply this rule to files ending in .ts
        use: 'ts-loader', // Use ts-loader to compile TypeScript files
        exclude: /node_modules/, // Exclude node_modules directory
      },
      // interpret the importation of assets into ts
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'assets/[name][ext]'
        }
      },
    ],
  },  
  resolve: {
    extensions: ['.js', '.ts', '.tsx'],
    modules: [path.resolve(__dirname, 'src'), 'node_modules'],
  }
};