const HtmlWebpackPlugin = require("./node_modules/html-webpack-plugin");
const MiniCssExtractPlugin = require("./node_modules/mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("./node_modules/clean-webpack-plugin");
const webpack = require("./node_modules/webpack");
const path = require('path');

module.exports = (env, argv) => {
    const isProduction = argv.mode === "production";
    const config = {
        entry: "./src/index.jsx",
        output: {
            filename: "bundle.js",
            publicPath: '/'
        },
        module: {
            rules: [
                {
                    test: /.jsx?$/,
                    use: ["babel-loader"]
                },
                {
                    test: /.s?css$/,
                    use: [
                        isProduction
                            ? MiniCssExtractPlugin.loader
                            : "style-loader",
                        "css-loader",
                        "sass-loader",
                    ]
                }
            ],
        },
        plugins: [
            new webpack.ProgressPlugin(),
            new CleanWebpackPlugin(),
            new HtmlWebpackPlugin({
                template: "./src/index.html"
            }),
        ],
        resolve: {
            extensions: [".js", ".jsx"]
        },
        devServer: {
            hot: true,
            port: 9007,
            historyApiFallback: true
        },
        output : {
            path : path.resolve(__dirname, 'review_build')
        }
    };

    if (isProduction) {
        config.plugins.push(new MiniCssExtractPlugin({
            filename: "[name].css",
        }));
    }

    return config;
};