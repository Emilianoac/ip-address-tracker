<template>
    <form class="buscador">
        <input class="buscador__input" 
               v-model="busquedaUsuario"
               placeholder="Search for any IP Address or domain" 
               type="text"
        />
        <button class="buscador__boton"
                @click.prevent="obtenerDatos">
                <img src="../../public/img/icon-arrow.svg">
        </button>
    </form>
</template>

<script>
    import { useStore } from 'vuex'
    import { ref } from 'vue'

    export default {
        name: "Buscador",
        setup() {
            const store = useStore()
            const busquedaUsuario = ref(null)

            return {
                obtenerDatos : () => store.dispatch('obtenerDatos', busquedaUsuario.value),
                busquedaUsuario,
            }
        }
    }
</script>

<style lang="scss">
    
    .buscador {
        display: inline-flex;
        align-items: center;
        max-width: 400px;
        width: 100%;

        .buscador__input,
        .buscador__boton {
            border: 1px solid var(--color-principal);
            padding: 0.9em;
            font-size: 0.95em;
            height: 50px;
        }

        .buscador__input {
            width: 100%;
            border-right: 0;
            border-radius: 9px 0px 0px 9px;

            &:focus {
                outline: 0;
                border-color: dodgerblue;
            }
        }

        .buscador__boton {
            border-radius: 0px 9px 9px 0px;
            background-color: var(--color-principal);
            width: 50px;
            cursor: pointer;
            transition: background-color 0.4s ease-in-out;

            &:hover,
            &:focus {
                outline: 0;
                background-color: var(--color-principal-hover);
            }
        }
    }
</style>