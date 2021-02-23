<template>
	<view class="index bgColor">
		<view class="content">
			<view class="header">
				<text class="uni-h3 title">{{title}}</text>
			</view>
			<view class="body">
				<view class="item-main">
					<view class="item" v-for="(item,index) in list" :key="index" @tap="goItem(item.url)">
						<image class="item-icon" :src="item.icon" ></image>
						<text class="item-title uni-h4" >{{item.title}}</text>
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
				title: '贵州赫章农商银行绩效管理系统',
				list: [
					{icon:"../../static/imgs/item1.png",title: '部门指标查询',url: '/pages/index/department'},
					{icon:"../../static/imgs/item2.png",title: '个人定量指标',url: '/pages/index/myself'},
					{icon:"../../static/imgs/item3.png",title: '网格信息管理',url: '/pages/index/gridding'}
				]
			}
		},
		// 监听页面加载
		onLoad() {
			console.log(uni.getStorageSync('usercode'))
		},
		onShow () {
			let token = uni.getStorageSync('token')
			let userInfo = uni.getStorageSync('userInfo')
			if ( !token || !userInfo ) {
				uni.reLaunch({
					url: '/pages/login/login'
				})
			}
		},
		// 方法集
		methods: {
			goItem (path) {
				console.log(path)
				uni.navigateTo({
					url: path
				})
				uni.request({
					
				})
			},
			
	
		}
	}
</script>

<style lang="scss" scoped>
	page {
		background-color: #fff;
		
	}
.content {
	z-index: 10;
	.header {
		height: 388upx;
		background-color: $mainColor;
		.title {
			width: 100%;
			color: #fff;
			padding-top: 90upx;
			display: flex; 
			justify-content: center;
			letter-spacing: 5upx;
		}
	}
	.body {
		background-color: #fff;
		padding:  0 80upx;
		.item-main {
			transform: translateY(-80upx);
			display: flex;
			justify-content: space-between;
			flex-wrap: wrap;
			.item{
				width: 260upx;
				border-radius: 10upx;
				background-color: #fff;
				display: flex;
				flex-direction: column;
				align-items: center;
				box-shadow: 0 0 10upx rgba($color: #eee, $alpha: 1.0);
				margin-bottom: 60upx;
				.item-icon {
					margin-top: 28upx;
					width: 140upx;
					height: 160upx;
				}
				.item-title {
					margin-top: 40upx;
					margin-bottom: 32upx;
					color: #333;
				}
			}
		}
	}
}
</style>
