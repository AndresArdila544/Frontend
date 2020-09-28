<template>
  <div>
    <div class="center">
      <vs-radio v-model="picked" val="1"> Poco</vs-radio>
      <vs-radio v-model="picked" val="2"> Medio</vs-radio>
      <vs-radio  v-model="picked" val="3"> Demasiado </vs-radio>
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