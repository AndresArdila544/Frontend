<template>
  <div>
    <div id="radio" class="center">
      <p id="pregunta" class="pt-3 d-flex justify-content-start">¿Con qué calidad realizas tu trabajo?</p>
      <vs-radio v-model="picked" class="d-flex justify-content-start" val="1"> Normal - Videos/imágenes en resolución media </vs-radio>
      <vs-radio v-model="picked" class="d-flex justify-content-start" val="2"> Alta - Videos/imágenes en resolución alta </vs-radio>
      <vs-radio  v-model="picked" class="pb-3 d-flex justify-content-start" val="3"> Super Alta - Videos/imágenes en resolución ultra </vs-radio>
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

<style >

</style>