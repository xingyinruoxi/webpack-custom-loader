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
        modules: ["node_modules", "./src/myloaders"],
    },
    module: {
        rules: [{
                test: /\.js$/,
                use: ["myloader2", "myloader1"],
            },
            {
                test: /\.less$/,
                use: ["style-loader", "less-loader"],
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