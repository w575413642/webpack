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
			},
			{
                test: /\.css$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {importLoaders: 1} //这里可以简单理解为，如果css文件中有import 进来的文件也进行处理
                    },
                    {
                        loader: 'postcss-loader',
                        options: {           // 如果没有options这个选项将会报错 No PostCSS Config found
                            plugins: (loader) => [
                                require('postcss-import')({root: loader.resourcePath}),
                                require('autoprefixer')(), //CSS浏览器兼容
                                require('cssnano')()  //压缩css
                            ]
                        }
                    }
                ]
            },
            {
            	test:/\.jpg/,
            	use:{
            		loader:'file-loader',
            		options:{
            			name:'images/[name].[ext]'
            			// 
            		}
            	}
            },
            {
            	test: /\.html$/,
            	use:{
            		loader: 'html-loader',
            		options: {
            			// attrs:[':data-src']
            		}
            	}
            },
            {
            	test:/\.tpl$/,
            	use:{
            		loader:'ejs-loader',
            		options:{

            		}
            	}
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
