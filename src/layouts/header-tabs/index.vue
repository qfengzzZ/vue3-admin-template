<template>
	<div class="e-layout-content-tabs">
		<div ref="scrollableRef" class="e-layout-content-tabs-wrap" :class="{ 'e-layout-content-tabs-wrap-fill': scrollable }">
			<span class="tabs-button tabs-button__prev" :class="{ 'tabs-button-hidden': !scrollable }">
				<SvgIcon icon="arrow-left" />
			</span>
			<span class="tabs-button tabs-button__next" :class="{ 'tabs-button-hidden': !scrollable }">
				<SvgIcon icon="arrow-right" />
			</span>
			<Draggable :list="tabsList" animation="300" item-key="path" class="tabs-wrap-scroll">
				<template #item="{ element }">
					<div class="tabs-wrap-scroll-item" :class="{ 'tabs-wrap-scroll-item__active': activePath === element.path }" @click.stop="handleClickItem(element)">
						<span class="title">{{ element.meta.title }}</span>
						<SvgIcon icon="close" @click.stop="handleCloseItem(element)" v-if="!element.meta.affix" />
					</div>
				</template>
			</Draggable>
		</div>
		<div class="tabs-button__close">
			<el-dropdown @command="handleClickCommand">
				<span class="el-dropdown-name"><SvgIcon icon="arrow-down" /></span>
				<template #dropdown>
					<el-dropdown-menu>
						<el-dropdown-item v-for="item in actionList" :command="item.command" :key="item.command" :disabled="item.isDisabled" :icon="item.icon">{{ item.label }}</el-dropdown-item>
					</el-dropdown-menu>
				</template>
			</el-dropdown>
		</div>
	</div>
</template>
<script>
export default {
	name: 'EHeaderTabs'
}
</script>
<script setup>
import Draggable from 'vuedraggable'
import { computed, ref, nextTick, onMounted, unref, watch } from 'vue'
import { useStore } from 'vuex'
import { useRouter, useRoute } from 'vue-router'
const store = useStore()
const router = useRouter()
const route = useRoute()

onMounted(() => {
	updateScrollable()
})

watch(
	() => route.path,
	() => store.commit('page/addTabsList', route.path),
	{
		immediate: true
	}
)

const scrollableRef = ref(null)
const scrollable = ref(false)
const updateScrollable = () => {
	nextTick(() => {
		if (!scrollableRef.value) return
		let scrollWidth = scrollableRef.value.scrollWidth
		let offsetWidth = scrollableRef.value.offsetWidth
		if (scrollWidth > offsetWidth) {
			scrollable.value = true
		} else {
			scrollable.value = false
		}
	})
}

const tabsList = computed(() => store.state.page.tabsList)
const activePath = computed(() => store.state.menu.activePath)

const handleClickItem = item => {
	router.push({
		path: item.path
	})
}

const handleCloseItem = element => {
	if (activePath.value === element.path) {
		const $index = tabsList.value.findIndex(item => item.path === element.path)
		store.commit('page/removeTabsItem', element)
		router.push({
			path: tabsList.value[$index - 1].path
		})
	}
	store.commit('page/removeTabsItem', element)
}

const actionList = computed(() => {
	const isDisabled = unref(tabsList).length <= 1
	return [
		{
			label: '刷新当前',
			command: 1,
			isDisabled: false,
			icon: <SvgIcon icon="refresh" />
		},
		{
			label: `关闭当前`,
			command: 2,
			isDisabled: isDisabled,
			icon: <SvgIcon icon="close" />
		},
		{
			label: '关闭其他',
			command: 3,
			isDisabled: isDisabled,
			icon: <SvgIcon icon="delete-column" />
		},
		{
			label: '关闭全部',
			command: 4,
			isDisabled: isDisabled,
			icon: <SvgIcon icon="subtract" />
		}
	]
})
const handleClickCommand = val => {
	switch (val) {
		case 1:
			handleReload()
			break
		case 2:
			handleCloseItem(route)
			break
		case 3:
			break
		case 4:
			break
	}
}

const handleReload = () => {
	router.go(0)
}
</script>
