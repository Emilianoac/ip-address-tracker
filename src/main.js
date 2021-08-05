import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import store from './store'
import './assets/scss/main.scss'

let app = createApp(App)
app.use(store)
app.mount('#app')
