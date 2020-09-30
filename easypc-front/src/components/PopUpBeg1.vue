<template>
  <div >
    <vs-button class="d-flex justify-content-center" border :active="active == 0" @click="active = !active" >Siguiente</vs-button>
    <vs-dialog blur overflow-hidden class="d-flex justify-content-start" v-if="valor=='1'" not-close v-model="active">
        <pregunta11 />   
        <pregunta12 />
        <pregunta13 />
        <div class="">
          <vs-button to='/' block>Aceptar</vs-button>
        </div>
   
    </vs-dialog>

    <vs-dialog blur overflow-hidden class="" v-if="valor=='2'" not-close v-model="active">
 
        <p id="pregunta" class="pt-3 d-flex justify-content-start">¿Qué programas quieres correr?</p>
        <pregunta21 />
    
  
        <p id="pregunta" class="pt-3 d-flex justify-content-start">¿Qué tanto almacenamiento necesitas??</p>
        <pregunta22 />
    
        <p id="pregunta" class="pt-3 d-flex justify-content-start">¿Con qué calidad realizas tu trabajo?</p>
        <pregunta23 />



        <div class="">
          <vs-button block>Aceptar</vs-button>
        </div>

    </vs-dialog>

    <vs-dialog blur overflow-hidden class="" v-if="valor=='3'" not-close v-model="active">

        <p id="pregunta" class="pt-31">¿Qué programas necesitas correr?</p>
        <pregunta31 />

        <p id="pregunta" class="pt-32">¿Sueles hacer muchas tareas a la vez?</p>
        <pregunta32 />

        <p id="pregunta" class="pt-33">¿Qué tanto almacenamiento necesitas?</p>
        <pregunta33 />


 
        <div class="">
          <vs-button block>Aceptar</vs-button>
        </div>

    </vs-dialog>
  </div>
</template>


<script>
import Pregunta11 from "./Pregunta1.1";
import Pregunta12 from "./Pregunta1.2";
import Pregunta13 from "./Pregunta1.3";

import Pregunta21 from "./Pregunta2.1";
import Pregunta22 from "./Pregunta2.2";
import Pregunta23 from "./Pregunta2.3";

import Pregunta31 from "./Pregunta3.1";
import Pregunta32 from "./Pregunta3.2";
import Pregunta33 from "./Pregunta3.3";

export default {
  name: "PopUpBeg1",
  components: {
    Pregunta11,
    Pregunta12,
    Pregunta13,
    Pregunta21,
    Pregunta22,
    Pregunta23,
    Pregunta31,
    Pregunta32,
    Pregunta33,
  },
  props: [],

  data: () => ({
    active: false,
  }),
  methods: {
    increment() {
      this.$store.commit("increment");
    },
  },
  computed: {
    valor() {
      return this.$store.getters["getCount"];
    },
  },
};
</script>

<style >
#opcion {
  font-size: 3vw;
}
</style>

