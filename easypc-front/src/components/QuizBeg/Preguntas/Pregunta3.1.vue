<template>
  <div>
      <h1 class="col pregunta">¿Qué programas necesitas correr?</h1>
      <div class="col col-12">
        <div class="col col-md-12 opciones">
      <vs-radio v-model="picked" class="d-flex justify-content-start" val="1"> Office </vs-radio>

        </div>
        <div class="col col-md-12 opciones">
      <vs-radio v-model="picked" class="d-flex justify-content-start" val="2"> Programaci&oacute;n  </vs-radio>

        </div>
        <div class="col col-md-12 opciones">
      <vs-radio  v-model="picked" class="d-flex justify-content-start" val="3"> AutoCAD </vs-radio>

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
      this.$store.commit("setA1",this.picked)
    }
  }
};
</script>


