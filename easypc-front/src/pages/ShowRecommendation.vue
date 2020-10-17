<template>
  <div>
    <div class="container"></div>
    <h1 class="page-header">Este es tu PC</h1>
    <ShowComp />

  </div>
</template>

<script>
import ShowComp from "../components/ShowRecommendation/ShowComp.vue";

export default {
  name: "ShowRec",
  components: {
    ShowComp,
  },
  data: () => ({}),
};
</script>

<style>
</style>