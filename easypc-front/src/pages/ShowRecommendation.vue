<template>
  <div id="showrec" class="container-fluid">
    <p id="tuPC">Este es tu PC</p>
    <ShowComp />
    <div class="float-right">
       <vs-button id="next" size="xl" to="/Summary"
          flat >Siguiente</vs-button>
    </div>
  </div>
</template>

<script>
import ShowComp from "../components/ShowRecommendation/ShowComp.vue";

export default {
  name: "ShowRecom",
  components: {
    ShowComp,
  },
  data: () => ({}),
  beforeCreate(){
    
  }
};
</script>

<style >
#tuPC {
  font-size: 7vw;
  font-family: "Righteous", serif;
  text-shadow: 0.03em 0.03em 0 hsla(230, 40%, 50%, 1);

}
</style>