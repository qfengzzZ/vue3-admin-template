import BasicLayout from '@/layouts'

const meta = {
	auth: true
}

const pre = 'dashboard-'

export default {
	path: '/dashboard',
	name: 'dashboard',
	redirect: {
		name: `${pre}index`
	},
	meta: {
		...meta,
		title: 'dashboard'
	},
	component: BasicLayout,
	children: [
		{
			path: '',
			name: `${pre}index`,
			meta: {
				...meta
			},
			component: () => import(/* dashboard */ '@/pages/dashboard')
		}
	]
}
