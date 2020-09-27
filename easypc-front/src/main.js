import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap'
import './assets/app.css'
import Vuesax from "vuesax"
import "vuesax/dist/vuesax.css"

//Vuesax components
Vue.use(Vuesax)

Vue.config.productionTip = false


new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
