<template>
	<div class="e-layout-side-logo">
		<a href="/">
			<img src="@/assets/images/logo-small.png" v-if="menuCollapse" />
			<img src="@/assets/images/logo-dark.png" v-else-if="sideTheme === 'light'" />
			<img src="@/assets/images/logo-dark.png" v-else />
		</a>
	</div>
	<el-menu
		ref="menu"
		router
		class="e-layout-menu-side e-scrollbar-hide"
		:collapse="menuCollapse"
		:default-active="activePath"
		:unique-opened="menuAccordion"
		active-text-color="#fff"
		:background-color="sideTheme === 'dark' ? '#191a23' : '#fff'"
		:text-color="sideTheme === 'dark' ? 'rgba(255, 255, 255, .7)' : '#191a23'"
		:collapse-transition="false"
	>
		<e-menu-side-item v-for="item in side" :menu="item" :key="item.path"></e-menu-side-item>
	</el-menu>
</template>
<script>
export default {
	name: 'EMenuSide'
}
</script>

<script setup>
import EMenuSideItem from './menu-item'
import { computed, watchEffect } from 'vue'
import { useStore } from 'vuex'
import { useRoute } from 'vue-router'
import side from '@/menu/side'
const store = useStore()
const route = useRoute()
const menuCollapse = computed(() => store.state.layout.menuCollapse)
// const filterSide = computed(() => store.getters['menu/filterSide'])
watchEffect(() => {
	store.commit('menu/setActivePath', route.path)
})

const activePath = computed(() => store.state.menu.activePath)
const sideTheme = computed(() => store.state.layout.sideTheme)
const menuAccordion = computed(() => store.state.layout.menuAccordion)
</script>
