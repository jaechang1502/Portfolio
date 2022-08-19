import { createApp } from 'vue'
import './plugin/css.js'
import App from './App.vue'
import router from './router/router'
import store from './store/index'
import VueNumber from 'vue-number-animation'



createApp(App)
.use(router)
.use(VueNumber)
.use(store)
.mount('#app')
