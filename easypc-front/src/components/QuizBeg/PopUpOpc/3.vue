<template>
  <div>
        <Pregunta31/>
        <Pregunta32/>
        <Pregunta33/>
        <div class="">
          <vs-button id="botones" to='/' block>Aceptar</vs-button>
        </div>
  </div>
</template>

<script>
import Pregunta31 from "../Preguntas/Pregunta3.1.vue";
import Pregunta32 from "../Preguntas/Pregunta3.2.vue";
import Pregunta33 from "../Preguntas/Pregunta3.3.vue";

export default {
    name: "PopUpOpc3",
    components: {
        Pregunta31,
        Pregunta32,
        Pregunta33,
    }
}
</script>

<style>

</style>