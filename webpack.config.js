module.exports = {
    entry: "./src/main.js",
    output: {
        filename: "./dist/bundle.js"
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: "babel-loader",
                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    },devtool: 'source-map'
};
