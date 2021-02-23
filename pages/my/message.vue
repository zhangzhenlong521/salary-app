<template>
	<view class="message">
		<view class="content are">
			<!-- 基础信息 -->
			<view class="basic-message item-main">
				<mytitle title='基础信息'></mytitle>
				<view class="basic-item">
					<text class="key">姓名</text>
					<text class="value">{{message.name}}</text>
				</view>
				<view class="basic-item">
					<text class="key">身份证号</text>
					<text class="value">{{message.cardid}}</text>
				</view>
				<view class="basic-item">
					<text class="key">性别</text>
					<text class="value">{{message.sex}}</text>
				</view>
				<view class="basic-item">
					<text class="key">出生日期</text>
					<text class="value">{{message.birthday}}</text>
				</view>
				<view class="basic-item">
					<text class="key">政治面貌</text>
					<text class="value">{{message.politicalstatus ? message.politicalstatus : '/'}}</text>
				</view>
				<view class="basic-item">
					<text class="key">年龄</text>
					<text class="value">{{message.birthday}}</text>
				</view>
				<view class="basic-item">
					<text class="key">学历</text>
					<text class="value">{{message.degree}}</text>
				</view>
				<view class="basic-item">
					<text class="key">专业</text>
					<text class="value">{{message.specialities}}</text>
				</view>
				<view class="basic-item">
					<text class="key">毕业院校</text>
					<text class="value">{{message.university}}</text>
				</view>
				<!-- 工作信息 -->
			</view>
			<view class="basic-message item-main">
				<mytitle title='工作信息'></mytitle>
				<view class="basic-item">
					<text class="key">主要部门</text>
					<text class="value">{{message.maindeptid}}</text>
				</view>
				<view class="basic-item">
					<text class="key">柜员号</text>
					<text class="value">{{message.tellerno}}</text>
				</view>
				<view class="basic-item">
					<text class="key">职务</text>
					<text class="value">{{message.position ? message.position : '/'}}</text>
				</view>
				<view class="basic-item">
					<text class="key">主要岗位</text>
					<text class="value">{{message.mainstation}}</text>
				</view>
				<view class="basic-item">
					<text class="key">任岗日期</text>
					<text class="value">{{message.stationdate}}</text>
				</view>
				<view class="basic-item">
					<text class="key">岗位系数</text>
					<text class="value">{{message.stationratio}}</text>
				</view>
				<view class="basic-item">
					<text class="key">岗位归类</text>
					<text class="value">{{message.stationkind}}</text>
				</view>
				<view class="basic-item">
					<text class="key">职称聘用日期</text>
					<text class="value">{{message.posttitleapplydate}}</text>
				</view>
				<view class="basic-item">
					<text class="key">统筹方式</text>
					<text class="value">{{message.planway ? message.planway: '/'}}</text>
				</view>
				<view class="basic-item">
					<text class="key">合同到期日期</text>
					<text class="value">{{message.contractdate}}</text>
				</view>
				<view class="basic-item">
					<text class="key">参加工作日期</text>
					<text class="value">{{message.joinworkdate}}</text>
				</view>
				<view class="basic-item">
					<text class="key">工龄</text>
					<text class="value">{{message.workage}}</text>
				</view>
				<view class="basic-item">
					<text class="key">参加本行日期</text>
					<text class="value">{{message.joinselfbankdate}}</text>
				</view>
				<view class="basic-item">
					<text class="key">行龄</text>
					<text class="value">{{message.selfbankage}}</text>
				</view>
				<!-- 账户信息 -->
			</view>
			<view class="basic-message item-main">
				<mytitle title='账户信息'></mytitle>
				<view class="basic-item">
					<text class="key">本行账号</text>
					<text class="value">{{message.selfbankaccount ? message.selfbankaccount: '/'}}</text>
				</view>
				<view class="basic-item">
					<text class="key">他行账号</text>
					<text class="value">{{message.otheraccount ? message.otheraccount: '/'}}</text>
				</view>
				<view class="basic-item">
					<text class="key">独生子女出生日期</text>
					<text class="value">{{message.onlychildrenbthday ? message.onlychildrenbthday: '/'}}</text>
				</view>
				<view class="basic-item">
					<text class="key">亲属姓名</text>
					<text class="value">{{message.familyname ? message.familyname: '/'}}</text>
				</view>
				<view class="basic-item">
					<text class="key">亲情账号</text>
					<text class="value">{{message.familyaccount ? message.familyaccount: '/'}}</text>
				</view>
				<view class="basic-item">
					<text class="key">养老金</text>
					<text class="value">{{message.pension ? message.pension: '/'}}</text>
				</view>
				<view class="basic-item">
					<text class="key">住房公积金</text>
					<text class="value">{{message.housingfund ? message.housingfund: '/'}}</text>
				</view>
			</view>
		</view>
	</view>
</template>
<script>
	import mytitle from '../../components/my-title/my-title.vue'
	export default {
		components: {
			mytitle
		},
		data() {
			return {
				message: '',
				usercode: uni.getStorageSync('usercode')
			}
		},
		onLoad() {
			this.getUserInfo()
		},
		methods: {
			getUserInfo () {
				let that = this
				this.$request({
					url: 'selectuser',
					method: 'POST',
					data:{
						code: that.usercode
					}
				}).then(res=>{
					if (res.data) {
						that.message = res.data
					}
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.item-main {
		padding: 0 40upx 0 20upx;
		background-color: #fff;
		border-radius: 10upx;
		margin-bottom: 20upx;

		.basic-item {
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
