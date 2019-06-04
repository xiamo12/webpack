const path = require('path');

module.exports = {
	entry : './src/index.js',
	mode : "development",//development是开发模式。production是生产模式
	output : {
		filename : 'main.js',
		path : path.resolve(__dirname,'dist')
	},
	module : {
		rules : [
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader']
				//如果该模块满足正则表达式test里的条件，则用use里的规则从右向左进行处理。也就是先处理css-loader,再用style-loader
			}
		]
	}
};
