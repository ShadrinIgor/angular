var path = require('path');
var merge = require('webpack-merge');

module.exports = {
	context: __dirname + '/js',
	entry: './app.js',
	output: {
		path: __dirname + '/public',
		filename: './bundle.js'
	},
	module: {
		loaders: [
			{test: /\.js$/, loader: 'babel'}
		]
	}
};
