import Vue from 'vue'

import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		newsList: [
			{
				text:'达大厦阿大数据黄金卡仕达阖家安康化考试成绩可安环科啊',
				imageList:[
					'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1811291600,2390482842&fm=26&gp=0.jpg'
				],
				date:'12/12 08:32',
				
			}
		]
	},
	getters: {
		newsList(state) {
			return state.newsList
		}
	},
	mutations: {
		sendNews(state, news) {
			state.newsList.unshift(news)
		}
	},
	actions: {

	}
})

export default store
