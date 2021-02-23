import Vue from 'vue'
import App from './App'

import store from './store/index'

import { request } from './api/index.js'
Vue.prototype.$request = request

import dayjs from 'dayjs'
Vue.prototype.$dayjs = dayjs

import {isChinese} from 'common/lib/untis.js'
Vue.prototype.$isChinese = isChinese


Vue.config.productionTip = false


App.mpType = 'app'

const app = new Vue({
	...App,
	store
})
app.$mount()
