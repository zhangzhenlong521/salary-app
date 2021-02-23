<template>
	<view class="myselfdetail">
		<view class="content">
			<view class="main">
			 <mytable :list='list' :optionstyle='tableStyle'></mytable>
			</view>
		</view>
	</view>
</template>

<script>
	import mytable from '../../../components/my-table/my-table.vue'
	export default {
		components:{
			mytable
		},
		data() {
			return {
				id: null,
				list: {
					headerlist: [],
					bodylist: []
				},
				tableStyle: {
					tHeight: 160,
					hWidth: 180,
					bWidth: 200,
				}
			}
		},
		onLoad(params) {
			this.id = params.id
			uni.setNavigationBarTitle({
			　　title: params.name
			})
			this.getListById()
		},
		methods: {
			dispose (list) {
				let newkeys = []
				let keys = Object.keys(list.data[0])
				keys.forEach((item,index)=>{
					if (item === 'checkedusername') {
						newkeys.push({title:'姓名',key: item, index: index})
					} else if (this.$isChinese(item)) {
						newkeys.push({title: item,key: item, index: index})
					} else if (item === 'deptname') {
						newkeys.push({title: '机构名称',key: item, index: index})
					}  else if (item === 'datadate') {
						newkeys.push({title: '数据日期',key: item, index: index})
					}
				})
				console.log(newkeys)
				return newkeys
			},
			
			// 详情列表
			getListById () {
				let that = this
				this.$request({
					url: 'select/results',
					method: 'POST',
					data:{
						code: uni.getStorageSync('usercode'),
						id: that.id
					}
				}).then(res=>{
					console.log(res)
					that.list.headerlist = that.dispose(res)
					that.list.bodylist = res.data
				})
			}
		},
	}
</script>

<style lang="scss" scoped>
	.content {
		padding-top: 20upx;
	}
</style>
