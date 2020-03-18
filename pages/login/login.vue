<template>
	<view class="login">
		<text class="login-row1">有趣的世界，</text>
		<text class="login-row2">寻找有趣的灵魂</text>
		<button type="default" @click="goRoute"> 加入我们 </button>
		<image src="../../static/20160806085922_hZSti.jpeg"></image>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			};
		},
		methods:{
			goRoute(){
				uni.login({
					success(res,err) {
						console.log(res,err)
						uni.reLaunch({
							url:'../index/index'
						})
					},
					fail() {
						console.log('err')
					}
				})
				
			}
		}
	}
</script>

<style lang="scss" scoped>
	.login {
		position: fixed;
		width: 100%;
		height: 100%;
		
		&-row1{
			top: 240rpx;
			left: 100rpx;
		}
		
		&-row2{
			top: 340rpx;
			left: 280rpx;
		}
		
		image{
			width: 100%;
			height: 100%;
		}
		
		text{
			position: absolute;
			font-size: 50rpx;
			color: #FFFFFF;
		}
		
		button{
			position: absolute;
			transform: translate3d(-50%,0,0);
			left: 50%;
			bottom: 150rpx;
			width: 280rpx;
		}
	}
</style>
