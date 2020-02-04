const path = require('path');
const ImageminPlugin = require('imagemin-webpack-plugin').default;

module.exports = {
  entry: {
    app: './src/js/index.js',
  },
  output: {
    filename: 'main.js', // [name] will generate automatically all the needed files
    path: path.resolve(__dirname, 'dist'),
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000,
  },
  plugins: [
    // Make sure that the plugin is after any plugins that add images
    new ImageminPlugin({
      test: 'imag/**',
      disable: process.env.NODE_ENV !== 'production', // Disable during development
      pngquant: {
        quality: '95-100',
      },
    }),
  ],
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader',
        ],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          'file-loader',
        ],
      },
    ],
  },
};