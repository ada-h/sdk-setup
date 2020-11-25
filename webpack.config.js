
const path = require("path");
const webpack = require("webpack");


const config = {
    entry: ['babel-polyfill','./src/index.js'],
    output: {
        filename: 'sdk.js',
        path: path.resolve(__dirname, 'build'),
        
    },
    mode: 'production',
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,         
                query: {
                    presets: ['es2015']
                }
            } 
        ]
    },
    devServer: {
        port: 3000,
        contentBase: path.resolve(__dirname, 'build'),
        inline: true
    }
}

module.exports = config;