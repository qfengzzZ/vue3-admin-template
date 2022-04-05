<template>
	<span class="e-layout-header-trigger e-layout-header-trigger-min">
		<el-dropdown class="e-layout-header-user" @command="handleClick">
			<span>
				<el-avatar style="vertical-align: middle" size="small" icon="el-icon-user" />
				<span class="e-layout-header-user-name">{{ userInfo.userName }}</span>
			</span>
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
<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'
const store = useStore()
const handleClick = () => {
	console.log('logout')
}
const userInfo = computed(() => store.state.user.userInfo)
</script>
