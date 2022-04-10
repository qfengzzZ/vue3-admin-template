import BasicLayout from '@/layouts'

const meta = {
	auth: true
}

const pre = 'table-'

export default {
	path: '/table',
	name: 'table',
	redirect: {
		name: `${pre}index`
	},
	meta: {
		...meta,
		title: '表格'
	},
	component: BasicLayout,
	children: [
		{
			path: '',
			name: `${pre}index`,
			meta: {
				...meta
			},
			component: () => import(/* dashboard */ '@/pages/table')
		}
	]
}
