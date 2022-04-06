<template>
	<span class="e-layout-header-trigger e-layout-header-trigger-min" @click="handleRefresh">
		<SvgIcon icon="search" />
	</span>
</template>
<script>
export default {
	name: 'ERefresh'
}
</script>
<script setup>
const handleRefresh = () => {
	console.log('refresh')
}
</script>
