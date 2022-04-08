<template>
	<div
		class="e-layout-content-tabs"
		:class="{
			'e-layout-content-tabs-fix': tabsFixed
		}"
	>
		<div class="e-layout-content-tabs-wrap" :class="{ 'e-layout-content-tabs-wrap-fill': scrollable }">
			<span class="tabs-button tabs-button__prev" :class="{ 'tabs-button-hidden': !scrollable }">a</span>
			<span class="tabs-button tabs-button__next" :class="{ 'tabs-button-hidden': !scrollable }">b</span>
			<Draggable :list="tabsList" animation="300" item-key="path" class="tabs-wrap-scroll">
				<template #item="{ element }">
					<div class="tabs-wrap-scroll-item" :class="{ 'tabs-wrap-scroll-item__active': currentPath === element.path }" @click.stop="goPage(element)" @contextmenu="handleContextMenu($event, element)">
						<span class="name">{{ element.name }}</span>
            <SvgIcon icon="delete-filling" @click.stop="handleCloseTabItem(element)" />
					</div>
				</template>
			</Draggable>
		</div>
		<div class="tabs-button__close">
			<el-dropdown>
        <span class="el-dropdown-name"><SvgIcon icon="add-fill" /></span>
				<template #dropdown>
					<el-dropdown-menu>
						<el-dropdown-item>Action 1</el-dropdown-item>
						<el-dropdown-item>Action 2</el-dropdown-item>
						<el-dropdown-item>Action 3</el-dropdown-item>
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
import { computed } from 'vue'
const tabsFixed = true
const scrollable = false
const tabsList = [
	{
		name: 'dashboard',
		id: 1,
		path: '/a'
	},
	{
		name: 'system',
		id: 2,
		path: '/b'
	},
	{
		name: 'dashboard',
		id: 1,
		path: '/a'
	},
	{
		name: 'system',
		id: 2,
		path: '/b'
	},
	{
		name: 'dashboard',
		id: 1,
		path: '/a'
	},
	{
		name: 'dashboard',
		id: 1,
		path: '/a'
	},
	{
		name: 'system',
		id: 2,
		path: '/b'
	},
	{
		name: 'dashboard',
		id: 1,
		path: '/a'
	},
	{
		name: 'dashboard',
		id: 1,
		path: '/a'
	}
]
const currentPath = '/a'
const goPage = item => {
	console.log(item)
}
const handleContextMenu = () => {}

const handleCloseTabItem = element => {

}
</script>
