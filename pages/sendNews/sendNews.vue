<template>
	<view class="send-news">
		<textarea :value="text" placeholder="#超级程序员的热门话题" />
		<view class="image-list" >
			<image :src="url" mode="aspectFill" v-for="(url , index) in news.imgList" :key="index"></image>
		</view>
		<a-upload @choose="chooseImage"></a-upload>
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
			chooseImage(imageList,filesList) {
				console.log(imageList,filesList)
			}
		}
	}
</script>

<style lang="scss" scoped>
.send-news{
	width: 100%;
	height: 100%;
	
	textarea{
		width: 100%;
		height: 400rpx;
		padding: 30rpx;
		box-sizing: border-box;
		background-color: #FFFFFF;
	}
	
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
