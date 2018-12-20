const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = {
    mode:'production',
    entry:{
        pc:path.resolve(__dirname,'./src/script/pc.js'),
        mobile:path.resolve(__dirname,'./src/script/mobile.js'),
        // common部分
        'common/color':path.resolve(__dirname,'./src/script/common/color.js'),
        'common/font':path.resolve(__dirname,'./src/script/common/font.js'),
        'common/box':path.resolve(__dirname,'./src/script/common/box.js'),
        'common/init':path.resolve(__dirname,'./src/script/common/init.js'),
    },
    output: {
        filename: "[name].js",
        path: path.resolve(__dirname,'dist/script'),
    },
    resolve: {
        extensions: ['js'],
        alias:{
            style:path.resolve(__dirname,'./src/style/')
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
                            publicPath: '../'
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
                            publicPath: '../'
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