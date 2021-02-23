<template>
	<view class="salary">
		<view class="content are">
			<view class="date">
				<view class="title">日期：</view>
				<picker 
					mode="date" 
					fields="month"
					:value="valuedate" 
					:end="enddate"
					@change="DateChange" 
					data-target="date"
				>
					<view class="picker">
						{{valuedate ? valuedate : enddate ? enddate: '请选择日期'}} <uni-icons class="icon" type="arrowdown" size="15"></uni-icons>
					</view>
				</picker>
			</view>
			<!-- 内容 -->
			<view class="list">
				<view class="item" v-for="(item,index) in list" :key='index'>
					<!-- <mytitle title='指标'></mytitle> -->
					<view class="item-content">
						<text class="key">{{item.factorname}}</text>
						<view class="right">
							<text class="value">{{item.factorvalue ? item.factorvalue : '/'}}</text>
							<!-- <uni-icons class='icon' type='arrowright' size='20'></uni-icons> -->
						</view>
					</view>
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
				valuedate: '',
				enddate: this.$dayjs().subtract(1, 'month').format('YYYY-MM'),
				list: []
			}
		},
		onLoad() {
			this.getSalaryByDate()
		},
		methods: {
			DateChange(e){
				this.valuedate = e.detail.value
				this.getSalaryByDate()
			},
			
			// 根据日期查询
			getSalaryByDate () {
				let that = this
				this.$request({
					url: 'selectsalary',
					method: 'POST',
					data: {
						code: uni.getStorageSync('usercode'),
						date: that.valuedate ? that.valuedate : that.enddate
					}
				}).then(res=> {
					that.list = res.data
				}).catch(err=>{
					that.list = [
						{
							factorname: '暂无数据',
							factorvalue: '/'
						}
					]
					uni.showToast({
						title: err,
						icon: 'none'
					})
				})
			}
		},
	}
</script>

<style lang="scss" scoped>
	.content {
		.date {
			display: flex;
			// justify-content: flex-end;
			.picker{
				margin-left: 10upx;
				.icon {
					margin-left: 20upx;
				}
			}
		}
		
		.list {
			margin-top: 40upx;
			background-color: #fff;
			padding: 0 20upx;
			border-radius: 20upx;
			.item-content {
				display: flex;
				justify-content: space-between;
				align-items: center;
				height: 120upx;
				padding: 0 20upx;
				border-top: 1px solid #f5f5f5;
				.right {
					display: flex;
					align-items: center;
					.icon {
						margin-left: 20upx;
					}
				}
			}
		}
	}
</style>
