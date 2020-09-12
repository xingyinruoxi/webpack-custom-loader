const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
    entry: "./src/main.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name]-[hash:4].js",
    },
    mode: "development",
    resolveLoader: {
        modules: ["node_modules", "myloaders"],
    },
    module: {
        rules: [{
                test: /\.js$/,
                use: [
                    path.resolve(__dirname, "./src/myloaders/myloader2.js"),
                    path.resolve(__dirname, "./src/myloaders/myloader1.js"),
                ],
            },
            {
                test: /\.less$/,
                use: [
                    path.resolve(__dirname, "./src/myloaders/style-loader.js"),
                    path.resolve(__dirname, "./src/myloaders/less-loader.js"),
                ],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./public/index.html",
        }),
        new CleanWebpackPlugin(),
    ],
};