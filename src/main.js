import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import store from './store'
import leaflef from 'leaflet/dist/leaflet'
import 'leaflet/dist/leaflet.css'
import './assets/scss/main.scss'

let app = createApp(App)
app.use(store)
app.use(leaflef)
app.mount('#app')
