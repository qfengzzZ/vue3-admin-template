import request from '@/plugins/request'

export function getDashboardListApi(data) {
	return request({
		url: '/api/dashboard',
		method: 'post',
		data
	})
}
