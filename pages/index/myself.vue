<template>
	<view class="myself">
		<view class="are content">
			<view class="main">
				<view class="item" v-for="(item,index) in list" :key='index' @tap="toPage(item)">
					<text class="key">{{item.TARGETNAME}}</text>
					<uni-icons type='arrowright' size='20'></uni-icons>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list: []
			}
		},
		onLoad() {
			this.getList()
		},
		methods:{
			// 跳转
			toPage(params) {
				uni.navigateTo({
					url: `/pages/index/myself/myselfdetail?id=${params.TARGETID}&name=${params.TARGETNAME}`
				})
			},
			
			// 指标列表
			getList () {
				let that = this
				this.$request({
					url: 'selectuser/indicators',
					method: 'POST',
				}).then(res=>{
					that.list = res.data
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.content {
	}
	.main {
		background-color: #fff;
		border-radius: 20upx;
		padding: 0 20upx;
		.item {
			
			height: 120upx;
			border-top: 1px solid #f5f5f5;
			display: flex;
			align-items: center;
			justify-content: space-between;
		}
	}
</style>
