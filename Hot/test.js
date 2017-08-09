	var path = require('path');
	var HtmlWebpackPlugin = require('html-webpack-plugin');
	module.exports = {
	    entry:'./src/script/main.js',
		output:{
		path:path.resolve(__dirname,'./dist'),//我这里的路径是在lib文件夹下
		publicPath:"http://127.0.0.1:8080/lib/",//感谢@向前看*_*的指出，这个属性可以省略
		filename:'bundle.js'
		},
		devServer:{
			historyApiFallback:true,
			hot:true,
			inline:true,
			progress:true,//报错无法识别，删除后也能正常刷新
		},
		plugins:[
			new webpack.DefinePlugin({
			'process.env.NODE.ENV':"development"
			}),
			new webpack.HotModuleReplacementPlugin(),
			new HtmlWebpackPlugin({
		    	title: 'My App',
      			filename: 'assets/admin.html'
			})

		]
	}
