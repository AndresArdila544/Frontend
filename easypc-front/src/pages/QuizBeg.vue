<template>
  <div>
    <Footer/>
    <div class="pt-4 container-fluid">
      <p id="parrafo" class="pt-3">Cuentanos tus necesidades!</p>
      <p ><PreguntaInicial/></p>
    </div>
  </div>
</template>

<script>
import PreguntaInicial from '../components/QuizBeg/PreguntaInicial.vue'
import Footer from "../components/Footer.vue"

export default {
  name: "QuizBeg",
  components: {
    PreguntaInicial,
    Footer
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