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
		}
	]
}
