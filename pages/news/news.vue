<template>
	<view class="news">
		<uni-card :title="item.title" thumbnail="https://img-cdn-qiniu.dcloud.net.cn/new-page/uni.png" :extra="item.date"  v-for="item in newsList" :key="item.id" :is-shadow="true">
		    内容主体，可自定义内容及样式
		</uni-card>
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

<style lang="scss">
.news{
	
}
</style>
