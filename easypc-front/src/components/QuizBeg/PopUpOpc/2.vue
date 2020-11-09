<template>
  <div class="row">
        <Pregunta21 />
        <Pregunta22 />
        <Pregunta23 />
        <div class="col col-12">
          <vs-button @click="pushAnswer()" to='/ShowRec' block class="boton-pop" color="rgb(59,22,100)">Aceptar</vs-button>
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
    },
    methods:{
      pushAnswer(){
        this.$store.commit("pushAnswers",this.$store.getters["getBudget"])
        this.$store.commit("pushAnswers",this.$store.getters["getCount"])
        this.$store.commit("pushAnswers",this.$store.getters["getA1"])
        this.$store.commit("pushAnswers",this.$store.getters["getA2"])
        this.$store.commit("pushAnswers",this.$store.getters["getA3"])
        console.log(this.$store.getters["getAnswers"])
        
      }
    }
}
</script>

<style>

</style>