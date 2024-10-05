// webpack.config.js
const path = require('path');

module.exports = {
  entry: {
    widget: './src/widget/widget.ts' // entry point for wdiget
  }, 
  output: {
    filename: '[name].js', // name the output the same as entry
    path: path.resolve(__dirname, 'dist/webpack/'), // use dist as output directory
  },
  module: {
    rules: [
      {
        test: /\.ts$/, // Apply this rule to files ending in .ts
        use: 'ts-loader', // Use ts-loader to compile TypeScript files
        exclude: /node_modules/, // Exclude node_modules directory
      },
    ],
  },  
  resolve: {
    extensions: ['.js', '.ts']
  }
};