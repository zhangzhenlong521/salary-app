<template>
	<view class="search">
		<view class="content">
			<view class="bgc-main">
				<view class="search-item">
					<view class="title">客户名称</view>
					<input type="text" value="" placeholder="请输入客户名称"/>
				</view>
				<view class="search-item">
					<view class="title">身份证号</view>
					<input type="text" value="" placeholder="请输入身份证号"/>
				</view>
				<view class="search-item">
					<view class="title">存款余额合计</view>
					<picker mode="multiSelector" :range="" @change="">
						<view>{{}}</view>
					</picker>
				</view>
				<view class="search-item">
					<view class="title">贷款余额合计</view>
					<input type="text" value="" placeholder="请输入客户名称"/>
				</view>
			</view>
			<view class="detail">
				<mytable :list="list" :optionstyle='tableStyle'></mytable>
			</view>
		</view>
	</view>
</template>

<script>
	import mytable from "../../../components/my-table/my-table.vue"
	export default {
		components:{mytable},
		data() {
			return {
				searchInfo: '',
				detail: 1,
				list: {
					headerlist: [],
					bodylist: []
				},
				tableStyle: {
					tHeight: 160,
					hWidth: 160,
					bWidth: 200
				}
			}
		},
		onLoad() {
			
		},
		methods:{
			dispose (list) {
				let newkeys = []
				let keys = Object.keys(list.data[0])
				keys.forEach((item,index)=>{
					if (item === 'a') {
						newkeys.push({title:'支行名称',key: item, index: index, isCilck: false})
					} else if (item === 'b') {
						newkeys.push({title: '客户经理',key: item, index: index, isCilck: false})
					} else if (item === 'c') {
						newkeys.push({title: '乡-镇',key: item, index: index, isCilck: false})
					}  else if (item === 'd') {
						newkeys.push({title: '网格名称',key: item, index: index,isCilck: true, path: '/pages/index/gridding/gridnamedetail'})
					} else if (item === 'qk') {
						newkeys.push({title: '网格概况',key: item, index: index,isCilck: true, path: '/pages/index/gridding/general'})
					}
				})
				return newkeys
			},
			search () {
				let that = this
				
				if (!this.searchInfo) {
					return uni.showToast({
						title: '请输入所属机构或客户经理或网格名称',
						icon: 'none'
					})
				}
				
				this.$request({
					url: 'selectgrid/search',
					method: 'POST',
					data: {
						code: uni.getStorageSync('usercode'),
						name: that.searchInfo
					}
				}).then(res=>{
					if (typeof(res.data) == 'string') {
						that.list.headerlist = []
						that.list.bodylist = []
						uni.showToast({
							title: res.data,
							icon: 'none'
						})
						that.searchInfo = ''
					} else {
						console.log(res)
						that.list.headerlist = that.dispose(res)
						that.list.bodylist = res.data
					}
				})
			}
		}
		
	}
</script>

<style lang="scss" scoped>
	.bgc-main {
		background-color: #f9f9f9;
		padding: 20upx 20upx 30upx;
	}

	
	.detail {
		padding: 15rpx 0;
	}
</style>
