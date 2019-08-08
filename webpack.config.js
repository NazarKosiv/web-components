const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        main: path.resolve(__dirname, './src/scripts', 'main.ts'),
    },
    mode: 'development',
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, './build')
    },
    devServer: {
        contentBase: path.join(__dirname, 'src'),
        compress: true,
        port: 9000,
        index: 'index.html'
    },
    devtool: 'source-map',
    module: {
        rules: [
            {
                use: 'ts-loader',
                exclude: /node_modules/,
                test: /\.tsx?$/
            },
            {
                use: [
                    'style-loader',
                    'css-loader'
                ],
                test: /\.css$/
            },
            {
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ],
                test: /\.(scss|sass)$/
            }
        ]
    },
    resolve: {
        extensions: [ '.tsx', '.ts', '.js' ]
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: path.resolve(__dirname, './index.html')
        })
    ]
};