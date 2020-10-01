<template>
  <div>
    <div id="radio" class="center">
      <p id="pregunta" class="pt-3 d-flex justify-content-start">¿Qué programas quieres correr?</p>
      <vs-radio v-model="picked" class="d-flex justify-content-start" val="1"> Programas de edición de imágenes - Photoshop </vs-radio>
      <vs-radio v-model="picked" class="d-flex justify-content-start" val="2"> Programas de sketch/dibujo - Illustrator </vs-radio>
      <vs-radio v-model="picked" class="d-flex justify-content-start" val="3"> Programas de edición de vídeo - Premiere Pro </vs-radio>
    </div>
  </div>
</template>
  <script>
export default {
  data: () => ({
    picked: 1,
  }),
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
  font-size: 2.7vw
}
</style>