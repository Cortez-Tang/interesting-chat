<template>
	<view class="news-card">
		<view class="news-card-head">
			<image src="../../static/20160806085922_hZSti.jpeg"></image>
			<text class="name">超级程序员</text>
		</view>
		<view class="news-card-image-list">
			<view class="image-item" v-for="num in 4" :key="num">
				<image src="../../static/20160806085922_hZSti.jpeg" mode="aspectFill"></image>
			</view>
		</view>
		<view class="news-card-content">
			<view class="news-card-content-baseInfo">
				<text class="title">#超级程序员的热议话题6</text>
				<text class="date">8/14 12:44</text>
			</view>
			<view class="news-card-content-text">
				<text>
					是的撒as打上是大奥术大师大所大所多撒大所多撒多所多所多群无多所多撒阿大声道大大的阿松大的撒的撒大是的撒但是阿达阿松大阿达阿松大阿松大阿达是的撒的撒的阿松大啊倒萨大苏打大撒的大声地
				</text>
			</view>
			<view class="news-card-content-other">
				<view class="good-list">
					<view class="good">
						<image src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1811291600,2390482842&fm=26&gp=0.jpg"></image>
						<image src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1584599359965&di=e524bb153b4a6ed467869d27f4789f01&imgtype=0&src=http%3A%2F%2Fimg1.3lian.com%2Fgif%2Fmore%2F11%2F2012%2F03%2Fe260e9acb2ffdf71f2c260d90ff5100d.jpg"></image>
						<image src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1811291600,2390482842&fm=26&gp=0.jpg"></image>
						<image src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1584599359965&di=e524bb153b4a6ed467869d27f4789f01&imgtype=0&src=http%3A%2F%2Fimg1.3lian.com%2Fgif%2Fmore%2F11%2F2012%2F03%2Fe260e9acb2ffdf71f2c260d90ff5100d.jpg"></image>
					</view>
				</view>
				<view class="tab-list">

					<view class="comment">

					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			};
		},
		methods: {
			
		}
	}
</script>

<style lang="scss" scoped>
	.news-card {
		width: 100%;
		margin: 30rpx 0;
		background-color: #FFFFFF;
		box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);

		&-head {
			padding: 20rpx;
			display: flex;
			align-items: center;

			image {
				width: 60rpx;
				height: 60rpx;
				border-radius: 50%;
			}

			.name {
				font-size: 32rpx;
				font-weight: bold;
				padding-left: 20rpx;
			}
		}

		&-image {
			image {
				width: 100%;
				height: 500rpx;
			}
		}

		&-image-list {
			display: flex;
			flex-wrap: wrap;
			.image-item {
				width: 33.333333%;
				height: 200rpx;
				padding: 0 8rpx;
				margin-bottom: 20rpx;
				box-sizing: border-box;


				image {
					width: 100%;
					height: 100%;
				}
			}
		}



		&-content {
			padding: 20rpx;
			font-size: 28rpx;

			&-baseInfo {
				display: flex;
				justify-content: space-between;

				.title {
					font-size: 32rpx;
					font-weight: bold;
				}

				.date {
					color: #666666;
				}
			}

			&-text {
				padding: 20rpx 0;
				font-size: 28rpx;
			}

			&-other {
				display: flex;
				justify-content: space-between;

				.good-list {
					.good {
						image {
							width: 40rpx;
							height: 40rpx;
							overflow: hidden;
							border-radius: 50%;
						}
					}
				}
			}
		}


	}
</style>
