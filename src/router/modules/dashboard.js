import BasicLayout from '@/layouts'

const pre = 'dashboard-'

export default {
	path: '/dashboard',
	name: 'dashboard',
	redirect: {
		name: `${pre}console`
	},
	component: BasicLayout,
	children: [
		{
			path: 'console',
			name: `${pre}console`,
			meta: {
				title: '主控台',
				affix: true
			},
			component: () => import('@/pages/dashboard/console')
		},
		{
			path: 'monitor',
			name: `${pre}monitor`,
			meta: {
				title: '监控台'
			},
			component: () => import('@/pages/dashboard/monitor')
		},
		{
			path: 'workspace',
			name: `${pre}workspace`,
			meta: {
				title: '工作台'
			},
			component: () => import('@/pages/dashboard/workspace')
		}
	]
}
