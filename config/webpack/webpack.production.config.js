import webpack from 'webpack';
import merge from 'webpack-merge';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import TerserPlugin from 'terser-webpack-plugin';
import OptimizeCssAssetsPlugin from 'optimize-css-assets-webpack-plugin';
import cssnano from 'cssnano';

import { webpackCommonConfig } from './webpack.common.config';

const webpackProductionConfig = (env) => {
    const config = merge(
        webpackCommonConfig(env),
        {
            mode: 'production',
            optimization: {
                minimize: true,
                minimizer: [
                    new TerserPlugin({
                        test: /\.js(\?.*)?$/i,
                    }),
                    new OptimizeCssAssetsPlugin({
                        assetNameRegExp: /.css$/g,
                        cssProcessor: cssnano,
                        cssProcessorOptions: {
                            discardComments: {
                                removeAll: true,
                            },
                        },
                        canPrint: true,
                    }),
                ],
            },
            plugins: [
                new webpack.DefinePlugin({
                    'process.env.NODE_ENV': JSON.stringify('production'),
                }),
                new CleanWebpackPlugin(),
            ],
        },
    );

    return config;
};

export {
    webpackProductionConfig,
};
