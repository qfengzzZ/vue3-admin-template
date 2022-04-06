<template>
	<div class="el-exception">
		<div class="el-exception-img">
			<div class="el-exception-img-element"></div>
		</div>
		<div class="el-exception-content">
			<h1>{{ type }}</h1>
			<div class="el-exception-content-desc">{{ desc }}</div>
			<div class="el-exception-content-actions">
				<a href="/dashboard" class="">返回首页</a>
			</div>
		</div>
	</div>
</template>

<script setup>
defineProps({
	type: {
		type: String,
		default: '403'
	},
	desc: {
		type: String,
		default: '抱歉，你无权访问该页面'
	}
})
</script>
<style lang="scss" scoped>
.el-exception {
	width: 100%;
	display: flex;
	align-items: center;
	min-height: 500px;
}
.el-exception-img {
	flex: 0 0 62.5%;
	width: 62.5%;
	padding-right: 152px;
	zoom: 1;
	.el-exception-img-element {
		background-image: url('../../assets/svg/icon-403-color.svg');
		float: right;
		width: 100%;
		max-width: 430px;
		height: 360px;
		background-repeat: no-repeat;
		background-position: 50% 50%;
		background-size: contain;
	}
}
.el-exception-content-desc {
	margin-bottom: 16px;
	color: #808695;
	font-size: 20px;
	line-height: 28px;
}
.el-exception-content-actions {
	a {
		display: block;
		height: 40px;
		line-height: 40px;
		text-align: center;
		padding: 0 15px;
		font-size: 16px;
		border-radius: 4px;
		color: #fff;
		background-color: #2d8cf0;
		border-color: #2d8cf0;
		text-decoration: none;
	}
}
</style>
