<template>
  <div>
    <div class="pt-4 container-fluid">
      <p id="parrafo" class="pt-3">Cuentanos tus necesidades!</p>

      
      <p ><Pregunta1/></p>
    </div>
    <PopUpBeg1/>
    
   
  </div>
</template>

<script>

import Pregunta1 from '../components/Pregunta1.vue'
import PopUpBeg1 from "../components/PopUpBeg1.vue"



export default {
  name: "QuizBeg",
  components: {
    Pregunta1,
    PopUpBeg1,
  },
  methods: {
    increment() {
    this.$store.commit('increment')
  }

  },
  data: () => ({
    active: false,
    
  }),
  computed: {
    count () {
      return this.$store.getters["getCount"]
    },

  }
  
  
};
</script>

<style>



#parrafo {
  font-size: 6vw;
}


  
</style>