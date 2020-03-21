<template>
	<view class="send-news">
		<map :latitude="location.latitude" :longitude="location.longitude" :markers="markers"></map>
		<view class="send-head">
			<view class="title">
				#超级程序员的热门话题
			</view>
			<view class="btn">
				<view class="mark" v-if="disabeld">
				</view>
				<text @click.self="handleSend">发送</text>
			</view>
		</view>
		<view class="text">
			<view class="recorder-body" v-if="recorderUrl!==''">
				<view class="title">#超级程序员的热门话题</view>
				<audio :src="recorderUrl" name="语音" :action="audioAction" controls author="超级程序员"></audio>
			</view>
			<textarea :value="text" placeholder="#超级程序员的热门话题" @input="onInput" v-else />
			<image src="../../static/_record.png" @touchstart="onStart" @touchend="onEnd"></image>
		</view>
		<a-upload @choose="chooseImage"></a-upload>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				text:'',					
				imgList:[],
				location: {},
				markers: [],
				recorder:null,
				recorderUrl:''
			};
		},
		computed:{
			disabeld() {
				if(this.text === '' && this.recorderUrl === '' ){
					return true
				} else {
					return false
				}
			}
		},
		onLoad() {
			this.getLocation()
			this.getRecorder()
			this.recorder.onStop((res)=>{
				this.recorderUrl = res.tempFilePath;
			})
		},
		methods: {
			chooseImage(imageList,filesList) {
				this.imgList = imageList
			},
			onInput(e) {
				this.text = e.detail.value
			},
			handleSend() {
				const date = new Date()
				this.$store.commit('sendNews',{
					text:this.text,
					imageList:this.imgList,
					date:`${date.getMonth()+1}/${date.getDate()}  ${date.getHours()}:${date.getMinutes()}`,
					recorderUrl:this.recorderUrl
				})
				
				uni.navigateBack({
					
				})
			},
			getLocation() {
				console.log('123')
				const _ = this
				uni.authorize({
					scope: 'scope.userLocation',
					success() {
						uni.getSetting({
							success(res) {
								console.log(res)
							}
						})
						uni.getLocation({
							type: 'gcj02',
							success(res) {
								_.location = res
								_.markers.push({
									id: '1231',
									latitude: res.latitude,
									longitude: res.longitude,
									iconPath: '/static/icon-01-sel.png',
									width: 20,
									height: 20
								})
							}
						})
					},
					fail() {
						uni.showModal({
							title:'提示',
							content:'是否打开设置',
							success(res){
								if(res){
									uni.openSetting({
										success(res){
											if(res.authSetting['scope.userLocation']){
												_.getLocation()
											}
										}
									})
								}
							}
						})
						console.log('用户取消了授权')
					}
				})
			
			},
			getRecorder() {
				this.recorder = uni.getRecorderManager()
			},
			onStart() {
				const _ = this
				
				uni.getSetting({
					success(res){
						if(res.authSetting['scope.record']){
							_.recorder.start({})
							uni.showLoading({
								title:'录音中……'
							})
						}else{
							uni.authorize({
								scope:'scope.record',
								fail() {
									uni.showModal({
										content:'是否同意打开录音权限？',
										success(res){
											if(res){
												uni.openSetting({
												})
											}
										}
									})
								}
							})
						}
					}
				})
				
			},
			onEnd() {
				this.recorder.stop()
				uni.hideLoading()
			}
		}
	}
</script>

<style lang="scss" scoped>
.send-news{
	width: 100%;
	height: 100%;
	map{
		width: 750rpx;
		height: 300rpx;
	}
	
	.send-head{
		width: 100%;
		height: 110rpx;
		padding: 0 20rpx;
		background-color: #FFFFFF;
		display: flex;
		justify-content: space-between;
		align-items: center;
		box-sizing: border-box;
		.title{
			font-size: 28rpx;
			font-weight: bold;
		}
		.btn{
			position: relative;
			font-size: 28rpx;
			color: #FFFFFF;
			background-color: #1989fa;
			width: 140rpx;
			height: 50rpx;
			text-align: center;
			line-height: 50rpx;
			font-weight: bold;
			overflow: hidden;
			border-radius: 12rpx;
			
			.mark{
				position: absolute;
				width: 100%;
				height: 100%;
				background-color: rgb(170,170,170);
				opacity: 0.3;
			}
			
			text{
				display: inline-block;
				width: 100%;
				height: 100%;
			}
		}
	}
	
	.text{
		width: 100%;
		height: 400rpx;
		position: relative;
		background-color: #FFFFFF;
		
		image{
			width: 100rpx;
			height: 100rpx;
			position: absolute;
			right: 20rpx;
			bottom: 20rpx;
			z-index: 999;
		}
		
		.recorder-body{
			width: 100%;
			height: 100%;
			padding: 30rpx;
			
			.title{
				font-size: 30rpx;
				color: #666666;
				padding-bottom: 30rpx;
			}
		}
	}
	
	textarea{
		width: 100%;
		height: 400rpx;
		padding: 30rpx;
		box-sizing: border-box;
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
