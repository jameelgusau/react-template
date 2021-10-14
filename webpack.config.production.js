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

const mode = 'production';
const devtool = (mode === 'development') ? 'eval' : 'source-map';
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");


module.exports = {
  mode: 'production', 
  entry: {
    vendor: ["react"],
    app: './src/index.js'
  },

  output: {
    filename: 'static/[name].[hash].js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  },
  resolve: {
    alias: {
      "react-dom": "@hot-loader/react-dom",
    },
    extensions: ['', '.js', '.jsx']
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
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        // PostCSS will run before css-loader and will 
        // minify and autoprefix our CSS rules.
        loader: 'postcss-loader',
      }
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
    new MiniCssExtractPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: 'public/index.html',
      favicon: 'public/favicon.ico'
    })
  ],
};
