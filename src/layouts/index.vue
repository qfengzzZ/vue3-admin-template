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
					<e-header-setting v-if="enableSetting" />
				</div>
			</el-header>
			<el-main class="e-layout-content" :class="contentClasses">
				<e-header-tabs v-if="showTabs" :class="tabsClasses" :style="tabsStyle" />
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
import EHeaderSetting from './header-setting'
import EHeaderTabs from './header-tabs'
import ECopyright from '@/components/copyright'
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import { useStore } from 'vuex'

const store = useStore()

const keepAlive = computed(() => store.state.page.keepAlive)
const sideFix = computed(() => store.state.layout.sideFix)

const sideClasses = computed(() => {
	return [
		`e-layout-side-theme-${sideTheme.value}`,
		{
			'e-layout-side-collapse': menuCollapse.value,
			'e-layout-side-fix': sideFix.value
		}
	]
})
const headerMenu = computed(() => store.state.layout.headerMenu)
// 折叠按钮
const showSideCollapse = computed(() => store.state.layout.showSideCollapse)
const menuCollapse = computed(() => store.state.layout.menuCollapse)

const showReload = computed(() => store.state.layout.showReload)

const showBreadcrumb = computed(() => store.state.layout.showBreadcrumb)

const showFullscreen = computed(() => store.state.layout.showFullscreen)
const enableSetting = computed(() => store.state.layout.enableSetting)

const sideTheme = computed(() => store.state.layout.sideTheme)
const tabsFix = computed(() => store.state.layout.tabsFix)
const hideSide = computed(() => store.getters['menu/isHideSide'])

// 如果开启 headerMenu，且当前 header 的 hideSide 为 true，则将顶部按 headerStick 处理
// 这时，即使没有开启 headerStick，仍然按开启处理
const headerStick = computed(() => store.state.layout.headerStick)
const isHeaderStick = computed(() => {
	let state = headerStick.value
	if (hideSide.value) state = true
	return state
})

const insideClasses = computed(() => {
	return {
		'e-layout-inside-fix-with-side': sideFix.value,
		'e-layout-inside-fix-with-side-collapse': sideFix.value && menuCollapse.value,
		'e-layout-inside-with-hide-side': isHeaderStick.value
	}
})

const headerFix = computed(() => store.state.layout.headerFix)
const headTheme = computed(() => store.state.layout.headTheme)
const headerClasses = computed(() => {
	return [
		`e-layout-header-theme-${headTheme.value}`,
		{
			'e-layout-header-dark': headTheme.value === 'dark',
			'e-layout-header-with-menu': headerMenu.value,
			'e-layout-header-fix': headerFix.value,
			'e-layout-header-fix-collapse': headerFix.value && menuCollapse.value,
			'e-layout-header-stick': isHeaderStick.value
		}
	]
})

const contentClasses = computed(() => {
	return {
		'e-layout-content-with-header-fix': headerFix.value,
		'e-layout-content-with-tabs': !headerFix.value && tabsFix.value,
		'e-layout-content-with-tabs-fix': headerFix.value && tabsFix.value
	}
})
const showTabs = computed(() => store.state.layout.showTabs)
const tabsClasses = computed(() => {
	return {
		'e-layout-content-tabs-fix': tabsFix.value
	}
})

const tabsStyle = computed(() => {
	let style = {}
	if (tabsFix.value && !headerFix.value) {
		style.top = `${64 - currentScrollTop.value}px`
	}
	const menuWidth = isHeaderStick.value ? 0 : menuCollapse.value ? 64 : 256
	if (tabsFix.value) {
		style.width = `calc(100% - ${menuWidth}px)`
		style.left = `${menuWidth}px`
	}
	return style
})

// 滚动相关参数
const currentScrollTop = ref(0)
const handleScroll = () => {
	if (tabsFix.value && !headerFix.value) {
		const scrollTop = document.body.scrollTop + document.documentElement.scrollTop
		currentScrollTop.value = scrollTop > 64 ? 64 : scrollTop
	}
}
// 监听屏幕滚动事件
onMounted(() => {
	window.addEventListener('scroll', handleScroll, { passive: true })
	handleScroll()
})

// 卸载销毁滚动事件
onBeforeUnmount(() => {
	window.removeEventListener('scroll', handleScroll)
})

const headerStyle = computed(() => {
	const menuWidth = isHeaderStick.value ? 0 : menuCollapse.value ? 64 : 256
	return headerFix.value ? { width: `calc(100% - ${menuWidth}px)` } : {}
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
