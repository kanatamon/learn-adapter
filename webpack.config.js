const webpack = require('webpack')
const path 		= require('path');

module.exports = {
	devtool: 'eval',
	entry: './src/index.js',
	output: {
		publicPath: '/public/',
		path: path.join(__dirname, 'public'),
		filename: 'bundle.js'
	},
	module: {
		loaders: [
			{ 
				test: /\.js$/, 
				exclude: /node_modules/,
				loader: 'babel-loader'
			}
		]
	}
}