<template>
  <div>
    <div id="radio" class="d-flex flex-column">
      <p id="pregunta" class="pt-3 d-flex justify-content-start">¿Con qué propósito jugarás videojuegos?</p>
      <vs-radio v-model="picked" val="1" class="d-flex justify-content-start"> Ocio en mi tiempo libre </vs-radio>
      <vs-radio v-model="picked" val="2" class="d-flex justify-content-start"> Quiero hacer streams de mis juegos </vs-radio>
    </div>
  </div>
</template>


<script>
export default {
  data: () => ({
    picked: 1,
    val: ""
  }),
};
</script>


<style >
#pregunta {
  font-size: 4vw
}
#radio {
  font-size: 2.7vw
}
</style>