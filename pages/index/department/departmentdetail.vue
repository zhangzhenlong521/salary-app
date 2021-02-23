<template>
	<view class="departmentdetail">
		<view class="content">
			<view class="main">
				<mytable
					v-if="list.bodylist.length>0"
					:list='list'
					:optionstyle='tableStyle'
				></mytable>
				<view class="tls" v-else>
					{{ message }}
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import mytable from '../../../components/my-table/my-table.vue'
	import {departmentdetail} from '../../../testData/test.js'
	export default {
		components:{mytable},
		data() {
			return {
				id: null,
				list: {
					headerlist: [],
					bodylist: []
				},
				tableStyle: {
					tHeight: '160',
					hWidth: '160',
					bWidth: '200'
				},
				message: ''
			}
		},
		
		onLoad(params) {
			this.id = params.id
			uni.setNavigationBarTitle({
			　　title: params.name
			})
			
			this.getDepartmentDetailList()
		},
		methods:{
			dispose(list) {
				let newkeys = []
				let keys = Object.keys(list.data[0])
				keys.forEach((item,index)=>{
					if (item === 'checkeddeptname') {
						newkeys.push({title:'支行名称',key: item, index: index})
					} else if (this.$isChinese(item)) {
						newkeys.push({title: item, key: item, index: index})
					}  else if (item === 'datadate') {
						newkeys.push({title: '数据日期',key: item, index: index})
					}
				})
				return newkeys
			},
			
			// 根据ID获取部门指标详情
			getDepartmentDetailList () {
				let that = this
				this.$request({
					url: 'selectdept/results',
					method: 'POST',
					data: {
						code: uni.getStorageSync('usercode'),
						id: that.id
					}
				}).then(res=>{
					if (typeof(res.data) != 'object') {
						that.message = res.data
					} else {
						that.list.headerlist = that.dispose(res)
						that.list.bodylist = res.data
					}
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.content {
		padding: 20upx 0 40upx;
	}
	.tls {
		text-align: center;
	}
</style>
