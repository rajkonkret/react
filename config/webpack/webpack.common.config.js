import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import HtmlWebpackHarddiskPlugin from 'html-webpack-harddisk-plugin';
import path from 'path';

const webpackCommonConfig = (env) => ({
    entry: {
        app: ['./app/index.js'],
    },
    output: {
        path: path.resolve(__dirname, '../../build/assets'),
        publicPath: '/assets/',
        filename: '[name].js',
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: [
                    'babel-loader',
                ],
            },
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                ],
            },
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader',
                ],
            },
            {
                test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                use: {
                    loader: 'url-loader?limit=10000&mimetype=application/font-woff',
                    options: {
                        name: '[path][name].[ext]',
                    },
                },
            },
            {
                test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: '[path][name].[ext]',
                    },
                },
            },
            {
                test: /\.(jpg|png|gif|mp4|ogv|webm)$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: '[path][name].[ext]',
                    },
                },
            },
            {
                test: /\.html$/i,
                use: {
                    loader: 'html-loader',
                    options: {
                        interpolate: true,
                        attributes: true,
                        minimize: env === 'prod',
                    },
                },
            }
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[id].css',
        }),
        new HtmlWebpackPlugin({
            filename: '../index.html',
            template: path.resolve(
                __dirname,
                '../../app/index.html',
            ),
            inject: true,
            hash: true,
            alwaysWriteToDisk: true,
        }),
        new HtmlWebpackHarddiskPlugin(),
    ],
});

export {
    webpackCommonConfig,
};
