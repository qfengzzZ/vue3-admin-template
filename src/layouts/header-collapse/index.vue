<template>
	<span class="e-layout-header-trigger e-layout-header-trigger-fold" @click="handleToggleMenuSide">
		<SvgIcon icon="menu-fold" v-show="!menuCollapse" />
		<SvgIcon icon="menu-unfold" v-show="menuCollapse" />
	</span>
</template>
<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'
const store = useStore()
const menuCollapse = computed(() => store.state.layout.menuCollapse)

const handleToggleMenuSide = () => {
	store.commit('layout/updateMenuCollapse', !menuCollapse.value)
}
</script>
