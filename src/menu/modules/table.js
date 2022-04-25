const pre = '/table/'

// const meta = {
// 	activedPath: '/dashboard'
// }

export default {
	path: `/table`,
	title: '表格',
	header: 'home',
	icon: 'table',
	children: [
		{
			path: `${pre}one`,
			title: '表格1-1'
		},
		{
			path: `${pre}two`,
			title: '表格1-2'
		}
	]
}
