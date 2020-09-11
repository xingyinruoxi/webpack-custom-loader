const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
module.exports = {
    entry: "./src/main.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name]-[hash:8].js",
    },
    mode: "development",
    plugins: [new CleanWebpackPlugin()],
};