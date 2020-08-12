const StatsReportPlugin = require("webpack-stats-report").StatsReportPlugin;
const VueLoaderPlugin = require("vue-loader").VueLoaderPlugin;

module.exports = {
    mode: "production",
    //mode: "development",
    devtool: "source-map",
    externals: ["vue"],
    output: {
        filename: "pui.js",
        umdNamedDefine: true,
        library: "pui",
        libraryTarget: "umd"
    },
    plugins: [new VueLoaderPlugin(), new StatsReportPlugin({
        title: "Stats Report - PUI",
        output: ".temp/stats-report.html",
        outputStatsJson: true,
        generateMinifiedSize: true,
        generateGzipSize: true
    })],
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: "babel-loader",
                options: {
                    cacheDirectory: true,
                    babelrc: false,
                    presets: ["@babel/preset-env"]
                }
            }
        }, {
            test: /\.(css|scss)$/,
            use: [{
                loader: "style-loader",
                options: {
                    //Reuses a single style element
                    injectType: "singletonStyleTag",
                    attributes: {
                        //Add custom attrs to style for debug
                        context: "pui"
                    }
                }
            }, {
                loader: "css-loader",
                options: {
                    esModule: false,
                    import: false,
                    sourceMap: false
                }
            }, {
                // compiles Sass to CSS
                loader: "sass-loader"
            }]
        }, {
            test: /\.svg$/i,
            loader: "url-loader"
        }, {
            test: /\.vue$/,
            loader: "vue-loader",
            options: {
                hotReload: false
            }
        }]
    }
};