<template>
  <div>
    <div class="center">
      <vs-radio v-model="picked" val="1"> Excel y Office </vs-radio>
      <vs-radio v-model="picked" val="2"> MatLab y software de simulación  </vs-radio>
      <vs-radio  v-model="picked" val="3"> AutoCAD </vs-radio>

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