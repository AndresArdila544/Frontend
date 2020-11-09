<template>
  <div>
        <Pregunta11/>   
        <Pregunta12/>
        <Pregunta13/>
        <div class="">
          <vs-button @click="pushAnswer()"  id="botones" to='/ShowRec' block>Aceptar</vs-button>
        </div>
  </div>
</template>

<script>
import Pregunta11 from "../Preguntas/Pregunta1.1.vue";
import Pregunta12 from "../Preguntas/Pregunta1.2.vue";
import Pregunta13 from "../Preguntas/Pregunta1.3.vue";
//import EasyPCService from "../../services/EasyPCService";


export default {
    name: "PopUpOpc1",
    components: {
        Pregunta11,
        Pregunta12,
        Pregunta13,
        
    },
    methods:{
      pushAnswer(){
        this.$store.commit("pushAnswers",this.$store.getters["getBudget"])
        this.$store.commit("pushAnswers",this.$store.getters["getCount"])
        this.$store.commit("pushAnswers",this.$store.getters["getA1"])
        this.$store.commit("pushAnswers",this.$store.getters["getA2"])
        this.$store.commit("pushAnswers",this.$store.getters["getA3"])
      }
      
    },
}

</script>

<style>

</style>