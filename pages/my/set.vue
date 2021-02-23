<template>
	<view class="set">
		<view class="content are">
			<view class="item-main">
				<view class="item">
					<button type="default"  class="logout" @tap='logout'>退出当前账号</button>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
			}
		},
		onLoad() {
			
		},
		methods: {
			// 退出登录
			logout () {
				
				// 清除所有本地缓存
				uni.clearStorageSync()
				
				uni.showToast({
					title: '退出成功',
					icon: 'none'
				})
				
				setTimeout(()=>{
					uni.reLaunch({
						url: '../login/login'
					})
				},1000)
				
			}
		}
	}
</script>

<style lang="scss" scoped>
	page {
		background-color: #F9F9F9;
	}
	.content {
		width: 100%;
		
		.item-main {
			display: flex;
			flex-direction: column;
			justify-content: center;
		}
		.logout {
			background-color: rgba($color: red, $alpha: .5);
			color: #fff;
		}
	}
</style>
