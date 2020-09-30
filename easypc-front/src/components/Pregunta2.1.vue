<template>
  <div>
    <div class="center">
      <vs-radio v-model="picked" val="1"> Programas de edición de imágenes - Photoshop </vs-radio>
      <vs-radio v-model="picked" val="2"> Programas de sketch/dibujo - Illustrator </vs-radio>
      <vs-radio  v-model="picked" val="3"> Programas de edición de vídeo - Premiere Pro </vs-radio>

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