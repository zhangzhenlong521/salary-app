<template>
	<view class="my">
		<view class="content">
			<view class="list-main">
				<view class="item" v-for="(item,index) in list" :key="index" @tap="toPage(item.url)">
					<view class="left-main">
						<image class="pic" :src="item.icon"></image>
						<text class="title uni-h4">{{ item.title }}</text>
					</view>
					<view class="right">
						<uni-icons type="arrowright" size="28" color="#cfcfcf"></uni-icons>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list: [
					{title: '个人信息', icon: '../../static/imgs/usermessage.png',url:'/pages/my/message'},
					{title: '工资查询', icon: '../../static/imgs/bank.png',url:'/pages/my/salary'},
					{title: '设置', icon: '../../static/imgs/set.png',url:'/pages/my/set'}
				]
			}
		},
		onLoad() {
			
		},
		methods: {
			toPage (path) {
				uni.navigateTo({
					url: path
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	
	.my {
		padding: 40upx 20upx 0;
		
		.item {
			height: 150upx;
			padding: 37upx 30upx;
			margin-bottom: 40upx;
			border-radius: 20upx;
			display: flex;
			justify-content: space-between;
			align-items: center;
			background-color: #fff;
			.left-main {
				display: flex;
				align-items: center;
				.pic {
					width: 76upx;
					height: 76upx;
				}
				.title {
					margin-left: 20upx;
					color: #333;
				}
			}
			.right-main {
				display: flex;
				align-items: center;
			}
		}
	}
</style>
