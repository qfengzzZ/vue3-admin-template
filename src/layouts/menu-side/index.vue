<template>
	<div class="e-layout-side-logo">
		<a href="/">
			<img src="@/assets/images/logo-small.png" v-if="menuCollapse" />
			<img src="@/assets/images/logo-dark.png" v-else-if="sideTheme === 'light'" />
			<img src="@/assets/images/logo-dark.png" v-else />
		</a>
	</div>
	<el-menu
		ref="menuSideRef"
		router
		class="e-layout-menu-side e-scrollbar-hide"
		:collapse="menuCollapse"
		:default-active="activePath"
		:unique-opened="menuAccordion"
		:active-text-color="sideTheme === 'dark' ? '#fff' : ''"
		:background-color="sideTheme === 'dark' ? '#191a23' : ''"
		:text-color="sideTheme === 'dark' ? 'rgba(255, 255, 255, .7)' : ''"
		:collapse-transition="false"
	>
		<e-menu-side-item v-for="item in filterSide" :menu="item" :index="item.path" :key="item.path"></e-menu-side-item>
	</el-menu>
</template>
<script>
export default {
	name: 'EMenuSide'
}
</script>

<script setup>
import EMenuSideItem from './menu-item'
import { computed } from 'vue'
import { useStore } from 'vuex'
const store = useStore()
const menuCollapse = computed(() => store.state.layout.menuCollapse)
const filterSide = computed(() => store.getters['menu/filterSide'])

const activePath = computed(() => store.state.menu.activePath)
const sideTheme = computed(() => store.state.layout.sideTheme)
const menuAccordion = computed(() => store.state.layout.menuAccordion)
</script>
