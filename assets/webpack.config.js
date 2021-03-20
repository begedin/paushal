/* eslint-env node */

const webpack = require('webpack');
const path = require('path');
const glob = require('glob');
const TerserPlugin = require('terser-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');

module.exports = (/** env, options */) => ({
  devtool: 'source-map',
  devServer: {
    inline: true,
    hot: true,
    stats: 'minimal',
    contentBase: __dirname,
    overlay: true,
  },
  optimization: {
    minimizer: [
      new TerserPlugin({
        terserOptions: { cache: true, sourceMap: false },
        parallel: true,
      }),
    ],
  },
  entry: {
    './src/main.ts': glob.sync('./vendor/**/*.ts').concat(['./src/main.ts']),
  },
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, '../priv/static/js'),
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
      // this will apply to both plain `.scss` files
      // AND `<style lang="scss">` blocks in `.vue` files
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
          },
          {
            loader: 'ts-loader',
            options: {
              appendTsSuffixTo: [/.vue$/],
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js', '.vue'],
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  plugins: [
    new VueLoaderPlugin(),
    new CopyWebpackPlugin({
      patterns: [{ from: 'static/', to: '../' }],
    }),
    new webpack.EnvironmentPlugin(['GOOGLE_CLIENT_ID', 'GOOGLE_CLIENT_SECRET']),
  ],
});
