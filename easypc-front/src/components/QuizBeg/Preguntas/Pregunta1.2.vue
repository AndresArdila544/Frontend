<template>
  <div class="container">
    <div class="col pregunta">
      <h1 class>¿Con qué propósito jugarás videojuegos?</h1>
    </div>
    <div class="col col-12">
      <div class="col col-md-12 opciones">
        <vs-radio
          v-model="picked"
          val="1"
          class="d-flex justify-content-start"
        >Ocio en mi tiempo libre
        </vs-radio>
      </div>
      <div class="col col-md-12 opciones">
        <vs-radio
          v-model="picked"
          val="2"
          class="d-flex justify-content-start"
        >Quiero hacer streams de mis juegos</vs-radio>
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
      this.$store.commit("setA2", this.picked);
    },
  },
};
</script>


