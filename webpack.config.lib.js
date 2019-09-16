const path = require('path');

module.exports = {
    mode: 'production',
    entry: './src/lib/index.js',
    output: {
        path: path.resolve(__dirname, 'lib'),
        filename: 'use-recursive-task.js',
        library: 'useRecursiveTask',
        libraryTarget: 'umd'
    }
};
