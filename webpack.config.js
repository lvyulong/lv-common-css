const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = {
    mode:'production',
    entry:path.resolve(__dirname,'./src/index.js'),
    output: {
        filename: "index.js",
        path: path.resolve(__dirname,'dist'),
        libraryTarget: "umd"
    },
    plugins: [
        // 提取css文件为单独的文件
        new MiniCssExtractPlugin({
            filename: `style/[name].min.css`,
            chunkFilename: `style/[id].css`
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
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'postcss-loader']
            },
            // less文件编译,并提取为单独的文件
            {
                test: /\.less$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'postcss-loader',
                    'less-loader'
                ]
            },
        ]
    }
};