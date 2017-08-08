var htmlWebpackPlugin = require('html-webpack-plugin');
var path = require("path");
console.log(module.dirname,__filename)
module.exports = {
	entry:'./src/script/app.js',
	// 入口
	output: {
		path: path.resolve(__dirname, './dist'),
		// webpack2X需要写成类似形式
		// 先引入
		filename:"js/app.js"
		// 版本号 -> 只修改更改过的版本号 MD5加密
	},
	module:{
		loaders:[
			{
				test: /\.js$/,
				loader: 'babel-loader',
				exclude: path.resolve(__dirname, './node_modules'),
				include: path.resolve(__dirname, './src'),
				query:{
					presets:["es2015"]
				},
			}
		]
	},
	plugins: [
		new htmlWebpackPlugin({
			template:'./src/index.html',
			filename:'index.html',
			inject: 'body'
		})
		
	]
	// 打包文件地址及名称
}
