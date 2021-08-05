const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

// the path(s) that should be cleaned
let pathsToClean = ['dist']

// the clean options to use
let cleanOptions = {
  root: path.resolve(__dirname),
  verbose: true,
  dry: false,
  cleanOnceBeforeBuildPatterns: ['dist']
}

module.exports = {
  resolve: {
    extensions: ['.js', '.ts', '.json']
  },
  devtool: 'source-map', // 打包出的js文件是否生成map文件（方便浏览器调试）
  mode: 'production',
  entry: {
    app: path.resolve(__dirname, './src/index.ts')
  },
  output: {
    filename: '[name].js', // 生成的fiename需要与package.json中的main一致
    path: path.resolve(__dirname, './dist')
    // libraryTarget: 'commonjs'
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              // 指定特定的ts编译配置，为了区分脚本的ts配置
              configFile: path.resolve(__dirname, './tsconfig.json')
            }
          }
        ],
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/index.html'
    })
  ],
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000,
    open: true,
    inline: true
  }
}
