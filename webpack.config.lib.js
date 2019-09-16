const path = require('path');

module.exports = {
    entry: './src/demo/index.js',
    output: {
        path: path.resolve(__dirname, 'dist/lib'),
        filename: 'index.js',
        library: 'useRecursiveTask',
        libraryTarget: 'umd'
    }
};
