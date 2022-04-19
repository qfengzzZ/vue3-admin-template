<template>
	<el-menu-item :index="index" v-if="menu.children === undefined || !menu.children.length">
		<!-- <i :class="menu.icon" v-if="menu.icon" />
		<i :class="menu.custom" v-else-if="menu.custom" />
		<img :src="menu.img" v-else-if="menu.img" /> -->
		<SvgIcon :icon="menu.icon" v-if="menu.icon" />
		<template #title>
			<span>{{ menu.title }}</span>
		</template>
	</el-menu-item>
	<el-sub-menu ref="subMenu" :index="index" v-else popper-append-to-body popper-class="menu-popper-custom">
		<template #title>
			<SvgIcon :icon="menu.icon" v-if="menu.icon" />
			<span>{{ menu.title }}</span>
		</template>
		<e-menu-side-item v-for="item in menu.children" :index="index" :key="item.path" :menu="item" />
	</el-sub-menu>
</template>
<script>
export default {
	name: 'EMenuSideItem'
}
</script>
<script setup>
defineProps({
	menu: {
		type: Object,
		default: () => {
			return {}
		}
	},
	index: {
		type: String,
		default: ''
	}
})
</script>
