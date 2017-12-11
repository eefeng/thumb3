const path = require('path');
const webpack = require('webpack');
const LiveReloadPlugin = require('webpack-livereload-plugin');

module.exports = {
    entry: {
        index: [
            path.join(__dirname, '../src/public/js/index.es.js'),
            path.join(__dirname, '../src/public/js/main.js'),
        ],
        tags: [
            path.join(__dirname, '../src/public/js/tags.es.js')
        ]
    },
    output: {
        filename: 'public/js/[name]-[hash:5].js',
        path: path.join(__dirname, '../build')
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["es2015", "stage-0"]
                    }
                }
            }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            "process.env": {
                NODE_ENV: "dev"
            }
        }),
        new LiveReloadPlugin({appendScriptTag: true})
    ]
};