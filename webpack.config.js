// const mode = 'development';
// const devtool = (mode === 'development') ? 'eval' : 'source-map';
// const webpack = require("webpack");
// const HtmlWebpackPlugin = require("html-webpack-plugin");

// const port = process.env.PORT || 9090;

// module.exports = {
//   mode,
//   entry: "./src/index.js",
//   output: {
//     filename: "bundle.[hash].js",
//   },
//   devtool,
//   module: {
//     rules: [

//       // First Rule
//       {
//         test: /\.(js)$/,
//         exclude: /node_modules/,
//         use: ['babel-loader']
//       },

//       // Second Rule
//       {
//         test: /\.css$/,
//         use: [
//           {
//             loader: 'style-loader'
//           },
//           {
//             loader: 'css-loader',
//             options: {
//               modules: true,
//               localsConvention: 'camelCase',
//               sourceMap: true
//             }
//           }
//         ]
//       }
//     ]
//   },
//   plugins: [
//     new HtmlWebpackPlugin({
//       template: 'public/index.html',
//       favicon: 'public/favicon.ico'
//     })
//   ],
//   devServer: {
//     host: 'localhost',
//     port: port,
//     historyApiFallback: true,
//     open: true
//   }

// };

const mode = 'development';
const path = require('path');
const devtool = (mode === 'development') ? 'eval' : 'source-map';
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const port = process.env.PORT || 9090;

module.exports = {
  mode, 
  entry: {
    vendor: ["react"],
    app: './src/index.js'
  },

  output: {
    filename: '[name].[hash].js',
    path: path.resolve(__dirname, 'dist'),
    clean: true, 
    publicPath: '/'
  },
  resolve: {
    alias: {
      "react-dom": "@hot-loader/react-dom",
    },
  },
  devtool,
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
            {
              loader: 'style-loader'
            },
            {
              loader: 'css-loader'
            },
            {
              loader: 'sass-loader'
            }
          ]
          
      },
    ]
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        styles: {
          name: 'styles',
          test: /\.css$/,
          chunks: 'all',
          enforce: true
        },
        vendor: {
          chunks: 'initial',
          test: 'vendor',
          name: 'vendor',
          enforce: true
        }
      }
    }
  },
  plugins: [
    new webpack.ProgressPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: 'public/index.html',
      favicon: 'public/favicon.ico'
    })
  ],
  devServer: {
    host: 'localhost',
    port: port,
    historyApiFallback: true,
    open: true,
    hot: true

  }
};
