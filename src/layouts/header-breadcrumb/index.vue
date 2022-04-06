<template>
	<el-breadcrumb class="e-layout-header-breadcrumb" ref="breadcrumb">
		<el-breadcrumb-item v-for="(item, index) in breadCrumbList" :key="index" class="e-layout-header-breadcrumb-item">
			<span class="current-span" v-if="index === breadCrumbList.length - 1">{{ item.meta.title }}</span>
			<span v-else>{{ item.meta.title }}</span>
		</el-breadcrumb-item>
	</el-breadcrumb>
</template>
<script>
export default {
	name: 'EBreadcrumb'
}
</script>
<script setup>
import { computed, watchEffect } from 'vue'
import { useStore } from 'vuex'
import { useRoute } from 'vue-router'
const store = useStore()
const route = useRoute()
watchEffect(() => {
	store.commit('menu/setActivePath', route.path)
	store.commit(
		'menu/setBreadCrumbList',
		route.matched.filter(item => item.meta && item.meta.title)
	)
})
const breadCrumbList = computed(() => store.state.menu.breadCrumbList)
</script>
