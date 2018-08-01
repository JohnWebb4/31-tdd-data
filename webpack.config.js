// Imports
const path = require('path');

module.exports = {
    entry: {
        main: './build.ts',
    },
    resolve: {
        extensions: [".webpack.js", ".web.js", ".js", ".ts"]
    },
    output: {
        path: __dirname,
        filename: 'bundle.js'
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          loader: 'ts-loader',
        }
      ]
    }
};
