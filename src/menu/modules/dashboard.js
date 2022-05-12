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
		}
	]
}
