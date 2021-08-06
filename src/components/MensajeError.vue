<template>
  <div class="error">
    <button @click="cerrarError" class="error__boton">x</button>
     <p class="error__mensaje">{{mensaje}}</p> 
  </div>
</template>

<script>
    import {useStore} from "vuex"

    export default {
        name: "MensajeError",
        props: ["mensaje"],
        setup(props) {
            const store = useStore()

            return { 
                cerrarError :() => store.commit('manejarError')
            }
        }
    }
</script>

<style lang="scss">

    .error {
        display: block;
        position: absolute;
        background-color: #ff0000bf;
        max-width: 300px;
        margin: auto;
        padding: 0.4em;
        border-radius: 4px;
        left: 50%;
        width: 100%;
        transform: translate(-50%);
        top: 18px;
        font-size: 0.9em;
        z-index: 2;

        .error__mensaje {
            margin: 0;
        }

        .error__boton {
            position: absolute;
            top: 0;
            right: 7px;
            border: 0;
            background-color: transparent;
            color: white;
            padding: 0;
            cursor: pointer;
        }
    }

</style>