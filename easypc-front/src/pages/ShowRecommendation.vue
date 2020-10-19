<template>
  <div id='showrec' class="py-5 container-fluid"> 
    <div class="container"></div>
    <p id="tuPC" class="py-5">Este es tu PC</p>
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

<style lang="scss">
  #tuPC {
        font-size: 7vw;
        font-family: 'Righteous', serif;
        text-shadow: .03em .03em 0 hsla(230,40%,50%,1);
  }
</style>