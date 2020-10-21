<template>
  <div>
    <p><img class="img-fluid mx-auto" v-bind:src="imgURL" height="400" alt="" /></p>
    
  </div>
</template>

<script>
export default {
  name: "ShowImage",
  components: {},
  props: {
    imgURL: String,
    defaultURL: String
  },
  data: () => ({
  }),
};
</script>

<style>
</style>