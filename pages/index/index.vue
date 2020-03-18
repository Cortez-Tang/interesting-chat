<template>
	<view class="home">
		<swiper :indicator-dots="true"  :duration="1000" previous-margin="30rpx" next-margin="30rpx">
			<swiper-item v-for="(url,index) in 4" :key="index">
				<image src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1584549103407&di=5ce3d9020b6ed2fb0e947f543e4baeae&imgtype=0&src=http%3A%2F%2Fimg2.imgtn.bdimg.com%2Fit%2Fu%3D1804142982%2C1901782595%26fm%3D214%26gp%3D0.jpg"></image>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				href: 'https://uniapp.dcloud.io/collocation/pages?id=easycom'
			}
		},
		methods: {

		}
	}
</script>

<style lang="scss" scoped>
	.home {
		swiper {
			height: 300rpx;

			swiper-item {
				padding: 0 10rpx;
				box-sizing: border-box;
			}

			image {
				width: 100%;
				height: 100%;
			}
		}
	}
</style>
