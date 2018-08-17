const path = require('path');
const webpack= require('webpack');
const { VueLoaderPlugin, } = require('vue-loader');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: path.join(__dirname, 'src', 'index.js'),
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js",
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                include: [
                    path.join(__dirname, 'src'),
                ],
            },
            {
                test: /\.(gif|png|jpe?g)$/i,
                loader: "file-loader",
                options: {
                    name: '/Content/app/dist/images/[hash].[ext]',
                },
            },
            {
                test: /\.css$/,
                use: [
                  'vue-style-loader',
                  {
                    loader: 'css-loader',
                    options: {
                      // enable CSS Modules
                      modules: true,
                      // customize generated class names
                      localIdentName: '[local]_[hash:base64:8]'
                    }
                  }
                ]
              }
        ]
},
    resolve: {
    alias: {
        'vue$': 'vue/dist/vue.esm.js',
        }
},
plugins: [
    new CleanWebpackPlugin(),
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
        template: path.join(__dirname, 'index.html'),
    }),
]
};
