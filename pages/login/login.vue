<template>
	<view class="login">
		<view class="content">
			<!-- logo -->
			<view class="logo">
				<view class="logo-icon">
					<image class="icon" src="../../static/imgs/Logo.png" mode=""></image>
				</view>
				<view class="txt">
					<text class="uni-h3 title">{{ title }}</text>
				</view>
			</view>
			<!-- 账号密码 -->
			<view class="userinfo">
				<form @submit="formSubmit">
					<view class="usercode">
						<image class="icon" src="../../static/imgs/usercode.png" mode=""></image>
						<input class="code" name="code" placeholder="请输入柜员号"/>
					</view>
					<view class="password">
						<image class="icon" src="../../static/imgs/userpassword.png" mode=""></image>
						<input class="pwd" password name="pwd" placeholder="请输入密码" />
					</view>
					<view class="submit">
						<button class="sumbit_btn" form-type="submit" :disabled="submitBtn" :loading="loading">登录</button>
					</view>
				</form>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: '贵州赫章农商银行绩效管理系统',
				submitBtn: false,
				loading: false
			}

		},
		onLoad() {},
		methods: {

			formSubmit(e) {
				this.submitBtn = true
				this.loading = true
				let formdata = e.detail.value

				// 验证规则
				if (!formdata.code || !formdata.pwd) {
					uni.showToast({
						title: '请输入柜员号或密码',
						icon: 'none',
					})
					this.submitBtn = false
					this.loading = false
				} else {
					// 请求接口
					
					// uni.request({
					// 	url: 'http://v.juhe.cn/historyWeather/province',
					// 	data: {
					// 		key: 'b047e1a8936020a636a121f5c39de596'
					// 	},
					// 	success(res) {
					// 		console.log(res)
					// 	}
					// })
					this.$request({
						url: 'login', 
						method: 'POST',
						data: formdata
					}).then(res => {
						if (res.data) {
							let data = {
								token: res.reToken,
								userInfo: JSON.stringify(res.data),
								usercode: res.data.usercode
							}
							
							this.$store.commit('login', data)
							
							uni.switchTab({
								url: '/pages/index/index',
								success() {
									uni.showToast({
										title: '登录成功',
									})
								}
							})
							this.loading = false
							this.submitBtn = false
						}
					}).catch(err => {
						this.loading = false
						this.submitBtn = false
						uni.showToast({
							title: err,
							icon: 'none'
						})
					})
				}
			},
		}
	}
</script>

<style lang="scss" scoped>
	.content {
		background: url(../../static/imgs/logobgc.png) no-repeat;
		background-position: center top;
		background-size: 100% 536upx;

		.logo {
			padding-bottom: 50upx;

			.logo-icon {
				height: 306upx;
				display: flex;
				justify-content: center;
				align-items: center;

				.icon {
					padding-top: 78upx;
					width: 150upx;
					height: 150upx;
				}
			}

			.txt {
				display: flex;
				justify-content: center;
				align-items: center;
				color: #fff;

				.title {
					letter-spacing: 5upx;
					text-shadow: 0upx 0upx 20upx rgba($color: #2240A4, $alpha: .5);
				}
			}
		}

		.userinfo {
			padding: 80upx 40upx 0;
			border-top-left-radius: 40upx;
			border-top-right-radius: 40upx;
			background-color: #fff;

			.icon {
				width: 47upx;
				height: 47upx;
				margin-left: 50upx;
				margin-right: 20upx;
			}

			.usercode,
			.password {
				height: 96upx;
				display: flex;
				align-items: center;
				border: 1px solid $borderColor;
				border-radius: 48upx;
				margin-bottom: 70upx;
				.code,
				.pwd{
					flex: 1;
				}
			}

			.submit {
				margin-top: 90upx;
			}

			.sumbit_btn {
				height: 90upx;
				line-height: 90upx;
				border-radius: 45upx;
				background-color: $mainColor;
				color: #fff;
				font-weight: 700;
				font-size: 32upx;
				box-shadow: 0upx 0upx 20upx $shoedColor;
			}
		}
	}
</style>
