import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
	// 数据
	state: {
		token: null,
		userInfo: null,
		usercode: null
	},
	// 计算属性
	getters: {
		
	},
	// 方法
	mutations: {
		login (state, value) {
			state.token = value.token
			uni.setStorageSync('token',value.token)
			
			state.userInfo = value.userInfo
			uni.setStorageSync('userInfo',value.userInfo)
			
			state.usercode = value.usercode
			uni.setStorageSync('usercode',value.usercode)
		}
	},
	// 异步方法
	actions: {}
})

export default store