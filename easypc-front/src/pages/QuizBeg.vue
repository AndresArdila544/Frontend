<template>
  <div class="container">
    <div class="">
      <p class="titulo-quiz d-none d-md-block">Cuentanos tus necesidades!</p>
      <PreguntaInicial/>
    </div>
  </div>
</template>

<script>
import PreguntaInicial from '../components/QuizBeg/PreguntaInicial.vue'


export default {
  name: "QuizBeg",
  components: {
    PreguntaInicial,
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