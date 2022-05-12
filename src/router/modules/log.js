import BasicLayout from '@/layouts'

const pre = 'log-'

export default {
	path: '/log',
	name: 'table',
	redirect: {
		name: `${pre}index`
	},
	meta: {
		title: 'log'
	},
	component: BasicLayout,
	children: [
		{
			path: '',
			name: `${pre}index`,
			component: () => import('@/pages/log')
		}
	]
}
