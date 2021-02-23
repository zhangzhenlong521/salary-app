<template>
	<view class="department">
		<view class="content are">
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
			this.getDepartmentList()
		},
		methods:{
			toPage(param) {
				uni.navigateTo({
					url: `/pages/index/department/departmentdetail?id=${param.TARGETID}&name=${param.TARGETNAME}`
				})
			},
			
			// 获取部门指标列表
			getDepartmentList () {
				let that = this
				this.$request({
					url:"selectdept/indicators",
					method: 'POST'
				}).then(res=>{
					that.list = res.data
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	
	.content {
		// height: 100vh;
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
