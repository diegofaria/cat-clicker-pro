const webpack = require('webpack');
const merge = require('webpack-merge');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const common = require('./webpack.common');

const config = merge(common, {
    devtool: 'source-map',
    devServer: {
        contentBase: './dist'
    },
    plugins: [
        // new BundleAnalyzerPlugin({
        //     openAnalyzer: false
        // })
    ]
});

module.exports = config;
