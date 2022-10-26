const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');

const distFolder = 'dist';

module.exports = {

    mode: 'development',

    target: 'web',

    entry: {
        'index': path.resolve(__dirname, './src/index')
    },

    output: {
        path: path.resolve(__dirname, distFolder),
        filename: `[name].min.[contenthash:8].js`,
        clean: true
    },

    resolve: {
        extensions: ['.tsx', '.ts', '.jsx', '.js', '.json']
    },

    optimization: {
        runtimeChunk: 'single',
        splitChunks: {
            chunks: 'all',
        },
    },

    module: {
        rules: [
            // TypeScript files
            {
                test: /\.tsx?$/i,
                loader: "ts-loader"
            },
            // Global SASS/CSS files
            {
                test: /\.(c|sa|sc)ss$/i,
                use: [
                    "style-loader",
                    "css-loader",
                    {
                        loader: "sass-loader",
                        options: {
                            implementation: require("sass"),
                        },
                    },
                ],
            },
            // HTML template files
            {
                test: /\.html?$/i,
                loader: "html-loader"
            },
            // Images and fonts
            {
                test: /\.(png|svg|eot|ttf|woff)/,
                type: 'asset/resource'
            },
            // Text files
            {
                test: /\.txt/,
                type: 'asset/source'
            },
        ]
    },

    plugins: [new HtmlWebpackPlugin()]
}
