<template>
	<view class="news">
		<a-news-card v-for="num in 4" :key="num"></a-news-card>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				newsList:[]
			};
		},
		onReady() {
			this.getNewsData()
		},
		methods:{
			async getNewsData() {
				this.newsList = [
					{
						id:'wqqwe123',
						title:'终极无敌单身夜',
						date:`${ new Date().getMonth()+1 }/${ new Date().getDate() } ${new Date().getHours()}:${ new Date().getMinutes()}`
					},
					{
						id:'wq23qwe',
						title:'终极无敌单身夜',
						date:`${ new Date().getMonth()+1 }/${ new Date().getDate() } ${new Date().getHours()}:${ new Date().getMinutes()}`
					},
					{
						id:'wqqw454e',
						title:'终极无敌单身夜',
						date:`${ new Date().getMonth()+1 }/${ new Date().getDate() } ${new Date().getHours()}:${ new Date().getMinutes()}`
					}
				]
			}
		}
	}
</script>

<style lang="scss" scoped>
.news{
	&-head{
		position: relative;
		height: 360rpx;
		
		image{
			width: 100%;
			height: 100%;
		}
	}
	
	&-content{
		image{
			width: 100%;
			height: 500rpx;
		}
		&-text{
			padding: 20rpx 0;
		}
	}
}

</style>
