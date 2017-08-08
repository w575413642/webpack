var path = require("path")
module.exports = {
	entry:"./src/script/main.js",
	// 入口
	output: {
		path: path.resolve(__dirname, './dist/js'),
		// webpack2X需要写成类似形式
		// 先引入
		filename:"bundle.js"
	}
	// 打包文件地址及名称
}