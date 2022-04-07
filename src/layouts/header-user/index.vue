<template>
	<span class="e-layout-header-trigger e-layout-header-trigger-min">
		<el-dropdown class="e-layout-header-user" @command="handleClick">
			<el-avatar class="el-vl-align" size="small" icon="el-icon-user" />
      <span class="el-ml-8">wěnZhang</span>
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
