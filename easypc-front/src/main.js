import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap'
import './assets/app.css'
import './assets/styles.scss'
import store from './store'
import Vuesax from 'vuesax'
import 'vuesax/dist/vuesax.css' //Vuesax styles
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import vuetify from './plugins/vuetify';


Vue.use(Vuesax, {
  // options here
})
Vue.use(Vuetify)

Vue.config.productionTip = false;


const opts = {}

export default new Vuetify(opts)



new Vue({
  render: h => h(App),
  store,
  router,
  vuetify,
  Vuetify
}).$mount('#app')

