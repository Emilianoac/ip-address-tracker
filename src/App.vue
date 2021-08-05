<template>
  <div class="container">
    <Banner/>
    <Mapa/>
  </div>
</template>

<script>
  import Banner from "./components/Banner.vue"
  import Mapa from "./components/Mapa.vue"

export default {
  name: 'App',
  components: {
    Banner,
    Mapa
  }
}
</script>

<style lang="scss">
</style>
