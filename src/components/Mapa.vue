<template>
  <div class="mapa" ref="containerMapa"></div>
</template>

<script>
    import { ref, onMounted, watch } from "vue"
    import { useStore } from "vuex"

    export default {
        setup() {
            const store = useStore()
            const containerMapa = ref(null)
            const openImage = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
            const openLink = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            let mapa

            watch(() => store.state.busqueda.coordenadas , (coordenadas, prev) => {
                mapa.setView(coordenadas, 13)
                L.marker(coordenadas).addTo(mapa)
                L.circle(coordenadas, {
                    color: 'dodgerblue',
                    fillColor: 'dodgerblue',
                    fillOpacity: 0.5,
                    radius: 500
                }).addTo(mapa);
            } )

            onMounted(() => {
                mapa = L.map(containerMapa.value)
                mapa.setView([51.505, -0.09], 13)
                L.tileLayer(openImage , { attribution: openLink }).addTo(mapa)
            })

            return { containerMapa }
        }
    }
</script>

<style lang="scss">

    .mapa {
        height: 600px;
        width: 100%;
    }
</style>