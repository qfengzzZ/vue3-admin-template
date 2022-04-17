<template>
	<div class="e-layout-header-logo e-layout-header-logo-stick">
		<a href="/">
			<img src="@/assets/images/logo-small.png" v-if="menuCollapse" />
			<img src="@/assets/images/logo-dark.png" v-else-if="sideTheme === 'light'" />
			<img src="@/assets/images/logo-dark.png" v-else />
		</a>
	</div>
</template>
<script>
export default {
	name: 'EHeaderLogo'
}
</script>
<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'
const store = useStore()
const menuCollapse = computed(() => store.state.layout.menuCollapse)
const sideTheme = computed(() => store.state.layout.sideTheme)
</script>
