const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    devtool: 'inline-source-map',
    entry: './src/docs/index.js',
    output: {
        path: path.resolve(__dirname, 'docs'),
        filename: 'index.js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './src/docs/index.html')
        })
    ],
    devServer: {
        port: 8080,
        contentBase: path.resolve(__dirname, 'docs'),
        inline: true
    }
};
