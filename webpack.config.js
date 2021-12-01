const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const mode = process.env.NODE_ENV === 'production' ? 'production' : 'development';
let target = process.env.NODE_ENV === 'production' ? 'browserslist' : 'web';

module.exports = {
    mode: mode,
    target,
    output: {
        assetModuleFilename: 'images/[hash][ext][query]',
    },
    module: {
        rules: [
            {
                test: /\.(png|jpe?g|gif|svg)$/i,
                type: 'asset',
                parser: {
                    dataUrlCondition: {
                        maxSize: 30 * 1024,
                    }
                }
            },
            {
                test: /\.(s[ac]|c)ss$/i,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {publicPath: ''}
                    },
                    'css-loader', 
                    'postcss-loader', 
                    'sass-loader'
                ]
            },
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {loader: 'babel-loader'}
            }
        ]
    },
    plugins: [new MiniCssExtractPlugin()],
    resolve: {
        extensions: ['.js', '.jsx']
    },
    devtool: 'source-map',
    devServer: {
        static: './dist'
    }
}