<template>
	<view class="map">
		<!-- <map :latitude="location.latitude" :longitude="location.longitude"  :show-compass="true" :enable-3D="true" ></map> -->
		<!-- <uni-popup ref="popup" type="bottom">底部弹出 Popup</uni-popup> -->
		<web-view src="http://192.168.50.129:8080/"></web-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				url:''
			};
		},
		async onLoad() {
			const location = await this.getLocation()
			this.url = `https://apis.map.qq.com/tools/poimarker?type=0&marker=coord:${location.latitude},${location.longitude};title:广州政府;addr:xx路线xx编号&key=O5ABZ-XIXYD-JSB42-HZFQE-H2YRO-J7F2T&referer=趣聊-全部端`
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
