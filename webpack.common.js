const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
	entry : './assest/js/index.js',
	output : {
		filename : 'bundle.js',
		path: path.resolve(__dirname, 'dist')
	},
	module : {
		rules: [
		{
			test: /\.css$/i,
			use:['style-loader','css-loader']
		},{
			test : /\.(png|jpe?g|gif)$/i,
			use : [
				{
					loader : 'file-loader',
					options : {
						name: 'dirname/[contenthash].[ext]',
					}
				},
			],
		},
		],
	},
	plugins:[
		new HtmlWebpackPlugin({
			template: './assest/html/template.html',
			filename : "index.html",
		}),
		new webpack.ProvidePlugin({
			$: "jquery",
			JQuery: "jquery"
		})
	]
}