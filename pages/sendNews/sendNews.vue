<template>
	<view class="send-news">
		<textarea :value="text" placeholder="请输入内容" />
		<view class="image-list" >
			<image :src="url" mode="aspectFill" v-for="(url , index) in news.imgList" :key="index"></image>
		</view>
		<text class="upload" @click="chooseImage">上传图片</text>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				news:{
					text:'',
					imgList:[]
				}
			};
		},
		methods: {
			chooseImage() {
				const _ = this
				 uni.chooseImage({
					success(res){
						_.news.imgList = [ ..._.news.imgList, ...res.tempFilePaths ]
						console.log(_.news.imgList,_.news.imgList.length)
					}
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
.send-news{
	width: 100%;
	height: 100%;
	
	.image-list{
		display: flex;
		padding: 20rpx;
		flex-wrap: wrap;
		
		image{
			width: 170rpx;
			height: 170rpx;
		}
	}
}
</style>
