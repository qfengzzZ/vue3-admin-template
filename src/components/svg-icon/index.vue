<template>
	<svg class="icon" :class="svgClass" aria-hidden="true">
		<use :xlink:href="iconName"></use>
	</svg>
</template>
<script>
export default {
	name: 'SvgIcon'
}
</script>
<script setup>
import { computed } from 'vue'
const props = defineProps({
	svgClass: {
		type: String,
		default: null
	},
	icon: {
		type: String,
		default: ''
	}
})
const iconName = computed(() => `#icon-${props.icon}`)
</script>
