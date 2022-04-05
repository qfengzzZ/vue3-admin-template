import BasicLayout from '@/layouts'

const meta = {
	auth: true
}

const pre = 'system-'

export default {
	path: '/system',
	name: 'system',
	redirect: {
		name: `${pre}index`
	},
	meta: {
		...meta,
		title: 'system'
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
