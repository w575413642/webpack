var htmlWebpackPlugin = require('html-webpack-plugin');
var path = require("path");
module.exports = {
	entry:{
		main:"./src/script/main.js",
		att:"./src/script/ac.js",
		a:"./src/script/a.js",
		b:"./src/script/b.js",
		c:"./src/script/c.js"
	},
	// 入口
	output: {
		path: path.resolve(__dirname, './dist'),
		// webpack2X需要写成类似形式
		// 先引入
		filename:"js/[name].js"
		// 版本号 -> 只修改更改过的版本号 MD5加密
	},
	plugins: [
		new htmlWebpackPlugin({
			template:'./src/index.html',
			title:'test',
			date:new Date(),
			// webpack -> htmlplugin 支持ejs
			minify:{
				removeComments:true,
				collapseWhitespace:true
			}
			// minify -> 压缩HTML
		}),
		new htmlWebpackPlugin({
			template:'./src/test.html',
			filename:'./a.html',
			title:'a',
			date:new Date(),
			// webpack -> htmlplugin 支持ejs
			minify:{
				removeComments:true,
				collapseWhitespace:false
			},
			chunks:['main','a']
			// minify -> 压缩HTML
		}),
		new htmlWebpackPlugin({
			template:'./src/test.html',
			filename:'./b.html',
			title:'b',
			date:new Date(),
			// webpack -> htmlplugin 支持ejs
			minify:{
				removeComments:true,
				collapseWhitespace:false
			},
			excludeChunks:['main','b']
			// minify -> 压缩HTML
		}),
		new htmlWebpackPlugin({
			template:'./src/test.html',
			filename:'./c.html',
			title:'c',
			date:new Date(),
			// webpack -> htmlplugin 支持ejs
			minify:{
				removeComments:true,
				collapseWhitespace:false
			},
			chunks:['main','c']
			// minify -> 压缩HTML
		}),
	]
	// 打包文件地址及名称
}
