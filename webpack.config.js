const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: {
        index: ['babel-polyfill', './src/index.js']
    },
    output: {
        publicPath: '/'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader"
                    }
                ]
            },
            {
                test: /\.css$/,
                use: [ 
                    'style-loader', 'css-loader' 
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader',
                ]
            }
        ]
    },
    devServer: {
        publicPath:'/',
        historyApiFallback: true,
        contentBase: './',
        hot: true
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./index.html",
            filename: "./index.html"
        })
    ]
};