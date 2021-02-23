<template>
	<view class="general">
		<view class="content are">
			<view class="qiun-columns">
				<view class="txt-mian">
					<text class="title">{{ sumhouse }}</text>
				</view>
				<view class="qiun-charts">
					<canvas canvas-id="general" id="general" class="charts" @touchstart="touchColumn"></canvas>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	var _self;
	var canvaColumn=null;
	import uCharts from '../../../js_sdk/u-charts/u-charts/u-charts.js'
	import { generalEchartData } from '../../../testData/test.js'
	export default {
		data() {
			return {
				cWidth:'',
				cHeight:'',
				pixelRatio:1,
				
				// 标准数据格式
				chartData: {
				  categories: [],
				  series: [
						{
							name: "已开发",
							color: '#2c9ae8',
							legendShape: 'rect',
							textColor: '#444',
							data: []
						},
						{
							name: "待开发",
							color: '#05c1a9',
							legendShape: 'rect',
							data: [],
							textColor: '#444',
						}
					]
				},
					
				// 总户数
				sumhouse: 0,
				
				params: null
				
			}
		},
		onLoad(option) {
			this.params = JSON.parse(option.data)
			this.getGeneralEchartsData()
			
			_self = this
			this.cWidth = uni.upx2px(690)
			this.cHeight = uni.upx2px(650)
		},
		methods: {
			// 数据处理
			dispose (list) {
				// let list = list.data
				console.log(list)
				let x = []
				let y1 = []
				let y2 = []
				list.forEach((item,index) => {
					if (item.counths) {
						// let str = item.counths.split('：')[1]
						// let num = str.split('户')[0]
						this.sumhouse = item.counths
					}
					
					if (item.type){
						let str = item.type.split('已有')[1]
						let key = str.split(':')[0]
						let value = str.split(':')[1].split('户')[0]
						x.push(key)
						y1.push(value)
					}
					if (item.dkftype) {
						let str = item.dkftype.split(':')[1]
						let value = str.split('户')[0]
						y2.push(value)
					}
				})
				this.chartData.categories = x
				this.chartData.series[0].data = y1
				this.chartData.series[1].data = y2
			},
			
			// 绘图
			showColumn(chartData){
				canvaColumn = new uCharts({
					$this:_self,
					canvasId: 'general',
					type: 'column',
					legend:{show:true},
					fontSize:11,
					background:'#FFFFFF',
					pixelRatio: _self.pixelRatio,  // 像素比，app必须是1
					animation: true,
					categories: chartData.categories,  // 数据X轴
					series: chartData.series,  // 数据 Y 轴
					xAxis: {
						disableGrid: true,
					},
					yAxis: {
						disabled:true,
						gridColor: '#f5f5f5'
					},
					
					legend: {
						margin: 30,
						fontSize: 12,
						fontColor: '#666666',
						itemGap: 50
					},
					dataLabel: true,
					width: _self.cWidth * _self.pixelRatio,
					height: _self.cHeight * _self.pixelRatio,
					extra: {
						column: {
							type:'group',
							width: _self.cWidth*_self.pixelRatio*0.3/chartData.categories.length,
						}
					}
				});
			},
			
			// 交互
			touchColumn(e){
				canvaColumn.showToolTip(e, {
					format: function (item, category) {
						if(typeof item.data === 'object'){
							return item.name + category  + ':' + item.data.value + '户'
						}else{
							return item.name + category  + ':' + item.data + '户'
						}
					}
				});
			},
			
			
			// 请求数据
			getGeneralEchartsData (){
				console.log(this.params)
				let that = this
				this.$request({
					url: 'gridstate',
					method: 'POST',
					data:{
						c: that.params.c,
						d: that.params.d,
						f: that.params.f
					}
				}).then(res=>{
					that.dispose(res.data)
					that.showColumn(that.chartData)
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.content {
	}
	.qiun-columns {
		background-color: #fff;
		padding: 50upx 20upx 0;
		border-radius: 20upx;
		.txt-mian {
			display: flex;
			justify-content: center;
			align-items: center;
			padding-bottom: 70upx;
			.title {
				font-size: 30upx;
				font-weight: 400;
				color: #333;
			}
		}
	}
	.qiun-charts {
		.charts {
			width: 690upx;
			height: 650upx;
		}
	}
</style>
