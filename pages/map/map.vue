<template>
	<view class="map">
		<map :latitude="location.latitude" :longitude="location.longitude"  :show-compass="true" :enable-3D="true" ></map>
		<!-- <uni-popup ref="popup" type="bottom">底部弹出 Popup</uni-popup> -->
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
			// this.$refs.popup.open()
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
