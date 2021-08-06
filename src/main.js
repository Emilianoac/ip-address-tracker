import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import store from './store'
import leaflef from 'leaflet/dist/leaflet'
import { Icon } from 'leaflet'
import 'leaflet/dist/leaflet.css'
import './assets/scss/main.scss'

delete Icon.Default.prototype._getIconUrl;
Icon.Default.imagePath = '/public/img/icon-location.svg';
Icon.Default.mergeOptions({
  iconRetinaUrl: require('/public/img/icon-location.svg'),
  iconUrl: require('/public/img/icon-location.svg'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
  iconSize: [30, 40]
})

let app = createApp(App)
app.use(store)
app.use(leaflef)
app.mount('#app')
