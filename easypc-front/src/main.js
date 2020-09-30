import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap'
import './assets/app.css'
import Vuex from 'vuex'

import Vuesax from 'vuesax'
import 'vuesax/dist/vuesax.css' //Vuesax styles

Vue.use(Vuesax, {
  // options here
})

Vue.config.productionTip = false;

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    count: 0
    
  },
  
  getters: {
    getCount: state => {
      return state.count
    },
  },
  mutations: {
    increment (state) {
      state.count++
    },
    changeValue (state,n){
      state.count = n
    }
  }
})

new Vue({
  render: h => h(App),
  store: store,
  router,
}).$mount('#app')
