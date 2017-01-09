var webpack = require("webpack");
var CopyWebpackPlugin = require("copy-webpack-plugin");
var path = require("path");

module.exports = {
    entry: "./index.web.js",
    output: {
        path: path.resolve("./dist"),
        filename: "client.bundle.js"
    },
    cache: true,
    devtool: "source-map",
    resolve: {
        extensions: [".web.js", ".js", ".jsx"]
    },
    module: {
        loaders: [
            {
                test: /\.(jsx|js|web\.js)?$/,
                exclude: /node_modules/,
                loader: "babel-loader",
                query: {
                    presets: [
                        "es2015"
                    ]
                }
            }
        ],
    },
    plugins: [
        new CopyWebpackPlugin([
            { from: "static" } // Copy contents of /static to /dist/client/
        ])
        // new webpack.optimize.UglifyJsPlugin([]),
        // new webpack.optimize.DedupePlugin()
    ]
}
