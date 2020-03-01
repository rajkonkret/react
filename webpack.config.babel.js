import { webpackDevelopmentConfig } from "./config/webpack/webpack.development.config";
import { webpackProductionConfig } from "./config/webpack/webpack.production.config";

export default ({ env }) => env === 'dev' ? webpackDevelopmentConfig(env) : webpackProductionConfig(env);