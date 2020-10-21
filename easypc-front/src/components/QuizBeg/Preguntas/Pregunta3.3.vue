<template>
  <div>
    <div id="radio" class="center">
      <p id="pregunta" class="pt-3 d-flex justify-content-start">¿Qué tanto almacenamiento necesitas?</p>
      <vs-radio v-model="picked" class="d-flex justify-content-start" val="1"> Poco</vs-radio>
      <vs-radio v-model="picked" class="d-flex justify-content-start" val="2"> Medio</vs-radio>
      <vs-radio v-model="picked" class="pb-3 d-flex justify-content-start" val="3"> Demasiado </vs-radio>
      <p> {{setAnswer()}}</p>
    </div>

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