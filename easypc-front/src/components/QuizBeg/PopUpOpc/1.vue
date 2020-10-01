<template>
  <div>
        <Pregunta11/>   
        <Pregunta12/>
        <Pregunta13/>
        <div class="">
          <vs-button id="botones" to='/' block>Aceptar</vs-button>
        </div>
  </div>
</template>

<script>
import Pregunta11 from "../Preguntas/Pregunta1.1.vue";
import Pregunta12 from "../Preguntas/Pregunta1.2.vue";
import Pregunta13 from "../Preguntas/Pregunta1.3.vue";

export default {
    name: "PopUpOpc1",
    components: {
        Pregunta11,
        Pregunta12,
        Pregunta13,
    }
}
</script>

<style>

</style>