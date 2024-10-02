// webpack.config.js
const path = require('path');

module.exports = {
  entry: {
    widget: './src/widget/widget.ts'
  }, // Entry point of your application
  output: {
    filename: '[name].js', // Output bundle filename   
    path: path.resolve(__dirname, 'dist'), // Output directory
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