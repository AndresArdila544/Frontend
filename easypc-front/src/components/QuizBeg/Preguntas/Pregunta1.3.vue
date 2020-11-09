<template>
  <div class="container">
    <div class="col pregunta">
      <h1 class="pt-4 d-flex justify-content-start">¿Cómo quieres que se vean los juegos?</h1>
    </div>
    <div class="col col-12">
      <div class="col col-md-12 opciones">
        <vs-radio
          v-model="picked"
          val="1"
          class="d-flex justify-content-start"
        >
        <div class="d-block d-sm-none">Normal</div>
        <div class="d-none d-sm-block">Quiero jugar sin darle tanta importancia a la calidad</div>
         </vs-radio>
      </div>
      <div class="col col-md-12 opciones">
        <vs-radio
          v-model="picked"
          val="2"
          class="d-flex justify-content-start"
        >
        <div class="d-block d-sm-none">Bien</div>
         
        <div class="d-none d-sm-block">Me importa la calidad pero no es lo más importante</div>
        </vs-radio>
      </div>
      <div class="col col-md-12 opciones">
        <vs-radio
          v-model="picked"
          val="3"
          class="d-flex justify-content-start"
        ><div class="d-block d-sm-none">Excelente</div> 
        <div class="d-none d-sm-block"> Quiero que se vean los más mínimos detalles</div> </vs-radio>
      </div>
    </div>

    <p>{{setAnswer()}}</p>
  </div>
</template>
  <script>
export default {
  data: () => ({
    picked: 0,
    val: "",
  }),
  methods: {
    setAnswer() {
      this.$store.commit("setA3", this.picked);
    },
  },
};
</script>
<style  scoped>
#pregunta {
  font-size: 4vw;
}
#radio {
  font-size: 2.7vw;
}
</style>