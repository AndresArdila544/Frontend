<template>
  <div class="container">
    <h1 class="col pregunta">¿Qué programas quieres correr?</h1>
    <div class="col col-12">
      <div class="col col-md-12 opciones">
        <vs-radio v-model="picked" class="d-flex justify-content-start" val="1">
          <div class="d-none d-sm-block">Programas de edición de imágenes</div>
          <div class="d-block d-sm-none">Photoshop</div>
        </vs-radio>
      </div>
      <div class="col col-md-12 opciones">
        <vs-radio
          v-model="picked"
          class="d-flex justify-content-start"
          val="2"
        >
        <div class="d-none d-sm-block">Programas de sketch/dibujo</div>
        <div class="d-block d-sm-none">Illustrator</div></vs-radio>
      </div>
      <div class="col col-md-12 opciones">
        <vs-radio
          v-model="picked"
          class="d-flex justify-content-start"
          val="3"
        >
        <div class="d-none d-sm-block">Programas de edición de vídeo</div>
        <div class="d-block d-sm-none">Premiere Pro</div></vs-radio>
      </div>
    </div>
    <p>{{setAnswer()}}</p>
  </div>
</template>
  <script>
export default {
  data: () => ({
    picked: 0,
  }),
  methods: {
    setAnswer() {
      this.$store.commit("setA1", this.picked);
    },
  },
};
</script>

<style >
#pregunta {
  font-size: 4vw;
}
#opcion {
  font-size: 3vw;
}
#radio {
  font-size: 2.7vw;
}
</style>