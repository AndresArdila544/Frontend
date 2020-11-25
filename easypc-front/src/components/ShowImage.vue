<template>
  <div class="row">
    <img  class="col img-fluid " v-bind:src="imgURL" height="100%" alt="" />
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

