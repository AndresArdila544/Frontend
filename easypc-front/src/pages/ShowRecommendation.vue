<template>
  <div>
    <ShowCPU/>
  </div>
</template>

<script>

import ShowCPU from '../components/ShowRecommendation/ShowCPU.vue'


export default {
    name: "ShowRec",
    components: {
    ShowCPU
  },
    data: () => ({
    path: "https://cpu.userbenchmark.com/Intel-Core-i5-9600K/Rating/4031",
  }),
}
</script>

<style>

</style>