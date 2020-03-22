<template>
	<view class="upload">
		<view class="image-item" v-for="(url, index) in imageList" :key="index" @click="previewImage(index)">
			<image :src="url" mode="aspectFill"></image>
		</view>
		<view class=" image-item" @click="choose">
			<view class="add-image">
				<uni-icons type="camera" size="30"></uni-icons>
			</view>
		</view>
		<video :src="videoUrl" v-if="videoUrl" controls></video>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				imageList: [],
				videoUrl: ''
			}
		},
		methods: {
			choose() {
				const _ = this
				uni.showActionSheet({
					itemList: ['相片', '视频'],
					success(res) {
						if (res.tapIndex === 0) {
							if (_.videoUrl!=='') {
								uni.showToast({
									title: '选择视频后，不可再选照片！',
									icon: 'none'
								})
								return
							}
							_.chooseImage()
						} else {
							debugger
							if (_.imageList.length > 0) {
								uni.showToast({
									title: '选择照片后，不可再选视频！',
									icon: 'none'
								})
								return
							}
							_.chooseVideo()
						}
					}
				})
			},
			chooseImage() {
				const _ = this
				uni.chooseImage({
					success(res) {
						_.imageList = [..._.imageList, ...res.tempFilePaths]
						_.$emit('choose', _.imageList,'image')

					}
				})
			},
			chooseVideo() {
				const _ = this
				uni.chooseVideo({
					success(res) {
						console.log(res)
						_.videoUrl = res.tempFilePath
						_.$emit('choose', _.videoUrl,'video')
					}
				})
			},
			previewImage(index) {
				const _ = this
				uni.previewImage({
					current: index,
					urls: _.imageList,
					indicator: 'number',
					loop: true
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.upload {
		padding: 20rpx;
		display: flex;
		flex-wrap: wrap;

		.image-item {
			width: 25%;
			height: 160rpx;
			padding: 0 8rpx;
			margin-bottom: 20rpx;
			box-sizing: border-box;

			image {
				overflow: hidden;
				width: 100%;
				height: 160rpx;
				border-radius: 24rpx;
			}
		}

		.add-image {
			width: 100%;
			height: 160rpx;
			display: flex;
			justify-content: center;
			align-items: center;
			background-color: #f7f8fa;
			border-radius: 24rpx;
		}

		video {
			width: 750rpx;
			height: 360rpx;
		}

	}
</style>
