import BasicLayout from '@/layouts'

const pre = 'system-'

export default {
	path: '/system',
	name: 'system',
	redirect: {
		name: `${pre}index`
	},
	meta: {
		title: 'system'
	},
	component: BasicLayout,
	children: [
		{
			path: 'user',
			name: `${pre}index`,
			component: () => import('@/pages/system/error/403')
		},
		{
			path: 'role',
			name: `${pre}role`,
			component: () => import('@/pages/system/error/404')
		}
	]
}
