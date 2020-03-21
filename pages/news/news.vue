<template>
	<view class="news">
		<view class="news-chart">
			<canvas canvas-id="canvasLineA" id="canvasLineA" class="charts" @touchstart="touchLineA"></canvas>
		</view>
		<view class="news-head">
			<view class="news-head-content">
				<text class="title">#当前热门话题：</text>
				<text class="value">超级程序员</text>
				<view class="send_btn" @click="goRoute">
					发表热评
				</view>
			</view>
		</view>
		<a-news-card v-for="(item,index) in newsList" :key="index" :item="item"></a-news-card>
	</view>
</template>

<script>
	import uCharts from '../../js_sdk/u-charts/u-charts/u-charts.js';

	let _ = null
	
	let canvaLineA

	export default {
		data() {
			return {
				cWidth: '',
				cHeight: '',
				pixelRatio: 1,
				canvaLineA:null,
				chartData: {
					categories: ['1月', '2月', '3月', '4月', '5月', '6月'],
					series: [{
						name: '话题热度',
						data: [5, 20, 45, 67, 80, 50],
						color: '#1989fa'
					}]
				}
			};
		},
		onReady() {
			this.getNewsData()
		},
		onLoad() {
			_ = this
			this.cWidth = uni.upx2px(750)
			this.cHeight = uni.upx2px(300)
			this.getData()
		},
		computed: {
			newsList() {
				return this.$store.getters.newsList
			}
		},
		methods: {
			getData() {
				this.showLineA('canvasLineA', this.chartData)
			},
			showLineA(canvasId, chartData) {
			   canvaLineA = new uCharts({
					$this: _,
					canvasId: canvasId,
					type: 'line',
					fontSize: 14,
					legend: {
						show: true
					},
					dataLabel: false,
					dataPointShape: true,
					background: '#FFFFFF',
					pixelRatio: _.pixelRatio,
					categories: chartData.categories,
					series: chartData.series,
					animation: true,
					xAxis: {
						type: 'grid',
						gridColor: '#CCCCCC',
						gridType: 'dash',
						dashLength: 8,
						format: (val) => {
							return val + '月'
						}
					},
					yAxis: {
						gridType: 'dash',
						gridColor: '#CCCCCC',
						dashLength: 8,
						splitNumber: 5,
						min: 10,
						max: 100,
						format: (val) => {
							return val + '%'
						}
					},
					width: _.cWidth * _.pixelRatio,
					height: _.cHeight * _.pixelRatio,
					extra: {
						line: {
							type: 'straight'
						}
					}
				});

			},
			touchLineA(e) {
			  canvaLineA.showToolTip(e, {
					format: function(item, category) {
						return category + ' ' + item.name + ':' + item.data
					}
				});
			},
			goRoute() {
				console.log('123')
				uni.navigateTo({
					url: '../sendNews/sendNews'
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.news {

		&-chart {
			width: 750rpx;
			height: 300rpx;
			background-color: #FFFFFF;
			padding-top: 30rpx;

			canvas {
				width: 750rpx;
				height: 300rpx;
			}
		}


		&-head {

			background-color: #FFFFFF;

			map {
				width: 100%;
				height: 300rpx;
			}

			&-content {
				height: 110rpx;
				display: flex;
				padding: 0 30rpx;
				align-items: center;

				.title {
					font-size: 32rpx;
					font-weight: bold;
				}

				.value {
					font-size: 32rpx;
					color: #999999;
				}

				.send_btn {
					margin-left: auto;
					font-size: 28rpx;
					color: #FFFFFF;
					background-color: #1989fa;
					width: 140rpx;
					height: 50rpx;
					text-align: center;
					line-height: 50rpx;
					font-weight: bold;
					border-radius: 12rpx;
				}
			}


		}

		&-content {
			image {
				width: 100%;
				height: 500rpx;
			}

			&-text {
				padding: 20rpx 0;
			}
		}
	}
</style>
