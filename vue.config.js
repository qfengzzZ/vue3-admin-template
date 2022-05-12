// 拼接路径
const resolve = dir => require('path').join(__dirname, dir)

// 增加环境变量
process.env.VUE_APP_VERSION = require('./package.json').version
process.env.VUE_APP_BUILD_TIME = require('dayjs')().format('YYYY-MM-DD HH:mm:ss')

module.exports = {
	outputDir: 'dist',
	publicPath: '/',
	lintOnSave: true,
	// assetsDir: '',
	runtimeCompiler: true,
	productionSourceMap: process.env.VUE_APP_ENV === 'development', // 该配置项用于设置是否为生产环境构建生成 source map，一般在生产环境下为了快速定位错误信息,开发环境或者测试环境为true,线上为false
	devServer: {
		// proxy: {
		// 	'/api': {
		// 		target: '',
		// 		// 路径重写
		// 		pathRewrite: {
		// 			'^/api': ''
		// 		},
		// 		changeOrigin: true
		// 	}
		// }
	},
	// 默认设置: https://github.com/vuejs/vue-cli/tree/dev/packages/@vue/cli-service/lib/config/base.js
	chainWebpack: config => {
		/**
		 * 删除懒加载模块的 prefetch preload，降低带宽压力
		 */
		config.plugins.delete('prefetch').delete('preload')
		config.resolve.symlinks(true)
		config
			// 开发环境
			.when(
				process.env.NODE_ENV === 'development',
				// sourcemap不包含列信息
				config => config.devtool('cheap-source-map')
			)
		// image exclude
		const imagesRule = config.module.rule('images')
		imagesRule
			.test(/\.(png|jpe?g|gif|webp|svg)(\?.*)?$/)
			.exclude.add(resolve('src/assets/svg'))
			.end()
		// 重新设置 alias
		config.resolve.alias.set('@', resolve('src')).set('@api', resolve('src/api')).set('@libs', resolve('src/libs'))
		// node
		config.node.set('__dirname', true).set('__filename', true)
	}
}
