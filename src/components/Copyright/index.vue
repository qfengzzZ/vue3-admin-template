<template>
	<div class="e-global-footer">
		<p class="e-global-footer-copyright">{{ copyright }}</p>
	</div>
</template>
<script setup>
import { ref } from 'vue'
const copyright = ref('欢迎使用vue-admin-template')
</script>
<style lang="scss">
.e-global-footer {
	padding: 0 16px;
	text-align: center;
}
.e-global-footer-copyright {
	color: #808695;
	font-size: 14px;
	line-height: 60px;
}
</style>
