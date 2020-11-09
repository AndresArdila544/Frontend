<template>
  <div>
   
      <h1 class="col pregunta">¿Sueles hacer muchas tareas a la vez?</h1>
      <div class="col col-12">
        <div class="col col-md-10 opciones">
      <vs-radio  v-model="picked" class="pb-1 d-flex justify-content-start" val="3"> SI </vs-radio>

        </div>
        <div class="col col-md-10 opciones">
      <vs-radio v-model="picked" class="d-flex justify-content-start" val="2"> A veces </vs-radio>

        </div>
        <div class="col col-md-10 opciones">
      <vs-radio v-model="picked" class="d-flex justify-content-start" val="1"> NO </vs-radio>

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

<style>

</style>