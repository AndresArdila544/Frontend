<template>
  <div class="container">
    
      <h1 class="col pregunta">¿Qué tanta capacidad de disco necesitas?</h1>
      <div class="col col-12">
        <div class="col col-md-10 opciones">
      <vs-radio v-model="picked" class="d-flex justify-content-start" val="1"> Poco - 500Gb </vs-radio>

        </div>
        <div class="col col-md-10 opciones">
      <vs-radio v-model="picked" class="d-flex justify-content-start" val="2"> Medio - 1Tb </vs-radio>

        </div>
        <div class="col col-md-10 opciones">
      <vs-radio  v-model="picked" class="pb-1 d-flex justify-content-start" val="3"> Mucho - 1Tb+ </vs-radio>

        </div>
      </div>
      <p> {{setAnswer()}}</p>
    
  </div>
</template>
  <script>
export default {
  data: () => ({
    picked: 0,
  }),
  methods:{
    setAnswer(){
      this.$store.commit("setA2",this.picked)
    }
  }
};
</script>

<style >

</style>