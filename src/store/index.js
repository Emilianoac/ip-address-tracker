import { createStore } from 'vuex'
import isIp from 'is-ip'
const {VUE_APP_API_KEY} = process.env

export default createStore({
  state: {
    busqueda : {
      busquedaUsuario: "",
      ip: "",
      direccion: "",
      zonaHoraria: "",
      isp: "",
      coordenadas: [],
    },
    errorBusqueda: false
  },
  mutations: {
    establecerDatos(state, data) {

      if(state.errorBusqueda) {
        state.busqueda.ip = ""
        state.busqueda.direccion = ""
        state.busqueda.zonaHoraria = ""
        state.busqueda.isp = ""
      } else {
        state.busqueda.ip = data.ip,
        state.busqueda.direccion = `${data.location.country}, ${data.location.region}, ${data.location.city}`
        state.busqueda.zonaHoraria = data.location.timezone
        state.busqueda.isp = data.isp
        state.busqueda.coordenadas = []
        state.busqueda.coordenadas.push(data.location.lat, data.location.lng)
      }
    },
    manejarError(state) {
      state.errorBusqueda = false
    }
  },
  actions: {
    async obtenerDatos({ commit, state }, busqueda) {
      if(state.errorBusqueda) state.errorBusqueda = false

      let response
      let url =`https://geo.ipify.org/api/v1?apiKey=${VUE_APP_API_KEY}`
      try {
        if(isIp(busqueda)) {
          response = await fetch(`${url}&ipAddress=${busqueda}`)
        } else {
          response = await fetch(`${url}&domain=${busqueda}`)
        }
        const json = await response.json()
        return commit("establecerDatos", json)
      } catch (error) {
        state.errorBusqueda = true
        return commit("establecerDatos")
      }
    }
  },
  modules: {
  }
})
