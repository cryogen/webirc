var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var BUILD_DIR = path.resolve(__dirname, 'public');
var APP_DIR = path.resolve(__dirname, 'client');
var LESS_DIR = path.resolve(__dirname, 'less');

var config = {
    devtool: 'eval-source-map',
    entry: [
        path.join(__dirname, 'client/Application.jsx'),
        LESS_DIR + '/site.less'
    ],
    output: {
        path: BUILD_DIR,
        filename: 'bundle.min.js',
        publicPath: '/'
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: '!!pug!views/index.pug',
            inject: 'body',
            filename: 'index.html'
        }),
        new webpack.optimize.UglifyJsPlugin({
            compressor: {
                warnings: false,
                screw_ie8: true
            }
        }),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
        })
    ],
    module: {
        loaders: [{
            test: /\.jsx?/,
            include: APP_DIR,
            loader: 'babel'
        }, {
            test: /\.less$/,
            loader: 'style!css!autoprefixer!less'
        }, {
            test: /.(png|woff(2)?|eot|ttf|svg)(\?[a-z0-9=\.]+)?$/, loader: 'url-loader?limit=100000'
        }]
    }
};

module.exports = config;
