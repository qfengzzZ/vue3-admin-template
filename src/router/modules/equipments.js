import BasicLayout from '@/layouts'

const meta = {
	auth: true
}

const pre = 'equipments-'

export default {
	path: '/equipments',
	name: 'equipments',
	redirect: {
		name: `${pre}index`
	},
	meta: {
		...meta,
		title: 'Dashboard'
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
