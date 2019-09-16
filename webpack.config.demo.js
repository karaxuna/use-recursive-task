const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/demo/index.js',
    output: {
        path: path.resolve(__dirname, 'dist/demo'),
        filename: 'index.js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './src/demo/index.html')
        })
    ]
};
