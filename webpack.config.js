const path = require('path');
const webpack = require('webpack');

module.exports = function(env) {
	return {
		entry: './admin-src/index.js',
		mode: env === 'prod'? 'production' : 'development',
		module: {
			rules: [
				{
					test: /\.(js|jsx)$/,
					exclude: /node_modules/,
					loader: 'babel-loader',
					options: {
						presets: [
							'@babel/env'
						]
					}
				}, {
					test: /\.css$/,
					use: ['style-loader', 'css-loader']
				}
			]
		},
		resolve: {
			extensions: [
				'.js', '.jsx'
			]
		},
		output: {
			path: path.resolve(__dirname, 'public/'),
			publicPath: '/public/',
			filename: 'arya.js'
		},
		devServer: {
			contentBase: path.join(__dirname, 'public/'),
			port: 9000,
			publicPath: 'http://localhost:9000/public/',
			hotOnly: true
		},
		plugins: [new webpack.HotModuleReplacementPlugin()]
	};
};
