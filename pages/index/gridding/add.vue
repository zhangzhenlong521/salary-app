<template>
	<view class="add">
		<view class="content">
			<form @submit="formSubmit" class="form-main">
				<view class="form-item-main">
					<view class="form-item">
						<view class="title">客户名称</view>
						<view class="item-content">
							<input type="text" v-model="form.a" name='a' placeholder="请输入客户名称" />
						</view>
					</view>
					<view class="form-item">
						<view class="title">客户类型</view>
						<view class="item-content">	
						<radio-group name='b'>
								<label class="radio"><radio value="农户" checked="true" color="#4c64fe"/>农户</label>
								<label class="radio"><radio value="城镇居民" color="#4c64fe"/>城镇居民</label>
							</radio-group>
						</view>
					</view>
					<view class="form-item">
						<view class="title">家庭关系</view>
						<view class="item-content">
							<input type="text" v-model="form.c" name='c' placeholder="请输入与户主的关系" />
						</view>
					</view>
					<view class="form-item">
						<view class="title">性别</view>
						<view class="item-content">
							<radio-group name='d'>
								<label class="radio"><radio value="男" checked="true" color="#4c64fe"/>男</label>
								<label class="radio"><radio value="女" color="#4c64fe"/>女</label>
							</radio-group>
						</view>
					</view>
					<view class="form-item">
						<view class="title">民族</view>
						<view class="item-content">
							<input type="text" v-model="form.e" name='e' placeholder="请输入民族" />
						</view>
					</view>
					<view class="form-item">
						<view class="title"><text style="color: red;">*</text>身份证号</view>
						<view class="item-content">
							<input type="idcard" v-model="form.g" name='g' placeholder="请输入身份证号" />
						</view>
					</view>
					<view class="form-item">
						<view class="title">户籍地址</view>
						<view class="item-content">
							<input type="text" v-model="form.h" name='h' placeholder="请输入户籍地址" />
						</view>
					</view>
					<view class="form-item">
						<view class="title">乡-镇</view>
						<view class="item-content">
							<input type="text" v-model="form.j" name='j' class="disColor" disabled />
						</view>
					</view>
					<view class="form-item">
						<view class="title">网格名称</view>
						<view class="item-content">
							<input type="text" v-model="form.k" name='k' class="disColor" disabled/>
						</view>
					</view>
					<view class="form-item">
						<view class="title">所属机构</view>
						<view class="item-content">
							<input type="text" v-model="form.deptcode" name='deptcode' class="disColor" disabled />
						</view>
					</view>
					<view class="form-item">
						<view class="title">户籍编码</view>
						<view class="item-content">
							<input type="number" v-model="form.hh" name='hh' placeholder="请输入户籍地址" />
						</view>
					</view>
				</view>
				<view class="form-btn">
					<button form-type="submit" :disabled="submitBtn" :loading="submitLoading" class="sumbit_btn">保存</button>
				</view>
			</form>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				griddingInfo: null,
				submitBtn: false,
				submitLoading: false,
				form: {
					a: '',
					b: '',
					c: '',
					d: '',
					e: '',
					g: '',
					j: '',
					k: '',
					deptcode: '',
					hh: ''
				},
				current: 0
			}
		},
		onLoad(param) {
			this.griddingInfo = JSON.parse(param.data)
			if (this.griddingInfo) {
				this.form.j = this.griddingInfo.c
				this.form.k = this.griddingInfo.d
				this.form.deptcode = this.griddingInfo.a
			}
		},
		methods: {
			// 提交表单
			formSubmit(e) {
				let data = e.detail.value
				// 身份证号码校验
				let pattern = /(^\d{8}(0\d|10|11|12)([0-2]\d|30|31)\d{3}$)|(^\d{6}(18|19|20)\d{2}(0[1-9]|10|11|12)([0-2]\d|30|31)\d{3}(\d|X|)$)/
				if ( !data.g ) {
					return uni.showToast({
						title: "请输入身份证号码",
						icon: 'none'
					})
				}
				if ( !pattern.test(data.g )) {
					return uni.showToast({
						title: '身份证号码错误,请重新输入',
						icon: 'none'
					})
				}
				
				// 其它信息提示填写
				for (let key in data) {
					if( !data[key]) {
						uni.showModal({
							title: '您有其它信息未完善，是否继续提交信息？',
							success(e) {
								console.log(e)
								// 确认
								if (e.confirm) {
									console.log('ok')
									
									uni.navigateBack()
								}
								// 取消
								if (e.cancel) {
									console.log('no')
								}
							}
						})
					}
				}
			}
			
		}
	}
</script>

<style lang="scss" scoped>
	.content {
		padding-top: 20upx;
		height: 100vh;

		.form-main {
			.form-item-main {
				padding: 0 20upx;
				background-color: #fff;

				.form-item {
					display: flex;
					align-items: center;
					height: 120upx;
					border-top: 1px solid #f5f5f5;

					&:last-child() {
						border-top: none;
					}

					.title {
						flex: 1;
						font-style: 28upx;
						font-weight: 400;
					}

					.item-content {
						width: 460upx;
						margin-left: 90upx;
						color: #222;
						.radio {
							margin-left: 110upx;
							&:first-child{
								margin-left: 0;
							}
						}
						.disColor {
							color: #999;
						}
					}
				}
			}

			.form-btn {
				padding: 0 20upx 80upx;
				margin-top: 63upx;
				.sumbit_btn {
					height: 80upx;
					border-radius: 40upx;
					color: #fff;
					font-weight: 400;
					font-size: 30upx;
					line-height: 90upx;
					background-color: $mainColor;
					line-height: 80upx;
				}
			}
		}
	}
</style>
