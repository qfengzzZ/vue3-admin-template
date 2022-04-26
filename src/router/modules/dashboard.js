import BasicLayout from '@/layouts'

const pre = 'dashboard-'

export default {
	path: '/dashboard',
	name: 'dashboard',
	redirect: {
		name: `${pre}console`
	},
	meta: {
		title: '主控台',
		affix: true
	},
	component: BasicLayout,
	children: [
		{
			path: 'console',
			name: `${pre}console`,
			component: () => import(/* dashboard */ '@/pages/dashboard/console')
		},
		{
			path: 'monitor',
			name: `${pre}monitor`,
			component: () => import(/* dashboard */ '@/pages/dashboard/monitor')
		},
		{
			path: 'workspace',
			name: `${pre}workspace`,
			component: () => import(/* dashboard */ '@/pages/dashboard/workspace')
		}
	]
}
