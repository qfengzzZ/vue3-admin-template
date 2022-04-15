<template>
	<span class="e-layout-header-trigger e-layout-header-trigger-min">
		<el-dropdown class="e-layout-header-user" @command="handleClick">
			<el-avatar class="g-vertical" size="small" icon="el-icon-user" />
			<span class="el-ml-8">wěnzhang</span>
			<template #dropdown>
				<el-dropdownMenu>
					<el-dropdown-item command="logout">
						<SvgIcon icon="logout" /><span>{{ '退出登录' }}</span>
					</el-dropdown-item>
				</el-dropdownMenu>
			</template>
		</el-dropdown>
	</span>
</template>
<script>
export default {
	name: 'EUser'
}
</script>
<script setup>
const handleClick = () => {
	console.log('logout')
}
</script>
