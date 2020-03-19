<template>
	<view class="news">
		<view class="news-head">
			<text class="title">#当前热门话题：</text>
			<text class="value">超级程序员</text>
			<view class="send_btn" @click="goRoute">
				发表热评
			</view>
		</view>
		<a-news-card v-for="num in 4" :key="num"></a-news-card>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				newsList: []
			};
		},
		onReady() {
			this.getNewsData()
		},
		methods: {
			async getNewsData() {
					this.newsList = [{
							id: 'wqqwe123',
							title: '终极无敌单身夜',
							date: `${ new Date().getMonth()+1 }/${ new Date().getDate() } ${new Date().getHours()}:${ new Date().getMinutes()}`
						},
						{
							id: 'wq23qwe',
							title: '终极无敌单身夜',
							date: `${ new Date().getMonth()+1 }/${ new Date().getDate() } ${new Date().getHours()}:${ new Date().getMinutes()}`
						},
						{
							id: 'wqqw454e',
							title: '终极无敌单身夜',
							date: `${ new Date().getMonth()+1 }/${ new Date().getDate() } ${new Date().getHours()}:${ new Date().getMinutes()}`
						}
					]
				},
			goRoute() {
				console.log('123')
				uni.navigateTo({
					// url:'../../pages/map/map'
					url: '../sendNews/sendNews'
				})
			}

		}
	}
</script>

<style lang="scss" scoped>
	.news {
		&-head {
			height: 110rpx;
			display: flex;
			padding: 0 30rpx;
			align-items: center;
			background-color: #FFFFFF;

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
