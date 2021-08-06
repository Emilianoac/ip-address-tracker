<template>
    <header class="header"> 
        <h1 class="header__titulo">IP Address Tracker</h1>
        <p class="header__bajada ">
            You have to disabled <strong> Adblock , Ublock </strong> <br> or <strong> use Incognito navigation </strong> 
            for using this service correctly
        </p>
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
        height: 320px;
        text-align: center;
        color: white;
        padding: 1em;
        padding-top: 4em;

        &::after {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(8, 35, 63, 0.39);
        }

        .header__titulo,
        .header__bajada {
            position: relative;
            z-index: 2;
        }

        .header__titulo {
            font-weight: 500;
        }

        .header__bajada {
            margin: 1.3em 0em;
            font-size: 1.1em;

            strong {
                color: #f5e021;
            }
        }
    }
</style>