<template>
	<view class="loans">
		<view class="content are">
			<view class="list">
				<view class="item">
					<text class="key">贷款号</text>
					<text class="value">{{detail.XD_COL1}}</text>
				</view>
				<view class="item">
					<text class="key">客户名称</text>
					<text class="value">{{detail.XD_COL2}}</text>
				</view>
				<view class="item">
					<text class="key">贷款日期</text>
					<text class="value">{{detail.XD_COL4}}</text>
				</view>
				<view class="item">
					<text class="key">到期日期</text>
					<text class="value">{{detail.XD_COL5}}</text>
				</view>
				<view class="item">
					<text class="key">贷款金额</text>
					<text class="value">{{detail.XD_COL6}}</text>
				</view>
				<view class="item">
					<text class="key">结欠金额</text>
					<text class="value">{{detail.XD_COL7}}</text>
				</view>
				<view class="item">
					<text class="key">证件号码</text>
					<text class="value">{{detail.XD_COL16}}</text>
				</view>
				<view class="item">
					<text class="key">五级分类</text>
					<text class="value">{{detail.XD_COL22}}</text>
				</view>
				<view class="item">
					<text class="key">E贷</text>
					<text class="value">{{detail.XD_COL86}}</text>
				</view>
				<view class="item">
					<text class="key">机构简称</text>
					<text class="value">{{detail.XD_COL85}}</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import { loans	} from '../../../testData/test.js'
	export default {
		data() {
			return {
				detail: loans.data[0]
			}
		},
		onLoad() {
			console.log(loans)
		},
		methods:{
			
		}
	}
</script>

<style lang="scss" scoped>
	.content {
		// height: 100vh;
	}
	.list {
		padding: 0 40upx 0 20upx;
		background-color: #fff;
		border-radius: 10upx;
		// margin-bottom: 20upx;
		
		.item {
			height: 80upx;
			padding-left: 20upx;
			display: flex;
			justify-content: space-between;
			align-items: center;
			border-top: 1px solid #f5f5f5;
			font-size: 28upx;
			color: #222;
		}
		
	}
</style>
