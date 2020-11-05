<template>
  <div class="container">
    <div class="row">
      <div class="col col-lg-6 mx-auto">
        <p class=" pregunta ">¿Para qué quieres usar tu pc?</p>
      </div>
      <div class="col-12">
        <div class="opciones mx-auto">
            <vs-radio v-model="picked" val="1" color="#3b1664" class="justify-content-start mx-auto col col-lg-8">
              <div class="row align-items-center px-2">
                Videojuegos
              </div>
            </vs-radio>
            <vs-radio v-model="picked" val="2" color="#3b1664" class="justify-content-start mx-auto col col-lg-8">
              <div class="row align-items-center p-1">
                Diseño/edición de fotos o video
              </div>
            </vs-radio>
            <vs-radio v-model="picked" val="3" color="#3b1664" class="justify-content-start mx-auto col col-lg-8">
              <div class="row align-items-center px-2">
                Trabajo
              </div>
            </vs-radio>
         </div>
      </div>
      
      
    </div>
    
      <PopUpBeg class=""/>
    

    <p>{{sendValue(picked)}}</p>
  </div>
</template>


<script>
import PopUpBeg from "./PopUpBeg.vue";
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
</style>