<template>
	<span class="e-layout-header-trigger e-layout-header-trigger-min" @click="handleToggleMenuSide">
		<SvgIcon icon="menu-unfold" v-if="menuCollapse" />
		<SvgIcon icon="menu-fold" v-else />
	</span>
</template>
<script>
export default {
	name: 'ECollapse'
}
</script>
<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'
const store = useStore()
const menuCollapse = computed(() => store.state.layout.menuCollapse)

const handleToggleMenuSide = () => {
	store.commit('layout/updateMenuCollapse', !menuCollapse.value)
}
</script>
