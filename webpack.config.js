const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = {
    mode:'production',
    entry:{
        main:path.resolve(__dirname,'./src/main.js'),
        color:path.resolve(__dirname,'./src/color.js'),
        font:path.resolve(__dirname,'./src/font.js'),
        box:path.resolve(__dirname,'./src/box.js'),
    },
    output: {
        filename: "[name].js",
        path: path.resolve(__dirname,'dist/script'),
    },
    resolve: {
        extensions: ['js'],
        alias:{
            app:path.resolve(__dirname,'./src/style/')
        }
    },
    plugins: [
        // 提取css文件为单独的文件
        new MiniCssExtractPlugin({
            filename: `../style/[name].css`,
        }),

        // 压缩css文件
        new OptimizeCssAssetsWebpackPlugin(),
        // 每次打包清空
        new CleanWebpackPlugin(['dist'], {
            root: path.resolve(__dirname, './')
        }),
    ],
    module:{
        rules: [
            {
                test:/\.js$/,
                exclude: /node_modules/,
                use:'babel-loader'
            },
            // css文件编译
            {
                test: /\.css$/,
                use: [
                    // css文件提取为单独的文件
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: '../test/'
                        }
                    },
                    'css-loader',
                    'postcss-loader']
            },
            // less文件编译,并提取为单独的文件
            {
                test: /\.less$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: '../test/'
                        }
                    },
                    'css-loader',
                    'postcss-loader',
                    'less-loader'
                ]
            },
        ]
    }
};