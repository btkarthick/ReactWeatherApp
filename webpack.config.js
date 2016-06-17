/**
 * Webpack configuartion file
 * 
 */

var path = require('path');

var HtmlWebpackPlugin = require('html-webpack-plugin');

var configOptions = {

    context: path.resolve('./weatherapp'),

    entry: ['./index.js'],

    output : {

        path: path.resolve('./dist'),
        filename: 'bundle.js'
    },

    module : {

        loaders : [

            {
                test : /\.js$/,
                exclude: /node_modules/,
                loader: 'babel'
            }

        ]

    },

    plugins : [

            new HtmlWebpackPlugin({

                template : './index.html',
                filename : 'index.html',
                inject : 'body'
            })
    ]

}

module.exports = configOptions