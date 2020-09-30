import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap'
import './assets/app.css'
<<<<<<< HEAD
import Vuesax from "vuesax"
import "vuesax/dist/vuesax.css"

//Vuesax components
Vue.use(Vuesax)
=======
import Vuesax from 'vuesax'
import 'vuesax/dist/vuesax.css' //Vuesax styles

Vue.use(Vuesax, {
  // options here
})

Vue.config.productionTip = false;
>>>>>>> 5bf64c4b318d86683f98ff1c9f03ec46e394ac8f


new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
