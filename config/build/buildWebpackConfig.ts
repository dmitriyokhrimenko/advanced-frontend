import { BuildOptions } from "../types/config";
import webpack from 'webpack';
import { buildPlugins } from './buildPlugin';
import { buildLoaders } from './buildLoader';
import { buildResolvers } from './buildResolvers';
import { buildDevServer } from './buildDevServer';

export function buildWebpackConfig (options: BuildOptions): webpack.Configuration {
    const { mode, paths, isDev } = options;
    return {
        mode,
        entry: paths.entry,
        output: {
            path: paths.build,
            filename: '[name].[contenthash].js',
            clean: true,
        },
    
        module: {
            rules: buildLoaders(options),
        },
        resolve: buildResolvers(),
    
        plugins: buildPlugins(options),
        devtool: isDev ? 'inline-source-map' : undefined,
        devServer: isDev ? buildDevServer(options) : undefined,
    }
}