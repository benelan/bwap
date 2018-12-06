var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.jsx',
    mode: 'development',
    output: {
        path: path.resolve('dist'),
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                
                loader: 'babel-loader',
                
                query: {
                    presets: ['@babel/react', '@babel/preset-env']
                
                }
            },
            {
              test: /\.css$/,
              use: [
                "style-loader",
                "css-loader",
                {
                  loader: "postcss-loader",
                }
              ]
            },
            {
                test: /\.(jpg|png|gif|eot|svg|ttf|woff|woff2)(\?.*)?$/,
                loader: 'file-loader',
                query: {
                  name: 'static/media/[name].[ext]'
                }
            },
            {
                test: /\.(mp4|webm)(\?.*)?$/,
                loader: 'url-loader',
                query: {
                  limit: 10000,
                  name: 'static/media/[name].[ext]'
                }
            }
        ]
    },
    plugins: [new HtmlWebpackPlugin({
        template: './src/index.html',
        filename: 'index.html',
        inject: 'body'
    })],
    devServer: {
        historyApiFallback: true
    },
    externals: {
        // global app config object
        config: JSON.stringify({
            apiUrl: 'http://localhost:4000'
        })
    }
}