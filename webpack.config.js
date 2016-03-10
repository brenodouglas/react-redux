const path = require('path');

module.exports = {
	context: path.resolve(__dirname),
	entry: {app: ['./src/app.js']},
	output: {
		path: path.resolve(__dirname, 'build'),
		filename: 'bundle.js',
		chunkFilename: 'bundle.js',
		publicPath: '/',
	},
	module: {
		loaders: [
			{ 
				test: /\.js$/, 
				exclude: /node_modules/, 
				loaders: ['babel']
	        },
  			{ 
				test: /\.json$/, 
				loader: 'json-loader' 
			}
		]
	},
	resolve: {
		modulesDirectories: [ 'src', 'node_modules' ],
		extensions: ['', '.js', 'jsx']
	}
};