<template>
	<view class="gridding">
		<view class="content are">
			
			<!-- <view class="bgc-main">
				<view class="search-main">
					<uni-icons class='icon' type="search"></uni-icons>
					<input class="message" type="text" v-model="search" placeholder="请输入所属机构或客户经理或网格名称"  confirm-type="search"/>
				</view>
			</view> -->
			
			<!-- 表格 -->
			<view class="list">
				<mytable :list="list" :optionstyle='tableStyle'></mytable>
			</view>
		</view>
	</view>
</template>

<script>
	import {gridlist} from '../../testData/test.js'
	import mytable from "../../components/my-table/my-table.vue"
	export default{
		components:{mytable},
		data() {
			return {
				search: '',
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
			this.getList()
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
			
			// 搜索
			onNavigationBarButtonTap(e) {
				console.log(e)
				uni.navigateTo({
					url: '/pages/index/gridding/search'
				})
			},
			
			// 列表
			getList () {
				let that = this
				this.$request({
					url: 'selectgrid',
					method: 'POST',
					data: {
						code: uni.getStorageSync('usercode')
					}
				}).then(res=>{
					//  TODO 当数据量过大时，table组件已经加载完成，导致每一列的宽度自动计算不准确
					that.list.headerlist = that.dispose(res)
					that.list.bodylist = res.data
				})
			}
			
		}
	}
</script>

<style lang="scss" scoped>
	.content{
		padding: 20upx 0 0;
		.bgc-main {
			background-color: #f9f9f9;
			padding: 20upx 20upx 30upx;
		}
		
		.search-main {
			height: 80upx;
			display: flex;
			align-items: center;
			justify-content: center;
			background-color: #fff;
			border-radius: 40upx;
			padding:0 30upx;
			.icon {
				font-size: 36upx;
				color: #999;
			}
			.message{
				flex: 1;
				margin-left: 10upx;
				font-size: 28upx;
			}
		}
	}
</style>
