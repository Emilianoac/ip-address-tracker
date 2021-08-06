<template>
    <header class="header"> 
        <h1 class="header__titulo">IP Address Tracker</h1>
        <Buscador/>
        <Resultados/>
    </header>
</template>
<script>
import Buscador from "./Buscador.vue"
import Resultados from "./Resultados.vue"

export default {
    components: {
        Buscador,
        Resultados
    }
}
</script>

<style lang="scss">

    .header {
        position: relative;
        background-image: url("../../public/img/pattern-bg.png");
        background-size: cover;
        height: 290px;
        text-align: center;
        color: white;
        padding: 1em;
        padding-top: 4em;

        .header__titulo {
            margin-bottom: 0.8em;
            font-weight: 500;
        }
    }
</style>