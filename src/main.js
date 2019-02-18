import Vue from 'vue'
import Vuetify from 'vuetify'
import VeeValidate from "vee-validate";
import App from './App.vue'
import router from './router'
import store from './store'
import Axios from 'axios'
import 'vuetify/dist/vuetify.min.css'

Vue.prototype.$http = Axios;

const token = localStorage.getItem('user-token')
if (token) {
  Vue.prototype.$http.defaults.headers.common['Authorization'] = token
}

Vue.config.productionTip = false

Vue.config.formApiUrl = process.env.FORM_API_URL

Vue.use(Vuetify)

Vue.use(VeeValidate)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
