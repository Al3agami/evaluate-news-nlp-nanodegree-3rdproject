const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');
const WorkBoxPlugin = require('workbox-webpack-plugin');

module.exports = {
    mode: "production",
    entry: "./src/client/index.js",
    output: {
        libraryTarget: 'var',
        library: 'ScopeConnector'
    },
    optimization: {
        minimizer: [new OptimizeCssAssetsPlugin({}), new TerserWebpackPlugin({})]
    },
    module: {
        rules: [{
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.scss$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/client/views/index.html',
            filename: './index.html'
        }),
        new MiniCssExtractPlugin({ filename: '[name].css' }),
        new WorkBoxPlugin.GenerateSW()
    ]
}