<template name="mytable">
	<view class="content">
		<!-- 表格 -->
			<view class="table" :style="{height: cutTableHeight}">
				<!-- 固定表头 -->
				<view class="tr headerwarp" :style="{width: optionstyle.hWidth + 'upx'}">
					<view :style="{width: optionstyle.hWidth + 'upx', height: optionstyle.tHeight+ 'upx'}" class="th" v-for="(item,index) in list.headerlist" :key="index">{{ item.title }}</view>
				</view>

				<scroll-view scroll-x="true" class="scrolly-body" enable-flex="true" :style="{left: optionstyle.hWidth+'upx'}">
					<view class="body-main" :style="{width: cuutBodyWidth}">
						<view class="tr tbody" v-for="(item,index) in list.bodylist" :key="index">
							<view :style="{width: optionstyle.bWidth + 'upx', height: optionstyle.tHeight+ 'upx'}"  class="td" v-for="(j,k) in list.headerlist" :key='k'>
								<!-- 判断是否可以点击 -->
								<text v-if="list.headerlist[k].isCilck" class="colorTxt txt" @tap="toDetail(item,list.headerlist[k].path)">
									{{item[list.headerlist[k].key]}}
								</text>
								<text v-else class="txt">
									{{ item[list.headerlist[k].key] ? item[list.headerlist[k].key] : '/'}} 
								</text>
							</view>
						</view>
					</view>
				</scroll-view>
			</view>
	</view>
</template>

<script>
	export default {
		props: {
			// 表格数据配置
			list: {
				type: Object,
				value: {
					headerlist: [],   //  头部数据
					bodylist: []   // 内容
				}
			},
			// 表格样式配置
			optionstyle: {
				type: Object,
				value: {
					tHeight: '180',   // 头部每个单元格的高度
					hWidth: '180',   // 头部每个单元格的宽度
					bWidth: '200'   // 内容每个单元格的宽度
				}
			}
		},
		data() {
			return {
				num: this.list.bodylist.length
			};
		},
		computed:{
			// 计算table内容的宽度
			cuutBodyWidth: function () {
				let screenWidth = 0
				let windowWidth = 0
				uni.getSystemInfo({
					success(e) {
						screenWidth = e.screenWidth
						windowWidth = e.windowWidth
					}
				})
				// 按照750宽的屏幕计算剩下的宽度
				let remainWidth =  (screenWidth*2) - this.optionstyle.hWidth
				// 标准宽度
				let width =  this.optionstyle.bWidth * (this.list.bodylist.length ) + (+this.optionstyle.hWidth)
				if ( (remainWidth - width) >= 0 ) {
					this.optionstyle.bWidth = remainWidth 
					return remainWidth + (+this.optionstyle.hWidth) + 'upx'
				} else {
					return width + 'upx'
				}
			},
			cutTableHeight: function() {
				let height = this.optionstyle.tHeight* (this.list.headerlist.length)
				return height + 'upx'
			}
		},
		watch:{
			num: function () {
				console.log(this.list.bodylist.length)
			}
		},
		onLoad() {
			
		},
		methods: {
			toDetail(item,path) {
				let param = JSON.stringify(item)
				uni.navigateTo({
					url: `${path}?data=${param}`
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.content {
		position: relative;
		.table {
			background-color: #fff;

			.headerwarp {
				position: absolute;
				box-shadow: 10upx 0upx 10upx -10upx rgba($color: #000, $alpha: .3);
				z-index: 10;
				
				.th{
					padding:0 20upx;
					background-color: #f9f9f9;
					box-sizing: border-box;
					font-weight: 700;
					font-size: 26upx;
					display: flex;
					align-items: center;
					&:nth-child(odd) {
						background-color: #fff;
					}
				}
			}

			.scrolly-body {
				position: absolute;
				
				z-index: 9;
				.body-main {
					display: flex;
				}
				.tbody {
					// width: 200upx;
					.td{
						background-color: #f9f9f9;
						padding: 0 20upx;
						box-sizing: border-box;
						&:nth-child(odd) {
							background-color: #fff;
						}
					}
					
				}
			}
			
			.td{
				display: flex;
				justify-content: center;
				align-items: center;
				.txt {
					font-size: 26upx;
					color: #444;
				}
				.colorTxt {
					display: inline-block;
					width: 100%;
					height: 100%;
					color: #419fff;
					display: flex;
					justify-content: center;
					align-items: center;
				}
			}
			
		}
	}
</style>
