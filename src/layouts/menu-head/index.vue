<template>
	<el-menu ref="menuHeadRef" mode="horizontal" class="e-layout-menu-head">
		<e-menu-side-item v-for="item in filterHeader" :menu="item" :key="item.path"></e-menu-side-item>
	</el-menu>
</template>
<script>
export default {
	name: 'EMenuHead'
}
</script>
<script setup>
import EMenuSideItem from '../menu-side/menu-item'
import filterHeader from '@/menu/header'
</script>
