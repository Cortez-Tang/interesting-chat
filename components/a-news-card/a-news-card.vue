<template>
	<view class="news-card">
		<view class="news-card-head">
			<image src="../../static/20160806085922_hZSti.jpeg"></image>
			<text class="name">超级程序员</text>
		</view>
		<view class="news-card-image" v-if="item.imageList.length === 1">
			<image :src="item.imageList[0]" mode="aspectFill" @click="previewImage(0)"></image>
		</view>
		
		<view class="news-card-image-list" v-else-if="item.imageList.length>1">
			<view class="image-item" v-for="(url,index) in item.imageList" :key="index">
				<image :src="url" @click="previewImage(index)" mode="aspectFill"></image>
			</view>
		</view>
		<view class="news-card-video" v-else-if="item.videoUrl">
			<video :src="item.videoUrl" controls></video>
		</view>
		<view class="news-card-content">
			<view class="news-card-content-baseInfo">
				<text class="title">#超级程序员的热议话题</text>
				<text class="date">{{ item.date }}</text>
			</view>
			<view class="news-card-content-text">
				<audio :src="item.recorderUrl" name="语音" :action="audioAction" controls author="超级程序员" v-if="item.recorderUrl" ></audio>
				<text v-else>
					{{ item.text }}
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
		props: {
			item: {
				type: Object,
				default: () => ({})
			}
		},
		data() {
			return {

			};
		},
		methods: {
			previewImage(index) {
				const _ = this
				uni.previewImage({
					current: index,
					urls: [..._.item.imageList],
					indicator:'number',
					loop:true
				})
			}
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
				height: 400rpx;
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

		&-video{
			width: 100%;
			height: 360rpx;
			
			video{
				width: 100%;
				height: 100%;
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
				padding-top: 20rpx;

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
