const path = require('path');

module.exports = {
  entry: {
    app: './src/index.js'
  },
  output: {
    filename: 'main.js', // [name] will generate automatically all the needed files
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
    //   {
    //     test: /\.js$/,
    //     exclude: /(node_modules|bower_components)/,
    //     loader: "babel-loader",
    //     options: {
    //       presets: ['@babel/preset-env']
    //     }
    //   },
    //   {
    //     test: /\.css$/,
    //     use: [
    //       'style-loader',
    //       'css-loader',
    //     ],
    //   },
    //   {
    //     test: /\.(png|svg|jpg|gif)$/,
    //     use: [
    //       'file-loader',
    //     ],
    //   },
    //   {
    //     test: /\.(woff|woff2|eot|ttf|otf)$/,
    //     use: [
    //       'file-loader',
    //     ],
    //   },
    //   {
    //     test: /\.(csv|tsv)$/,
    //     use: [
    //       'csv-loader',
    //     ],
    //   },
    //   {
    //     test: /\.xml$/,
    //     use: [
    //       'xml-loader',
    //     ],
    //   },
    ],
  },
};