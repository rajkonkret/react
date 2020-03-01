import webpack from 'webpack';
import merge from 'webpack-merge';

import { webpackCommonConfig } from './webpack.common.config';

const webpackDevelopmentConfig = (env) => {
    let config = merge(
        webpackCommonConfig(env),
        {
            mode: 'development',
            devtool: 'source-map',
            plugins: [
                new webpack.DefinePlugin({
                    'process.env.NODE_ENV': JSON.stringify('development'),
                }),
            ],
        },
    );

    return config;
};

export {
    webpackDevelopmentConfig,
};
