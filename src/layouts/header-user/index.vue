<template>
	<span class="e-layout-header-trigger e-layout-header-trigger-min">
		<el-dropdown class="e-layout-header-user" @command="handleClick">
			<el-avatar style="vertical-align: middle" size="small" icon="el-icon-user">admin</el-avatar>
			<template #dropdown>
				<el-dropdownMenu>
					<el-dropdown-item command="logout">
						<i class="el-icon-finished"></i>
						<span>{{ '退出登录' }}</span>
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
