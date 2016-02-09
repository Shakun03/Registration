var config = {
	entry: "./app/components/Registration.js",
	output: {
		filename: "./public/bundle.js"
	},
	module: {
		loaders: [
		{
			test: /\.jsx?$/,
			exclude: /(node_modules|bower_components)/,
			loader: ['babel'],
			query: {
				presets: ['react','es2015','stage-1'],
			plugins: ['transform-es2015-arrow-functions','transform-class-properties']
			}
		}
		]
	}
}
module.exports = config;
