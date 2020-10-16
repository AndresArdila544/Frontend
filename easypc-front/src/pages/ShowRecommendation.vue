<template>
  <div>
    <div class="container"></div>
    <h1 class="page-header">Este es tu PC</h1>
    <ShowCPU />
    <ShowCPU />
    <ShowCPU />
    <ShowCPU />
    <ShowCPU />
    <ShowCPU />
  </div>
</template>

<script>
import ShowCPU from "../components/ShowRecommendation/ShowCPU.vue";

export default {
  name: "ShowRec",
  components: {
    ShowCPU,
  },
  data: () => ({}),
};
</script>

<style>
</style>