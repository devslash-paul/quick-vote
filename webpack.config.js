var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: ['./frontend/main.js',  
    'webpack/hot/dev-server',
    'webpack-hot-middleware/client'],  
    output: {
        path: "/", 
        filename: 'bundle.js',
        publicPath: '/scripts/'
    },
    module: {
        loaders: [
            {
                test: /.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'react', 'react-hmre']
                }
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ]
}