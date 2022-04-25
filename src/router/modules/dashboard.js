import BasicLayout from '@/layouts'

const pre = 'dashboard-'

export default {
	path: '/dashboard',
	name: 'dashboard',
	redirect: {
		name: `${pre}index`
	},
	meta: {
		title: '主控台',
		affix: true
	},
	component: BasicLayout,
	children: [
		{
			path: '',
			name: `${pre}index`,
			component: () => import(/* dashboard */ '@/pages/dashboard')
		}
	]
}
