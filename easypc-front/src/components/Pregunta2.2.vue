<template>
  <div>
    <div class="center">
      <vs-radio v-model="picked" val="1"> Poco - 500Gb </vs-radio>
      <vs-radio v-model="picked" val="2"> Medio - 1Tb </vs-radio>
      <vs-radio  v-model="picked" val="3"> Mucho - 1Tb+ </vs-radio>






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