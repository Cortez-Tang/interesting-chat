<template>
	<view class="upload">
		<view class="image-item" v-for="(url, index) in imageList" :key="index" @click="previewImage(index)">
			<image :src="url" mode="aspectFill"></image>
		</view>
		<view class=" image-item" @click="chooseImage">
			<view class="add-image">
				<uni-icons type="camera" size="30"></uni-icons>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				imageList: [],
				filesList: [],
			}
		},
		methods: {
			chooseImage() {
				const _ = this
				uni.chooseImage({
					success(res) {
						_.imageList = [..._.imageList, ...res.tempFilePaths]
						_.filesList = [..._.filesList, ...res.tempFiles]
						
						_.$emit('choose',res.tempFilePaths,res.tempFiles)
						
					}
				})
			},
			previewImage(index) {
				const _ = this
				uni.previewImage({
					current:index,
					urls:_.imageList,
					indicator:'number',
					loop:true
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
	}
</style>
