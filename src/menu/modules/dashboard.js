const pre = '/dashboard/'
export default {
	path: `/dashboard`,
	title: 'Dashboard',
	header: 'home',
	icon: 'dashboard',
	children: [
		{
			path: `${pre}console`,
			title: '主控台'
		},
		{
			path: `${pre}monitor`,
			title: '监控页'
		},
		{
			path: `${pre}workplace`,
			title: '工作台'
		}
	]
}
