import { createApp } from 'vue'
import './plugin/css.js'
import App from './App.vue'
import router from './router/router'
import store from './store/index'
import axios from 'axios'

createApp(App)
.use(router)
.use(store)
.mount('#app')
