import BasicLayout from '@/layouts'

const pre = 'table-'

export default {
	path: '/table',
	name: 'table',
	redirect: {
		name: `${pre}index`
	},
	meta: {
		title: 'table'
	},
	component: BasicLayout,
	children: [
		{
			path: 'user',
			name: `${pre}index`,
			component: () => import('@/pages/table')
		},
		{
			path: 'role',
			name: `${pre}role`,
			component: () => import('@/pages/table/table-two')
		}
	]
}
