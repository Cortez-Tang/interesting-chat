<template>
	<view class="map">
		<!-- <map :latitude="location.latitude" :longitude="location.longitude"  :show-compass="true" :enable-3D="true" ></map> -->
		<!-- <uni-popup ref="popup" type="bottom">底部弹出 Popup</uni-popup> -->
		<web-view src="https://apis.map.qq.com/tools/poimarker?type=0&marker=coord:39.96554,116.26719;title:成都;addr:北京市海淀区复兴路32号院&key=O5ABZ-XIXYD-JSB42-HZFQE-H2YRO-J7F2T&referer=趣聊-全部端"></web-view>
<!-- 		<web-view src="https://apis.map.qq.com/tools/poimarker?type=1&keyword=%e9%85%92%e5%ba%97&center=CurrentLocation&radius=1000&key=O5ABZ-XIXYD-JSB42-HZFQE-H2YRO-J7F2T&referer=趣聊-全部端"></web-view> -->
<!-- 		<web-view src="https://apis.map.qq.com/tools/streetview?pano=10131053140812095958800&heading=7&pitch=-13&key=O5ABZ-XIXYD-JSB42-HZFQE-H2YRO-J7F2T&referer=趣聊-全部端"></web-view> -->
	</view>
</template>

<script>
	export default {
		data() {
			return {
				location: {

				}
			};
		},
		async onLoad() {
			this.location = await this.getLocation()
			console.log(this.location)
		},
		methods: {
			getLocation() {
				return new Promise((resolve, reject) => {
					uni.getLocation({
						type: 'gcj02 ',
						success(res) {
							resolve(res)
						},
						fail(err) {
							reject(err)
						}
					})
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.map {
		position: absolute;
		width: 100%;
		height: 100%;

		map {
			width: 100%;
			height: 100%;
		}
	}
</style>
