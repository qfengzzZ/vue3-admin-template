<template>
	<el-breadcrumb class="e-layout-header-breadcrumb" ref="breadcrumb">
		<el-breadcrumb-item v-for="(item, index) in breadCrumbList" :key="index" class="e-layout-header-breadcrumb-item">
			{{ item.meta.title }}
		</el-breadcrumb-item>
	</el-breadcrumb>
</template>
<script>
export default {
	name: 'EHeaderBreadcrumb'
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
