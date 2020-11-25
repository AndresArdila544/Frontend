<template>
  <div class="row">
    <div class="col col-12 mx-auto">
      <h2 class="pregunta">¿Para qué quieres usar tu pc?</h2>
    </div>
    <div class="col-12 col-md-12 offset-md-1">
      <div class="opciones mx-auto">
        <vs-radio
          v-model="picked"
          val="1"
          color="#3b1664"
          class="justify-content-start mx-auto col col-lg-8">
            <div class="row align-items-center px-2">
              Videojuegos
            </div>
        </vs-radio>
        <vs-radio
          v-model="picked"
          val="2"
          color="#3b1664"
          class="justify-content-start mx-auto col col-lg-8">
            <div class="row align-items-center p-1">
              Diseño/edición de fotos o video
            </div>
        </vs-radio>
        <vs-radio
            v-model="picked"
            val="3"
            color="#3b1664"
            class="justify-content-start mx-auto col col-lg-8">
              <div class="row align-items-center px-2">
                Trabajo
              </div>
          </vs-radio>
      </div>
    </div>
    <div class="col col-12 mx-auto">
      <h2 class="pregunta">¿Cuanto planeas que cueste?</h2>
    </div>
    <div class="col col-12 mx-auto">
      <Slider />
    </div>
    <div class="col col-12 mx-auto">
      <PopUpBeg class />
    </div>
    <p>{{sendValue(picked)}}</p>
  </div>
</template>


<script>
import PopUpBeg from "./PopUpBeg.vue";
import Slider from "../Slider";
export default {
  name: "Pregunta1",
  components: {
    PopUpBeg,
    Slider,
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


