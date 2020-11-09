<template>
  <div>
    
      <h1 class="col pregunta">¿Qué tanta capacidad de disco necesitas?</h1>
      <div>
        <div class="col col-md-10 opciones">
      <vs-radio v-model="picked" class="d-flex justify-content-start" val="1"> Poco</vs-radio>

        </div>
        <div class="col col-md-10 opciones">
      <vs-radio v-model="picked" class="d-flex justify-content-start" val="2"> Medio</vs-radio>

        </div>
        <div class="col col-md-10 opciones">
      <vs-radio v-model="picked" class="pb-3 d-flex justify-content-start" val="3"> Demasiado </vs-radio>

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
      this.$store.commit("setA3",this.picked)
    }
  }
};
</script>

<style>

</style>