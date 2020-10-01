<template>
  <div>
        <Pregunta21 />
        <Pregunta22 />
        <Pregunta23 />
        <div class="">
          <vs-button id="botones" to='/' block>Aceptar</vs-button>
        </div>
  </div>
</template>

<script>
import Pregunta21 from "../Preguntas/Pregunta2.1.vue";
import Pregunta22 from "../Preguntas/Pregunta2.2.vue";
import Pregunta23 from "../Preguntas/Pregunta2.3.vue";

export default {
    name: "PopUpOpc2",
    components: {
        Pregunta21,
        Pregunta22,
        Pregunta23,
    }
}
</script>

<style>

</style>