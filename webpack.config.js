const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
module.exports = {
    entry: "./src/main.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name]-[hash:8].js",
    },
    mode: "development",
    module: {
        rules: [{
            test: /\.js$/,
            use: [
                path.resolve(__dirname, "./src/myloaders/myloader2.js"),
                path.resolve(__dirname, "./src/myloaders/myloader1.js"),
            ],
        }, ],
    },
    plugins: [new CleanWebpackPlugin()],
};