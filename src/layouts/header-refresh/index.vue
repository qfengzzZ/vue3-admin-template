<template>
	<span class="e-layout-header-trigger e-layout-header-trigger-min" @click="handleRefresh">
		<SvgIcon icon="refresh" />
	</span>
</template>
<script>
export default {
	name: 'ERefresh'
}
</script>
<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()
const handleRefresh = () => {
	router.go(0)
}
</script>
