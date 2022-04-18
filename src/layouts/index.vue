<template>
	<el-container class="e-layout">
		<el-aside v-if="!hideSide" class="e-layout-side" :class="sideClasses" :width="menuCollapse ? '64px' : '256px'">
			<e-menu-side></e-menu-side>
		</el-aside>
		<el-container class="e-layout-inside" :class="insideClasses">
			<el-header class="e-layout-header" :class="headerClasses" :style="headerStyle" height="64px">
				<e-header-logo v-if="isHeaderStick && headerFix" />
				<e-header-collapse v-if="showSideCollapse && !hideSide" />
				<e-header-refresh v-if="showReload && !hideSide" />
				<e-header-breadcrumb v-if="showBreadcrumb && !headerMenu" />
				<e-menu-head v-if="headerMenu" />
				<div class="e-layout-header-right">
					<e-header-fullscreen v-if="showFullscreen" />
					<e-header-user />
				</div>
			</el-header>
			<el-main class="e-layout-content e-layout-content-fix-with-header" :class="contentClasses">
				<e-header-tabs />
				<div class="e-layout-content-main">
					<router-view v-slot="{ Component, route }">
						<transition name="fade-top">
							<keep-alive v-if="keepAlive" :include="keepAlive">
								<component :is="Component" :key="route.fullPath"></component>
							</keep-alive>
							<component v-else :is="Component" :key="route.fullPath"></component>
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
import EHeaderLogo from './header-logo'
import EMenuHead from './menu-head'
import EHeaderCollapse from './header-collapse'
import EHeaderRefresh from './header-refresh'
import EHeaderBreadcrumb from './header-breadcrumb'
import EHeaderFullscreen from './header-fullscreen'
import EHeaderUser from './header-user'
import EHeaderTabs from './header-tabs'
import ECopyright from '@/components/copyright'
import { computed } from 'vue'
import { useStore } from 'vuex'

const store = useStore()

const keepAlive = computed(() => store.state.page.keepAlive)
const sideFix = computed(() => store.state.layout.sideFix)

const sideClasses = computed(() => {
	return {
		'e-layout-side-dark': sideTheme.value === 'dark',
		'e-layout-side-collapse': menuCollapse.value,
		'e-layout-side-fix': sideFix.value
	}
})
const headerMenu = computed(() => store.state.layout.headerMenu)
// 折叠按钮
const showSideCollapse = computed(() => store.state.layout.showSideCollapse)
const menuCollapse = computed(() => store.state.layout.menuCollapse)

const showReload = computed(() => store.state.layout.showReload)

const showBreadcrumb = computed(() => store.state.layout.showBreadcrumb)

const showFullscreen = computed(() => store.state.layout.showFullscreen)

const sideTheme = computed(() => store.state.layout.sideTheme)
const tabsFix = computed(() => store.state.layout.tabsFix)
const hideSide = computed(() => store.state.layout.hideSide)

const insideClasses = computed(() => {
	return {
		'e-layout-inside-fix-with-side': sideFix.value,
		'e-layout-inside-fix-with-side-collapse': sideFix.value && menuCollapse.value,
		'e-layout-inside-with-hide-side': isHeaderStick.value
	}
})

const headerFix = computed(() => store.state.layout.headerFix)

const headerClasses = computed(() => {
	return {
		'e-layout-header-fix': headerFix.value,
		'e-layout-header-fix-collapse': headerFix.value && menuCollapse.value,
		'e-layout-header-stick': isHeaderStick.value
	}
})

const contentClasses = computed(() => {
	return {
		'e-layout-content-fix-with-tabs': tabsFix.value
	}
})

const headerStyle = computed(() => {
	const menuWidth = isHeaderStick.value ? 0 : menuCollapse.value ? 64 : 256
	return headerFix.value ? { width: `calc(100% - ${menuWidth}px)` } : {}
})

// 如果开启 headerMenu，且当前 header 的 hideSide 为 true，则将顶部按 headerStick 处理
// 这时，即使没有开启 headerStick，仍然按开启处理
const headerStick = computed(() => store.state.layout.headerStick)
const isHeaderStick = computed(() => {
	let state = headerStick.value
	if (hideSide.value) state = true
	return state
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
