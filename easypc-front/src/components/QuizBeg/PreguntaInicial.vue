<template>
  <div class="container-fluid">
    <p>{{sendValue(picked)}}</p>
        <p id="pregunta" class="d-flex justify-content-start">¿Para qué quieres usar tu pc?</p>
        <div id="radio" class="d-flex flex-column">
          <vs-radio v-model="picked" val="1" class="justify-content-start container-fluid">Videojuegos</vs-radio>
          <vs-radio v-model="picked" val="2" class="justify-content-start container-fluid">Diseño/edición de fotos o video</vs-radio>
          <vs-radio v-model="picked" val="3" class="justify-content-start container-fluid">Trabajo</vs-radio>
        </div>
     <PopUpBeg class="d-flex justify-content-center"/>
     
  </div>
</template>


<script>
import PopUpBeg from "./PopUpBeg.vue"
export default {
  name: "Pregunta1",
  components: {
    PopUpBeg,
  },
  data: () => ({
    picked: 0,
    active: false,
  }),
  methods: {
    sendValue(number) {
      this.$store.commit("changeValue", number);
    },
  },
  computed: {},
};
</script>


<style scoped>
#pregunta {
  font-size: 4vw
}
#radio {
  font-size: 2.7vw
}
</style>