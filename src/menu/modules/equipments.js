// const pre = '/dashboard/'

// const meta = {
// 	activedPath: '/dashboard'
// }

export default {
	path: `/space`,
	title: '空间管理',
	icon: 'edit-history',
	children: [
		{
			path: `/space/list`,
			title: '空间列表'
		},
		{
			path: `/space/setting`,
			title: '设备空间'
		}
	]
}
