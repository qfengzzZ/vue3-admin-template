const pre = '/system/'

export default {
	path: '/system',
	title: '系统管理',
	header: 'home',
	icon: 'settings',
	children: [
		{
			path: `${pre}user`,
			title: '用户管理',
			children: [
				{
					path: `${pre}user/one`,
					title: '用户管理1-1'
				},
				{
					path: `${pre}user/two`,
					title: '用户管理1-2'
				}
			]
		},
		{
			path: `${pre}role`,
			title: '角色管理'
		}
	]
}
