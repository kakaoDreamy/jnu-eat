module.exports = {
  entry: './server.js',
  output: {
    filename: 'compiled.js',
  },
  resolve: {
    extensions: ['js', 'jsx', '.json'],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
};
