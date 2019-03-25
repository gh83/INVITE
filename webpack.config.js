// Webpack v4
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");


const _root = path.resolve();
const _htmlTemplate = _root + '/src/index.ejs';
const _outputPath = path.resolve(__dirname, 'public');

module.exports = {
  mode: 'development',
  //mode:'production',
  entry: {
    user: './src/launcher.js'
  },
  output: {
    path: _outputPath,
    filename: 'bundle.js',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|non_npm_dependencies)/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                '@babel/preset-react',
                ['@babel/preset-env', {"targets": "> 0.25%, not dead"}]
              ],
              plugins: [
                '@babel/transform-runtime',
                ["@babel/plugin-proposal-decorators", {"legacy": true}],
                '@babel/plugin-proposal-class-properties'
              ],
              cacheDirectory: false
            }
          }
        ]
      },
      {
        test: /\.(otf|eot|svg|ttf|woff|woff2|jpg)$/,
        exclude: /node_modules/,
        use: {
          loader: 'file-loader',
          options: {
            //emitFile: true,
            // publicPath: 'assets',
            name: '[path][name].[ext]',
          }
        }
      },
      {test: /\.ejs$/, loader: 'ejs-compiled?htmlmin'},
      {
        test: /\.(sass|css)$/,
        exclude: [
          /node_modules/,
        ],
        use: [
          MiniCssExtractPlugin.loader,
          {loader: 'css-loader'},
          {
            loader: "postcss-loader",
            options: {
              plugins: [
                require('autoprefixer')({browsers: ['last 3 version', '> 3%', 'safari 5', 'ios 6', 'android 4']})
              ]
            }
          },
          {loader: 'sass-loader'}
        ]
      },

    ]
  },
  devServer: {
    host: 'localhost',
    port: '3000',
    contentBase: path.join(__dirname, 'public'),
    historyApiFallback: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: '!!ejs-compiled-loader!' + _htmlTemplate,
      filename: 'index.html'
    }),
    new MiniCssExtractPlugin({
      filename: 'style.css',
    }),
    new CopyWebpackPlugin([
          {
            from: 'src/assets',
            to: 'assets/'
          }
        ],
        {debug: true}
    )
  ],
  resolve: {
    extensions: ['.js', '.jsx']
  },
};
