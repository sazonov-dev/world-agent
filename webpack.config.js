const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const stylesHandler = 'style-loader';

module.exports = {
    entry: { main: './src/index.js' },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js',
        publicPath: ''
    },
    mode: 'development',
    devServer: {
        static: path.resolve(__dirname, './dist'),
        open: true,
        compress: true,
        port: 8080
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: 'babel-loader',
                exclude: '/node_modules/'
            },
            {
                test: /\.(png|svg|jpg|gif|woff(2)?|eot|ttf|otf)$/,
                type: 'asset/resource'
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    stylesHandler, 'css-loader', 'postcss-loader', 'resolve-url-loader',
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true,
                            sassOptions: {
                                includePaths: ['src/scss'],
                            },
                        },
                    },
                ],
            },
            {
                test: /\.css$/,
                use: [stylesHandler, MiniCssExtractPlugin.loader, {
                    loader: 'css-loader',
                    options: { importLoaders: 1 }
                }, 'postcss-loader']
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "src", "index.html"),
            filename: 'index.html'
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "src", "pages", "ui.html"),
            filename: 'ui.html'
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "src", "pages", "header.html"),
            filename: 'header.html'
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "src", "pages", "footer.html"),
            filename: 'footer.html'
        }),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin()
    ]
}
