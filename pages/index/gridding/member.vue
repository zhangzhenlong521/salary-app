<template>
	<view class="member">
		<view class="content">
			<mytable :list="list" :optionstyle="tableStyle"></mytable>
		</view>
	</view>
</template>

<script>
	import mytable from '../../../components/my-table/my-table.vue'
	import {member} from '../../../testData/test.js'
	export default {
		components:{ mytable },
		data() {
			return {
				list: {
					headerlist: this.dispose(),
					bodylist: member.data
				},
				tableStyle: {
					tHeight: '120',
					hWidth: '160',
					bWidth: '300'
				}
			}
		},
		onLoad() {
			
		},
		methods:{
			dispose: function() {
				let newkeys = []
				let keys = Object.keys(member.data[0])
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
						newkeys.push({title: '户主编号',key: item, index: index,isCilck: false})
					} else if (item === 'code') {
						newkeys.push({title: '贷款机构号',key: item, index: index,isCilck: false})
					} else if (item === 'ckye') {
						newkeys.push({title: '存款余额',key: item, index: index,isCilck: false})
					} else if (item === 'dkye') {
						newkeys.push({title: '贷款余额',key: item, index: index,isCilck: false})
					} else if (item === 'jdxx') {
						newkeys.push({title: '是否建档',key: item, index: index,isCilck: false})
					}
				})
				return newkeys
		}
		}
	}
</script>

<style>
	.content{
		padding: 20upx 0upx 40upx;
		background-color: #f9f9f9;
	}
</style>
