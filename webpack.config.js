const path = require('path')

module.exports = {
    mode: process.env.NODE_ENV == 'production' ? 'production' : 'development',    
    entry: [
        './src/js/app.js', 
        './src/sass/app.scss'
    ],
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: './app.js',
    },
    resolve: {
        alias: {
            vue: 'vue/dist/vue.js'
        }
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    query: {
                    }
                }
            },
            {
                test: /\.vue$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'vue-loader',
                }
            },
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: 'css/[name].css',
                        }
                    },
                    {
                        loader: 'extract-loader'
                    },
                    {
                        loader: 'css-loader?-url'
                    },
                    {
                        loader: 'sass-loader'
                    }
                ]
            }
        ]
    },
    devServer: {
        historyApiFallback: true,
        port: 3000
    },
    plugins: []
};