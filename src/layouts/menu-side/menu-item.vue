<template>
	<el-menu-item :index="index" v-if="menu.children === undefined || !menu.children.length">
		<SvgIcon :icon="menu.icon" v-if="menu.icon" />
		<template #title>
			<span>{{ menu.title }}</span>
		</template>
	</el-menu-item>
	<el-sub-menu :index="index" v-else :popper-class="subMenuClass">
		<template #title>
			<SvgIcon :icon="menu.icon" v-if="menu.icon" />
			<span>{{ menu.title }}</span>
		</template>
		<e-menu-side-item v-for="item in menu.children" :index="item.path" :key="item.path" :menu="item" />
	</el-sub-menu>
</template>
<script>
export default {
	name: 'EMenuSideItem'
}
</script>
<script setup>
import { computed, toRefs } from 'vue'

const props = defineProps({
	menu: {
		type: Object,
		default: () => {
			return {}
		}
	},
	index: {
		type: String
	},
	sideTheme: {
		type: String,
		default: 'light'
	}
})

const { menu, index, sideTheme } = toRefs(props)

const subMenuClass = computed(() => {
	return `custom-submenu-popper-${sideTheme.value}`
})
</script>
