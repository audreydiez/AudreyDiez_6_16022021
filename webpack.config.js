const HtmlWebpackPlugin = require("html-webpack-plugin");
const ESLintPlugin = require('eslint-webpack-plugin');

const CopyPlugin = require("copy-webpack-plugin");

const path = require("path");



module.exports = {
    mode: 'development',
    devServer: {
        historyApiFallback: true
    },
    module: {
        rules: [
            {
                // Include CSS, Load and compile Sass
                test: /\.scss$/i,
                use: [
                    "style-loader",
                    "css-loader?url=false",
                    {
                        loader: "postcss-loader",
                        options: {
                            postcssOptions: {
                                plugins: [
                                    [
                                        "postcss-preset-env",
                                        "autoprefixer"

                                    ],
                                ],
                            },
                        },
                    },
                    "sass-loader"
                ]
            },
            {
                // Fix warning in console for Devtools loading SourceMap
                test: /\.js$/,
                enforce: 'pre',
                use: ['source-map-loader'],
            },
            {
                // Javascript compiler and transpiler
                test: /\.js$/,
                exclude: /node_modules/,
                use: ["babel-loader"]
            },
            {
                test: /\.(png|jp(e*)g|svg)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8000,
                            name: 'images/[hash]-[name].[ext]',
                            publicPath: 'assets/images',
                        }
                    }
                ]
            }
        ]
    },
    entry: {
        'index': './src/index.js',
        'photographer': './src/index.js'
    },
    plugins: [


        new HtmlWebpackPlugin({

            // Load template from src/index.html
            template: path.resolve(__dirname, "src", "index.html"),
            chunks: ['index'],
            inject: 'body'

        }),
        new HtmlWebpackPlugin({
            template: './src/photographer.html',
            filename: 'photographer.html',
            chunks: ['photographer'],
            inject: 'body',
        }),

        // ESLint disable error
        new ESLintPlugin({
            emitWarning: true
        }),
        new CopyPlugin({
            patterns: [
                {
                    from: "src/assets/images",
                    to: "./assets/images/",
                },
            ]
        })
    ]
};