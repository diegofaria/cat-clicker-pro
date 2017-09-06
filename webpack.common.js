const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const config = {
    entry: {
        app: './src/index.js',
        vendor: ['lodash', 'react', 'react-dom']
    },
    output: {
        filename: '[name].[chunkhash].js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                include: [path.resolve(__dirname, 'src')],
                loader: ['babel-loader']
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new webpack.HashedModuleIdsPlugin(),
        new webpack.optimize.CommonsChunkPlugin({
            name: [ // the order matters :)
                'vendor', // third-party libraries
                'runtime', // webpack boilerplate code
            ]
        }),
        new HtmlWebpackPlugin({
            inject: false,
            template: require('html-webpack-template'),
            title: 'Caching',
            appMountId: 'react-root'
        })
    ]
};

module.exports = config;
