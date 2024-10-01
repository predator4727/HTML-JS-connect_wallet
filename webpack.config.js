const path = require('path');

module.exports = {
    entry: './index.js', // The entry point for your code
    output: {
        filename: 'bundle.js', // Output file name
        path: path.resolve(__dirname, 'dist'), // Output directory
        library: 'bundle', // Name of the global library
        libraryTarget: 'umd', // Universal module definition
        globalObject: 'this' // To support browser and Node.js environments
    },
    mode: 'development', // Use 'production' for minified code
    resolve: {
        fallback: {
            "fs": false, // These are often not needed for browser environments
            "path": false,
            "crypto": require.resolve("crypto-browserify"),
            "stream": require.resolve("stream-browserify")
        }
    }
};
