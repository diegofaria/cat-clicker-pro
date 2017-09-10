const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const extractSass = new ExtractTextPlugin({
    filename: "[name].[contenthash].css",
    disable: process.env.NODE_ENV === "development"
});

const config = {
    devtool: 'source-map',
    entry: {
        app: './src/index.js',
        vendor: ['lodash', 'react', 'react-dom']
    },
    output: {
        filename: '[name].[chunkhash].js',
        path: path.resolve(__dirname, 'dist'),
        sourceMapFilename: 'sourcemaps/[file].map'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                include: [path.resolve(__dirname, 'src')],
                loader: ['babel-loader']
            },
            {
                test: /\.scss$/,
                include: [path.resolve(__dirname, 'src')],
                use: extractSass.extract({
                    use: [{
                        loader: "css-loader", // translates CSS into CommonJS
                        options: {
                            modules: true,
                            importLoaders: 1, // how many loaders load should be applied before css-loader
                            localIdentName: '[name]__[local]--[hash:base64:5]',
                            minimize: true
                        }
                    }, {
                        loader: "sass-loader", // compiles Sass to CSS
                    }],
                    fallback: "style-loader" // creates style nodes from JS strings
                })
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new webpack.HashedModuleIdsPlugin(),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor'
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'runtime', // webpack boilerplate code
            minChunks: Infinity
        }),
        extractSass,
        new HtmlWebpackPlugin({
            inject: false,
            template: require('html-webpack-template'),
            title: 'Caching',
            appMountId: 'react-root'
        })
    ],
    resolve: {
        symlinks: false
    }
};

module.exports = config;
