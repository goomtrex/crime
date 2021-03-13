const HtmlWebpackPlugin = require ('html-webpack-plugin')
const path = require ('path')

const __s = path.resolve (__dirname, './s')
const __t = path.resolve (__dirname, './t')

module.exports = {
	mode: 'development',
	entry: path.resolve (__s, 'index.js'),
	output: {
		path: path.resolve (__t),
		filename: 'index.etc.js',
	},
	plugins: [
		new HtmlWebpackPlugin
	],
}
