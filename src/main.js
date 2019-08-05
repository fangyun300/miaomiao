import Vue from 'vue'
import App from './App.vue'
import router from './routers'

import axios from 'axios'

Vue.config.productionTip = false
Vue.prototype.$axios = axios

Vue.filter('setWH', function(msg, wh){
	return msg.replace(/w\.h/, wh)
})

new Vue({
	router,
  render: h => h(App),
}).$mount('#app')
