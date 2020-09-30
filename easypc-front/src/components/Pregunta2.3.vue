<template>
  <div>
    <div class="center">
      <vs-radio v-model="picked" val="1"> Normal - Videos/imágenes en resolución media </vs-radio>
      <vs-radio v-model="picked" val="2"> Alta - Videos/imágenes en resolución alta </vs-radio>
      <vs-radio  v-model="picked" val="3"> Super Alta - Videos/imágenes en resolución ultra </vs-radio>

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