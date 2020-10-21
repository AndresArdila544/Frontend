<template>
  <div>
    <div id="radio" class="center">
      <p id="pregunta" class="pt-3 d-flex justify-content-start">¿Qué tanto almacenamiento necesitas??</p>
      <vs-radio v-model="picked" class="d-flex justify-content-start" val="1"> Poco - 500Gb </vs-radio>
      <vs-radio v-model="picked" class="d-flex justify-content-start" val="2"> Medio - 1Tb </vs-radio>
      <vs-radio  v-model="picked" class="pb-1 d-flex justify-content-start" val="3"> Mucho - 1Tb+ </vs-radio>
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
      this.$store.commit("setA2",this.picked)
    }
  }
};
</script>

<style >

</style>