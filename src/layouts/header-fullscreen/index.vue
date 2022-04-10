<template>
	<span class="e-layout-header-trigger e-layout-header-trigger-min" @click="handleToggleFullscreen">
		<SvgIcon icon="fullscreen" v-show="!isFullscreen" />
		<SvgIcon icon="fullscreen-exit" v-show="isFullscreen" />
	</span>
</template>
<script>
export default {
	name: 'EFullscreen'
}
</script>
<script setup>
import { onMounted, ref } from 'vue'

onMounted(() => {
	document.addEventListener('fullscreenchange', handleChangeFullscreenIcon)
})

const handleChangeFullscreenIcon = () => {
	document.fullscreenElement !== null ? (isFullscreen.value = true) : (isFullscreen.value = false)
}

const handleToggleFullscreen = () => {
	if (!document.fullscreenElement) {
		document.documentElement.requestFullscreen()
	} else {
		if (document.exitFullscreen) {
			document.exitFullscreen()
		}
	}
}
const isFullscreen = ref(false)
</script>
