<template>
  <div>
    <h1 class="col pregunta">¿Con qué calidad realizas tu trabajo?</h1>
    <div class="col col-12">
      <div class="col col-md-12 opciones">
        <vs-radio
          v-model="picked"
          class="d-flex justify-content-start"
          val="1"
        >
        <div class="d-none d-sm-block">Videos/imágenes en resolución media 720p</div>
        <div class="d-block d-sm-none">Normal</div>
         </vs-radio>
      </div>
      <div class="col col-md-12 opciones">
        <vs-radio
          v-model="picked"
          class="d-flex justify-content-start"
          val="2"
        >
        <div class="d-none d-sm-block">Videos/imágenes en resolución alta 1080p</div>
        <div class="d-block d-sm-none">Alta</div>
         </vs-radio>
      </div>
      <div class="col col-md-12 opciones">
        <vs-radio
          v-model="picked"
          class="pb-3 d-flex justify-content-start"
          val="3"
        >
        <div class="d-none d-sm-block">Alta Videos/imágenes en resolución ultra - 4K</div>
        <div class="d-block d-sm-none">Super</div>
         </vs-radio>
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
      this.$store.commit("setA3", this.picked);
    },
  },
};
</script>
