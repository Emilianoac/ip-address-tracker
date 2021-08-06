<template>
    <div class="resultados">
        <div class="resultado">
            <h2 class="resultado__titulo">IP ADDRESS</h2>
            <p>{{data.ip || "--"}}</p>
        </div>
        <div class="resultado">
            <h2 class="resultado__titulo">LOCATION</h2>
            <p>{{data.direccion || "--"}}</p>
        </div>
        <div class="resultado">
            <h2 class="resultado__titulo">TIMEZONE</h2>
            <p>{{ data.zonaHoraria || "--"}}</p>
        </div>
        <div class="resultado">
            <h2 class="resultado__titulo">ISP</h2>
            <p>{{data.isp || "--"}}</p>
        </div>
    </div>
</template>

<script>
    import { useStore } from 'vuex'
    import {computed} from 'vue'

    export default {
        name: "Resultados",
        setup() {
            const store = useStore()

            return {
                data : computed(() => store.state.busqueda)
            }
        }
    }
</script>

<style lang="scss">

    .resultados {
        position: relative;
        width: 100%;
        max-width: 1000px;
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        margin: auto;
        margin-top: 80px;
        padding: 2.4em 1em;
        border-radius: 9px;
        box-shadow: 0px 4px 10px 2px rgba(0, 0, 0, 0.267);
        background-color: var(--color-principal-fondo);
        color: var(--color-principal);
        z-index: 10000;

        .resultado {
            border-right: 1px solid var(--color-secundario);
            padding: 0 1.3em;
            text-align: start;

            .resultado__titulo {
                font-weight: 500;
                font-size: 0.9em;
                margin-bottom: 0.5em;
                color: var(--color-secundario);
            }

            p {
                font-size: 1.4em;
                font-weight: bold;
            }

            &:last-of-type {
                border: 0;
            }
        }
    }

    @media(max-width: 990px) {

        .resultados {
            grid-template-columns: 1fr;
            margin-top: 20px;

            .resultado {
                font-size: 0.85em;
                text-align: center;
                margin-bottom: 1.1em;
                border: 0;

                &:last-of-type {
                    margin-bottom: 0;
                }
            }
        }
    }
</style>