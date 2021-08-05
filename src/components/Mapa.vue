<template>
  <div class="mapa" ref="containerMapa"></div>
</template>

<script>
    import { ref, onMounted } from "vue"

    export default {
        setup() {
            const containerMapa = ref(null)
            const openImage = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
            const openLink = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            let mapa

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