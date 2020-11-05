<template>
  <div>
    <div class="container-fluid">
      <p class="titulo-quiz d-none d-md-block">Cuentanos tus necesidades!</p>
      <PreguntaInicial/>
      <Slider/>
    </div>
  </div>
</template>

<script>
import PreguntaInicial from '../components/QuizBeg/PreguntaInicial.vue'
import Slider from "../components/Slider.vue"

export default {
  name: "QuizBeg",
  components: {
    PreguntaInicial,
    
    Slider
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



.titulo-quiz {
  font-size: calc(2rem + 3.2vw);
  font-family: 'Poppins', sans-serif;
}
.pregunta {
  font-size: calc(2rem + 1.2vw);
  font-family: 'Poppins', sans-serif;
  justify-content:left;
}
.opciones {
  font-size: calc(1.1rem + 1.2vw);
  font-family: 'Poppins', sans-serif;
}


  
</style>