const webpack = require('webpack');
const merge = require('webpack-merge');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const common = require('./webpack.common');

const ENABLE_BUNDLE_ANALYZER = false;

const config = merge(common, {
    devServer: {
        contentBase: './dist'
    },
    plugins: [
        ENABLE_BUNDLE_ANALYZER ?
            new BundleAnalyzerPlugin({ openAnalyzer: true }) : () => {}
    ]
});

module.exports = config;
