<template>
	<el-menu
		class="e-layout-menu-head"
		ref="menuHeadRef"
		mode="horizontal"
		:default-active="headerName"
		:active-text-color="headTheme === 'dark' ? '#fff' : ''"
		:background-color="headTheme === 'dark' ? '#191a23' : ''"
		:text-color="headTheme === 'dark' ? 'rgba(255, 255, 255, .7)' : ''"
	>
		<e-menu-side-item v-for="item in filterHead" :menu="item" :index="item.name" :key="item.path" @click="handleItemClick(item)"></e-menu-side-item>
	</el-menu>
</template>
<script>
export default {
	name: 'EMenuHead'
}
</script>
<script setup>
import EMenuSideItem from '../menu-side/menu-item'
import { computed, watch } from 'vue'
import { useStore } from 'vuex'
import { useRoute, useRouter } from 'vue-router'
import { getHeaderNameByPath, getMenuSideByName } from '@/utils'
import menuSider from '@/menu/sider'
import menuHeader from '@/menu/header'
import Setting from '@/setting'
const store = useStore()
const filterHead = computed(() => store.getters['menu/filterHead'])
const headerName = computed(() => store.state.menu.headerName)
const headTheme = computed(() => store.state.layout.headTheme)

const route = useRoute()

watch(
	() => route,
	(to, from) => {
		if (!Setting.asyncSideMenu) {
			store.commit('menu/setMenuHead', menuHeader)
			let path = to.matched[to.matched.length - 1].path
			let headerName = getHeaderNameByPath(path, menuSider)
			if (headerName === null) {
				path = to.path
				headerName = getHeaderNameByPath(path, menuSider)
			}
			// 404 相关页面是不会有headerName的
			if (headerName !== null) {
				store.commit('menu/setHeaderName', headerName)
				store.commit('menu/setMenuSideAll', menuSider)
				const filterMenuSide = getMenuSideByName(menuSider, headerName)
				store.commit('menu/setMenuSide', filterMenuSide)
				store.commit('menu/setActivePath', to.path)
			}
		}
	},
	{
		immediate: true,
		deep: true
	}
)

const router = useRouter()
const handleItemClick = item => {
	router.push({
		path: item.path
	})
}
</script>
