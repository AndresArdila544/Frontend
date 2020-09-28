<template>
  <div class="p1">
    <ul>
    <li><vs-radio v-model="picked" val="1"> Videojuegos </vs-radio></li>
    <li><vs-radio v-model="picked" val="2">
      Diseño/edición de fotos o video
    </vs-radio></li>
    <li><vs-radio v-model="picked" val="3"> Trabajo </vs-radio></li>
    </ul>
  </div>
</template>

  <script>
export default {
  data: () => ({
    picked: 1,
  }),
};
</script>

<style>
.p1 {
  text-align: left;
  position: relative;
  vertical-align: middle;
}
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}

</style>