module.exports = {
  entry: './server.js',
  output: {
    filename: 'compiled.js',
  },
  node: {
    server: 'empty',
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
