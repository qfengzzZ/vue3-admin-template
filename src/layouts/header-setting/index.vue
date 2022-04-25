<template>
	<span class="e-layout-header-trigger e-layout-header-trigger-min" @click="handleClick">
		<SvgIcon icon="settings" />
		<el-drawer v-model="visible" :with-header="false" :size="300">
			<el-divider>主题风格设置</el-divider>
			<div class="e-layout-header-setting-item">
				<div class="e-layout-header-setting-item-radio" :class="{ on: sideTheme === 'dark' }" @click="handleChangeSetting('sideTheme', 'dark')">
					<el-tooltip content="暗色侧边栏" placement="top">
						<img src="@/assets/svg/nav-theme-dark.svg" />
					</el-tooltip>
				</div>
				<div class="e-layout-header-setting-item-radio" :class="{ on: sideTheme === 'light' }" @click="handleChangeSetting('sideTheme', 'light')">
					<el-tooltip content="亮色侧边栏" placement="top">
						<img src="@/assets/svg/nav-theme-light.svg" />
					</el-tooltip>
				</div>
			</div>
			<div class="e-layout-header-setting-item">
				<div class="e-layout-header-setting-item-radio" :class="{ on: headTheme === 'light' }" @click="handleChangeSetting('headTheme', 'light')">
					<el-tooltip content="亮色顶栏" placement="top">
						<img src="@/assets/svg/nav-theme-dark.svg" />
					</el-tooltip>
				</div>
				<div class="e-layout-header-setting-item-radio" :class="{ on: headTheme === 'dark' }" @click="handleChangeSetting('headTheme', 'dark')">
					<el-tooltip content="暗色顶栏" placement="top">
						<img src="@/assets/svg/header-theme-dark.svg" />
					</el-tooltip>
				</div>
				<!--				<div class="e-layout-header-setting-item-radio" :class="{ on: headerTheme === 'primary' }" @click="handleChangeSetting('headerTheme', 'primary')">-->
				<!--					<el-tooltip content="主色顶栏" placement="top">-->
				<!--						<img src="@/assets/svg/header-theme-primary.svg" />-->
				<!--					</el-tooltip>-->
				<!--				</div>-->
			</div>
			<el-divider>导航设置</el-divider>
			<div class="e-layout-header-setting-item">
				<span class="e-layout-header-setting-item-label">显示顶栏菜单</span>
				<span class="e-layout-header-setting-item-value">
					<el-switch size="small" :value="headerMenu" @change="val => handleChangeSetting('headerMenu', val)" />
				</span>
			</div>
			<div class="e-layout-header-setting-item">
				<span class="e-layout-header-setting-item-label">固定侧边栏</span>
				<span class="e-layout-header-setting-item-value">
					<el-switch size="small" :value="sideFix" @change="val => handleChangeSetting('sideFix', val)" />
				</span>
			</div>
			<div class="e-layout-header-setting-item">
				<span class="e-layout-header-setting-item-label">固定顶栏</span>
				<span class="e-layout-header-setting-item-value">
					<el-switch size="small" :value="headerFix" @change="val => handleChangeSetting('headerFix', val)" />
				</span>
			</div>
			<div class="e-layout-header-setting-item">
				<span class="e-layout-header-setting-item-label">
					置顶顶栏
					<el-tooltip placement="top" content="需开启固定顶栏">
						<SvgIcon icon="information" />
					</el-tooltip>
				</span>
				<span class="e-layout-header-setting-item-value">
					<el-switch size="small" :value="headerStick" :disabled="!headerFix" @change="val => handleChangeSetting('headerStick', val)" />
				</span>
			</div>
			<div class="e-layout-header-setting-item">
				<span class="e-layout-header-setting-item-label">侧边栏开启手风琴模式</span>
				<span class="e-layout-header-setting-item-value">
					<el-switch size="small" :value="menuAccordion" @change="val => handleChangeSetting('menuAccordion', val)" />
				</span>
			</div>
			<div class="e-layout-header-setting-item">
				<span class="e-layout-header-setting-item-label">显示折叠侧边栏按钮</span>
				<span class="e-layout-header-setting-item-value">
					<el-switch size="small" :value="showSideCollapse" @change="val => handleChangeSetting('showSideCollapse', val)" />
				</span>
			</div>
			<div class="e-layout-header-setting-item">
				<span class="e-layout-header-setting-item-label">
					显示全局面包屑导航
					<el-tooltip placement="top" content="headerMenu 开启时无效">
						<SvgIcon icon="information" />
					</el-tooltip>
				</span>
				<span class="e-layout-header-setting-item-value">
					<el-switch size="small" :value="showBreadcrumb" @change="val => handleChangeSetting('showBreadcrumb', val)" />
				</span>
			</div>
			<div class="e-layout-header-setting-item">
				<span class="e-layout-header-setting-item-label">显示重载页面按钮</span>
				<span class="e-layout-header-setting-item-value">
					<el-switch size="small" :value="showReload" @change="val => handleChangeSetting('showReload', val)" />
				</span>
			</div>
			<el-divider>其它设置</el-divider>
			<div class="e-layout-header-setting-item">
				<span class="e-layout-header-setting-item-label">开启多页签</span>
				<span class="e-layout-header-setting-item-value">
					<el-switch size="small" :value="showTabs" @change="val => handleChangeSetting('showTabs', val)" />
				</span>
			</div>
			<div class="e-layout-header-setting-item" :class="{ 'e-layout-header-setting-item-disabled': !showTabs }">
				<span class="e-layout-header-setting-item-label">
					固定多页签
					<el-tooltip placement="top" content="需开启多页签">
						<SvgIcon icon="information" />
					</el-tooltip>
				</span>
				<span class="e-layout-header-setting-item-value">
					<el-switch size="small" :value="tabsFix" :disabled="!showTabs" @change="val => handleChangeSetting('tabsFix', val)" />
				</span>
			</div>
			<el-alert type="warning" :closable="false">
				<template #default> 该功能主要实时预览各种布局效果，更多完整配置在 <strong>setting.js</strong> 中设置。建议在生产环境关闭该布局预览功能。 </template>
			</el-alert>
		</el-drawer>
	</span>
</template>
<script>
export default {
	name: 'ESetting'
}
</script>
<script setup>
import { computed, ref } from 'vue'
import { useStore } from 'vuex'
const visible = ref(false)
const handleClick = () => {
	visible.value = true
}
const store = useStore()
const sideTheme = computed(() => store.state.layout.sideTheme)
const headTheme = computed(() => store.state.layout.headTheme)
const headerMenu = computed(() => store.state.layout.headerMenu)
const sideFix = computed(() => store.state.layout.sideFix)
const headerFix = computed(() => store.state.layout.headerFix)
const headerStick = computed(() => store.state.layout.headerStick)

const menuAccordion = computed(() => store.state.layout.menuAccordion)
const showSideCollapse = computed(() => store.state.layout.showSideCollapse)
const showBreadcrumb = computed(() => store.state.layout.showBreadcrumb)
const showReload = computed(() => store.state.layout.showReload)

const showTabs = computed(() => store.state.layout.showTabs)
const tabsFix = computed(() => store.state.layout.tabsFix)
const handleChangeSetting = (key, value) => {
	store.commit('layout/updateLayoutSetting', { key, value })
}
</script>
