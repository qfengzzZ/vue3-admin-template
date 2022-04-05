<template>
	<el-container class="e-layout">
		<el-aside class="e-layout-side e-layout-side-fix" :class="{ 'e-layout-side-fix-dark': sideTheme === 'dark' }" :width="menuCollapse ? '64px' : '256px'">
			<e-menu-side></e-menu-side>
		</el-aside>
		<el-container class="e-layout-inside" :class="insideClasses">
			<el-header class="e-layout-header" :class="headerClasses" :style="headerStyle" height="64px">
				<e-header-collapse />
				<e-header-breadcrumb />
				<div class="e-layout-header-right">
					<e-header-user />
				</div>
			</el-header>
			<el-main class="e-layout-content e-layout-content-fix-with-header">
				<div class="e-layout-content-main">
					<router-view v-slot="{ Component, route }">
						<transition name="fade-top">
							<keep-alive v-if="keepAlive" :include="keepAlive">
								<component :is="Component" :key="route.path"></component>
							</keep-alive>
							<component v-else :is="Component" :key="route.path"></component>
						</transition>
					</router-view>
				</div>
			</el-main>
			<el-footer>
				<e-copyright />
			</el-footer>
		</el-container>
	</el-container>
</template>
<script>
export default {
	name: 'BasicLayout'
}
</script>
<script setup>
import EMenuSide from './menu-side'
import EHeaderCollapse from './header-collapse'
import EHeaderBreadcrumb from './header-breadcrumb'
import EHeaderUser from './header-user'
import ECopyright from '@/components/Copyright'
import { computed, reactive } from 'vue'
import { useStore } from 'vuex'

const store = useStore()

const state = reactive({
	headerFix: true,
	sideFix: true
})
const keepAlive = computed(() => store.state.page.keepAlive)
const menuCollapse = computed(() => store.state.layout.menuCollapse)
const sideTheme = computed(() => store.state.layout.sideTheme)

const insideClasses = computed(() => {
	return {
		'e-layout-inside-fix-with-side': state.sideFix,
		'e-layout-inside-fix-with-side-collapse': state.sideFix && menuCollapse.value
	}
})

const headerClasses = computed(() => {
	return {
		'e-layout-header-fix': state.headerFix,
		'e-layout-header-fix-collapse': state.headerFix && menuCollapse.value
	}
})

const headerStyle = computed(() => {
	const menuWidth = menuCollapse.value ? 64 : 256
	return { width: `calc(100% - ${menuWidth}px)` }
})
</script>
<style lang="scss" scoped>
.fade-top-enter-active {
	transition: all 0.5s;
}
.fade-top-leave-active {
	transition: all 0.5s;
}
.fade-top-enter-from {
	opacity: 0;
	transform: translateY(-35px);
}
.fade-top-leave-to {
	opacity: 0;
	transform: translateY(35px);
	display: none;
}
</style>
