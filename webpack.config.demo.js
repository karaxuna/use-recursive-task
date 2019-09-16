const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    devtool: 'inline-source-map',
    entry: './src/demo/index.js',
    output: {
        path: path.resolve(__dirname, 'dist/demo'),
        filename: 'index.js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './src/demo/index.html')
        })
    ],
    devServer: {
        port: 8080,
        contentBase: path.resolve(__dirname, 'dist/demo'),
        inline: true
    }
};
