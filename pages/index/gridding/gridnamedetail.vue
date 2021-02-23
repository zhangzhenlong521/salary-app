<template>
	<view class="gridnamedetali">
		<view class="content-detail">	
			<view class="search">
				<view class="btn searchbtn" @tap="search">搜索</view>
				<view class="btn addbtn" @tap="add">新增</view>
			</view>
			<mytable :list="list" :optionstyle='tableStyle'></mytable>
		</view>
	</view>
</template>

<script>
	import mytable from '../../../components/my-table/my-table.vue'
	import { gridnamedeta } from '../../../testData/test.js'
	export default {
		components:{mytable},
		data() {
			return {
				gridding: null,
				list: {
					headerlist: [],
					bodylist: []
				},
				tableStyle: {
					hWidth: '160',
					bWidth: '200',
					tHeight: '120'
				},
				pages:{
					pageSize: 50,
					currentPage: 1
				}
			}
		},
		onLoad(params) {
			this.gridding = JSON.parse(params.data)
			
			this.getUserDetail()
		},
		methods:{
			// 新增
			add() {
				uni.navigateTo({
					url: `/pages/index/gridding/add?data=${this.gridding}`
				})
			},
			// 搜索
			search() {
				uni.navigateTo({
					url: '/pages/index/gridding/searchFaml'
				})
			},
			
			// 数据处理
			dispose: function(list) {
				let newkeys = []
				let keys = Object.keys(list[0])
				keys.forEach((item,index)=>{
					if (item === 'a') {
						newkeys.push({title:'客户名称',key: item, index: index, isCilck: false})
					} else if (item === 'b') {
						newkeys.push({title: '客户类型',key: item, index: index, isCilck: false})
					} else if (item === 'c') {
						newkeys.push({title: '家庭关系',key: item, index: index, isCilck: false})
					}  else if (item === 'd') {
						newkeys.push({title: '性别',key: item, index: index,isCilck: false})
					} else if (item === 'e') {
						newkeys.push({title: '民族',key: item, index: index,isCilck: false})
					} else if (item === 'g') {
						newkeys.push({title: '身份证号',key: item, index: index,isCilck: false})
					} else if (item === 'h') {
						newkeys.push({title: '户籍地址',key: item, index: index,isCilck: false})
					} else if (item === 'j') {
						newkeys.push({title: '乡-镇',key: item, index: index,isCilck: false})
					} else if (item === 'k') {
						newkeys.push({title: '网格名称',key: item, index: index,isCilck: false})
					} else if (item === 'deptcode') {
						newkeys.push({title: '所属机构',key: item, index: index,isCilck: false})
					} else if (item === 'hz') {
						newkeys.push({title: '户主姓名',key: item, index: index,isCilck: false})
					} else if (item === 'hh') {
						newkeys.push({title: '户口编号',key: item, index: index,isCilck: false})
					} else if (item === 'code') {
						newkeys.push({title: '贷款机构号',key: item, index: index,isCilck: false})
					} else if (item === 'ckye') {
						newkeys.push({title: '存款余额', key: item, index: index,isCilck: false})
					} else if (item === 'dkye') {
						newkeys.push({title: '贷款余额',key: item, index: index,isCilck: true, path: '/pages/index/gridding/loans'})
					} else if (item === 'jdxx') {
						newkeys.push({title: '是否建档',key: item, index: index,isCilck: false})
					} else if (item === 'qny') {
						newkeys.push({title: '是否是黔农云',key: item, index: index,isCilck: false})
					} else if (item === 'num') {
						newkeys.push({title: '家庭成员',key: item, index: index,isCilck: true, path: '/pages/index/gridding/member'})
					}
				})
				return newkeys
			},
			
			// 网格客户明细   TODO 分页查询
			getUserDetail () {
				let that = this
				this.$request({
					url: 'griduser',
					method: 'POST',
					data: {
						code: uni.getStorageSync('usercode'),
						c: that.gridding.c,
						d: that.gridding.d,
						f: that.gridding.f,
						pageSize: that.pages.pageSize,
						currentPage: that.pages.currentPage
					}
				}).then(res=>{
					that.list.headerlist = that.dispose(res.data)
					that.list.bodylist = res.data
					console.log(res)
				})
			}
			
		}
	}
</script>

<style lang="scss" scoped>
	.content-detail{
		padding: 40upx 0 80upx;
		background-color: #f9f9f9;
		
		.search{
			padding: 0 20rpx 20rpx;
			display: flex;
			justify-content: flex-end;
			.btn {
				padding: 10rpx 20rpx;
				background-color: $mainColor;
				border-radius: 5rpx;
				font-size: 18rpx;
				color: #FFFFFF;
				margin-left: 30rpx;	
			}
			.addbtn {
				background-color: green;
			}
		}
	}
</style>
