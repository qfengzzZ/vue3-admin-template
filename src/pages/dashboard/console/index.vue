<template>
	<el-row :gutter="20">
		<el-col v-bind="grid" class="el-mb-16">
			<el-card shadow="never">
				<template #header>
					<div class="card-header">
						<h3>访问量</h3>
						<el-tag>日</el-tag>
					</div>
				</template>
				<div class="card-content">
					<h2>9999</h2>
					<div class="card-tips el-mb-16 el-mt-16">
						<span>日同比增长 12.5%</span>
						<span>周同比增长 9.5%</span>
					</div>
					<el-divider />
					<div class="card-content-total">
						<span>总访问量</span>
						<span>99999</span>
					</div>
				</div>
			</el-card>
		</el-col>
		<el-col v-bind="grid">
			<el-card shadow="never">
				<template #header>
					<div class="card-header">
						<h3>销售额</h3>
						<el-tag>周</el-tag>
					</div>
				</template>
				<div class="card-content">
					<h2>1111</h2>
					<div class="card-tips el-mb-16 el-mt-16">
						<span>日同比增长 12.5%</span>
						<span>周同比增长 9.5%</span>
					</div>
					<el-divider />
					<div class="card-content-total">
						<span>总访问量</span>
						<span>11111</span>
					</div>
				</div>
			</el-card>
		</el-col>
		<el-col v-bind="grid">
			<el-card shadow="never">
				<template #header>
					<div class="card-header">
						<h3>订单量</h3>
						<el-tag>日</el-tag>
					</div>
				</template>
				<div class="card-content">
					<h2>9999</h2>
					<div class="card-tips el-mb-16 el-mt-16">
						<span>日同比增长 12.5%</span>
						<span>周同比增长 9.5%</span>
					</div>
					<el-divider />
					<div class="card-content-total">
						<span>总访问量</span>
						<span>99999</span>
					</div>
				</div>
			</el-card>
		</el-col>
		<el-col v-bind="grid">
			<el-card shadow="never">
				<template #header>
					<div class="card-header">
						<h3>访问量</h3>
						<el-tag>日</el-tag>
					</div>
				</template>
				<div class="card-content">
					<h2>9999</h2>
					<div class="card-tips el-mb-16 el-mt-16">
						<span>日同比增长 12.5%</span>
						<span>周同比增长 9.5%</span>
					</div>
					<el-divider />
					<div class="card-content-total">
						<span>总访问量</span>
						<span>99999</span>
					</div>
				</div>
			</el-card>
		</el-col>
	</el-row>
</template>
<script setup>
import { ref } from 'vue'

const grid = ref({
	xl: 6,
	lg: 12,
	md: 12,
	sm: 12,
	xs: 24
})
</script>

<style lang="scss" scoped>
.card {
	&-header {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	&-content {
		&-total {
			display: flex;
			justify-content: space-between;
			align-items: center;
		}
	}
}
</style>
