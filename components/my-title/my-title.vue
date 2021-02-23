<template name='mytitle'>
	<view class="content">
		<view class="title">
			<text class="icon"></text><text class="name">{{title}}</text>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'mytitle',
		props:{
			title: {
				type: String,
				value: '标题'
			}
		},
		data() {
			return {};
		}
	}
</script>

<style lang="scss" scoped>
.title {
	height: 80upx;
	background-color: #fff;
	display: flex;
	align-items: center;
	.icon {
		width: 10upx;
		height: 30upx;
		background-color: #4565fb;
	}
	.name {
		margin-left: 13upx;
		font-size: 30upx;
		color: #333;
		font-weight: 700;
	}
}
</style>
