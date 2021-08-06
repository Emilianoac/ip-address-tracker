import { createStore } from 'vuex'
import isIp from 'is-ip'
const {VUE_APP_API_KEY} = process.env

export default createStore({
  state: {
    busqueda : {
      ip: "",
      direccion: "",
      zonaHoraria: "",
      isp: "",
      coordernadas : []
    }
  },
  mutations: {
    establecerDatos(state, data) {
      state.busqueda.ip = data.ip,
      state.busqueda.direccion = `${data.location.country}, ${data.location.region}, ${data.location.city}`
      state.busqueda.zonaHoraria = data.location.timezone
      state.busqueda.isp = data.isp
    }
  },
  actions: {
    async obtenerDatos({ commit }, busqueda) {
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
        return console.log(error)
      }
    }
  },
  modules: {
  }
})
