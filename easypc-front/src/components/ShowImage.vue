<template>
  <div>
    <p><img v-bind:src="imgURL" height="400" /></p>
  </div>
</template>

<script>
export default {
  name: "ShowImage",
  components: {},
  props: ["imgURL"],
  data: () => ({
  }),
};
</script>

<style>
</style>