<template>
  <div>
    <div class="center">
      <vs-radio v-model="picked" val="1"> NO </vs-radio>
      <vs-radio v-model="picked" val="2"> A veces </vs-radio>
      <vs-radio  v-model="picked" val="3"> SI </vs-radio>
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