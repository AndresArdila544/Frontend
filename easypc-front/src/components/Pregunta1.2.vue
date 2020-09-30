<template>
  <div>
    <div class="center">
      <vs-radio v-model="picked" val="1"> Ocio en mi tiempo libre </vs-radio>
      <vs-radio v-model="picked" val="2"> Quiero hacer streams de mis juegos </vs-radio>
    </div>
  </div>
</template>
  <script>
export default {
  data: () => ({
    picked: 1,
    val: ""
  }),
};
</script>