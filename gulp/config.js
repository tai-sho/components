////////////
// Config //
////////////

// import argvs from 'yargs';
// import webpack from 'webpack';
// import UglifyJsPlugin from 'uglifyjs-webpack-plugin';
// import browserSync from 'browser-sync';
// import willChange from 'postcss-will-change';
// import willChangeTransition from 'postcss-will-change-transition';
// import mqpacker from 'css-mqpacker';
// import colormin from 'postcss-colormin';
// import cssstats from 'postcss-cssstats';
// import cssnano from 'cssnano';
// import autoprefixer from 'autoprefixer';
// import presetEnv from 'postcss-preset-env';
// import Visualizer from 'webpack-visualizer-plugin';
// import ParallelUglifyPlugin from 'webpack-parallel-uglify-plugin';
// import ProgressBarPlugin from 'progress-bar-webpack-plugin';
// import path from 'path';
// import MiniCssExtractPlugin from 'mini-css-extract-plugin';
// import OptimizeCSSAssetsPlugin from 'optimize-css-assets-webpack-plugin';
// import OptimizeCSSClassnamesPlugin from 'optimize-css-classnames-plugin';
// import BundleAnalyzerPlugin from 'webpack-bundle-analyzer';
// import { isFree, isPro, isBuilding, getTier, hasRelease, getRelease, hasCurrent, getCurrent } from './utils/utils';


/*

Main Config Object

*/
var config = {
  files: {
    js: [
      './public/js/app/**/*.js',
      './public/js/app/**/*.jsx',
      '!./public/js/app.min.js',
      '!./public/js/vendor.min.js',
      '!./public/js/app.min.js.map',
      './admin/js/app/**/*.js',
      './admin/js/app/**/*.jsx',
      '!./admin/js/app.min.js',
      '!./admin/js/vendor.min.js',
      '!./admin/js/app.min.js.map'
    ],
    jsEntryAdmin: isBuilding(argvs) ? './_tmp/admin/js/app/app.js' : './admin/js/app/app.js',
  },
  folders: {
    tmp: './_tmp',
    freeRepo: './_free',
    plugin: './',
    dist: isBuilding(argvs) ? './_tmp/dist' : './dist',
    pro: '../../../../assets/wp-shopify-pro',
    proTmp: '../../../../assets/wp-shopify-pro/_tmp',
    proTmpRenamed: '../../../../assets/wp-shopify-pro/wp-shopify-pro',
    free: '../../../../assets/wpshopify',
    freeDistRepo: '../../../../assets/wpshopify/_free',
    freeTmpRenamed: '../../../../assets/wpshopify/wpshopify',
    coreRepo: '../../../../assets/wp-core-repo/trunk',
    svgsPublic: isBuilding(argvs) ? './_tmp/public/imgs' : './public/imgs',
    svgsAdmin: isBuilding(argvs) ? './_tmp/admin/imgs' : './admin/imgs',
    cache: './node_modules/.cache'
  },
  names: {
    jsVendorPublic: 'public.vendor.min.js',
    jsVendorAdmin: 'admin.vendor.min.js',
    jsPublic: 'public.min.js',
    cssPublic: 'public.min.css',
    cssPublicCore: 'core.min.css',
    cssPublicGrid: 'grid.min.css',
    jsAdmin: 'admin.min.js',
    cssAdmin: 'admin.min.css',
    pro: 'WP Shopify Pro',
    free: 'WP Shopify',
    zips: {
      pro: 'wp-shopify-pro.zip',
      free: 'wpshopify.zip'
    }
  },
  bs: browserSync.create(),
  serverName: 'wpshopify.loc'
}


/*

Webpack Config

*/
function webpackConfig(outputFinalname) {

  var webpackConfigObj = {
    watch: false,
    mode: config.isBuilding ? 'production' : 'development',
    cache: true,

    // IMPORTANT: This entry will override an entry set within webpack stream
    entry: {
      public: config.isBuilding ? './_tmp/public/js/app/app' : './public/js/app/app',
      admin: config.isBuilding ? './_tmp/admin/js/app/app' : './admin/js/app/app'
    },
    output: {
      filename: '[name].min.js',
      chunkFilename: '[name].min.js',
      jsonpFunction: 'wpshopify'
    },
    plugins: [
      new webpack.optimize.ModuleConcatenationPlugin(),
      new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
      new ProgressBarPlugin(),
      new MiniCssExtractPlugin({
        filename: "gutenberg-components.min.css",
        chunkFilename: "gutenberg-components.min.css"
      })
    ],
    optimization: {
      splitChunks: {
        chunks: "all",
        minSize: 0,
        automaticNameDelimiter: '-'
      },
      occurrenceOrder: true,
      minimizer: [
        new UglifyJsPlugin({
          parallel: true,
          cache: true,
          extractComments: false,
          uglifyOptions: {
            compress: true,
            ecma: 6,
            mangle: {
              keep_fnames: false
            },
            safari10: true,
            ie8: false,
            warnings: false
          },
          sourceMap: false,
        }),
        new OptimizeCSSAssetsPlugin({})
      ]
    },
    resolve: {
      extensions: ['.js', '.jsx']
    },
    module: {
      rules: [
        {
          test: /\.css$/,
          use: [
            MiniCssExtractPlugin.loader,
            "css-loader"
          ]
        },
        {
          test: /\.(js|jsx)$/i,
          exclude: /node_modules/,
          enforce: 'pre',
          use: [
            {
              loader: 'babel-loader',
              options: {
                babelrcRoots:  [".", "./_tmp/*"],
                presets: [
                  '@babel/preset-env',
                  '@babel/preset-react'
                ]
              }
            }
          ]
        }
      ]
    }
  }

  return webpackConfigObj;

}

config.postCSSPlugins = postCSSPlugins;
config.webpackConfig = webpackConfig;
config.stylelintConfig = stylelintConfig;
config.jestConfig = jestConfig;

export default config;