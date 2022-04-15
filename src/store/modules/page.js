import { frameIn } from '@/router/routes'
const meta = {
	auth: true
}

const pre = 'dashboard-'
export default {
	namespaced: true,
	state: {
		keepAlive: [],
		tabsList: [
			{
				path: '/dashboard',
				name: 'dashboard',
				redirect: {
					name: `${pre}index`
				},
				meta: {
					...meta,
					title: '主控台',
					affix: true
				},
				children: [
					{
						path: '',
						name: `${pre}index`,
						meta: {
							...meta
						}
					}
				]
			},
			{
				path: '/dashboard',
				name: 'dashboard',
				redirect: {
					name: `${pre}index`
				},
				meta: {
					...meta,
					title: '表格',
					affix: true
				},
				children: [
					{
						path: '',
						name: `${pre}index`,
						meta: {
							...meta
						}
					}
				]
			},
			{
				path: '/dashboard',
				name: 'dashboard',
				redirect: {
					name: `${pre}index`
				},
				meta: {
					...meta,
					title: '主控台',
					affix: true
				},
				children: [
					{
						path: '',
						name: `${pre}index`,
						meta: {
							...meta
						}
					}
				]
			},
			{
				path: '/dashboard',
				name: 'dashboard',
				redirect: {
					name: `${pre}index`
				},
				meta: {
					...meta,
					title: '设置',
					affix: true
				},
				children: [
					{
						path: '',
						name: `${pre}index`,
						meta: {
							...meta
						}
					}
				]
			},
			{
				path: '/dashboard',
				name: 'dashboard',
				redirect: {
					name: `${pre}index`
				},
				meta: {
					...meta,
					title: '表单',
					affix: true
				},
				children: [
					{
						path: '',
						name: `${pre}index`,
						meta: {
							...meta
						}
					}
				]
			},
			{
				path: '/dashboard',
				name: 'dashboard',
				redirect: {
					name: `${pre}index`
				},
				meta: {
					...meta,
					title: '编辑',
					affix: true
				},
				children: [
					{
						path: '',
						name: `${pre}index`,
						meta: {
							...meta
						}
					}
				]
			},
			{
				path: '/dashboard',
				name: 'dashboard',
				redirect: {
					name: `${pre}index`
				},
				meta: {
					...meta,
					title: '图表',
					affix: true
				},
				children: [
					{
						path: '',
						name: `${pre}index`,
						meta: {
							...meta
						}
					}
				]
			},
			{
				path: '/dashboard',
				name: 'dashboard',
				redirect: {
					name: `${pre}index`
				},
				meta: {
					...meta,
					title: '工作台',
					affix: true
				},
				children: [
					{
						path: '',
						name: `${pre}index`,
						meta: {
							...meta
						}
					}
				]
			},
			{
				path: '/dashboard',
				name: 'dashboard',
				redirect: {
					name: `${pre}index`
				},
				meta: {
					...meta,
					title: '菜单',
					affix: true
				},
				children: [
					{
						path: '',
						name: `${pre}index`,
						meta: {
							...meta
						}
					}
				]
			},
			{
				path: '/dashboard',
				name: 'dashboard',
				redirect: {
					name: `${pre}index`
				},
				meta: {
					...meta,
					title: '主控台',
					affix: true
				},
				children: [
					{
						path: '',
						name: `${pre}index`,
						meta: {
							...meta
						}
					}
				]
			},
			{
				path: '/dashboard',
				name: 'dashboard',
				redirect: {
					name: `${pre}index`
				},
				meta: {
					...meta,
					title: '主控台',
					affix: true
				},
				children: [
					{
						path: '',
						name: `${pre}index`,
						meta: {
							...meta
						}
					}
				]
			},
			{
				path: '/dashboard',
				name: 'dashboard',
				redirect: {
					name: `${pre}index`
				},
				meta: {
					...meta,
					title: '主控台',
					affix: true
				},
				children: [
					{
						path: '',
						name: `${pre}index`,
						meta: {
							...meta
						}
					}
				]
			},
			{
				path: '/dashboard',
				name: 'dashboard',
				redirect: {
					name: `${pre}index`
				},
				meta: {
					...meta,
					title: '主控台',
					affix: true
				},
				children: [
					{
						path: '',
						name: `${pre}index`,
						meta: {
							...meta
						}
					}
				]
			},
			{
				path: '/dashboard',
				name: 'dashboard',
				redirect: {
					name: `${pre}index`
				},
				meta: {
					...meta,
					title: '主控台',
					affix: true
				},
				children: [
					{
						path: '',
						name: `${pre}index`,
						meta: {
							...meta
						}
					}
				]
			},
			{
				path: '/dashboard',
				name: 'dashboard',
				redirect: {
					name: `${pre}index`
				},
				meta: {
					...meta,
					title: '主控台',
					affix: true
				},
				children: [
					{
						path: '',
						name: `${pre}index`,
						meta: {
							...meta
						}
					}
				]
			},
			
		]
	},
	mutations: {
		setKeepAlive(state, keepAlive) {
			state.keepAlive = keepAlive
		},
		addTabsList(state, route) {
			const $index = frameIn.findIndex(item => item.path === route)
			if ($index > 0) {
				let isExist = state.tabsList.some(item => item.path === frameIn[$index].path)
				if (!isExist) {
					state.tabsList.push(frameIn[$index])
				}
			}
		},
		removeTabsItem(state, route) {
			const $index = state.tabsList.findIndex(item => item.path === route.path)
			if ($index > -1) {
				state.tabsList.splice($index, 1)
			}
		}
	}
}
