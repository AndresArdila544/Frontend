<template>
  <div>
    <div id="radio" class="center">
      <p id="pregunta" class="pt-1 d-flex justify-content-start">¿Qué programas necesitas correr?</p>
      <vs-radio v-model="picked" class="d-flex justify-content-start" val="1"> Excel y Office </vs-radio>
      <vs-radio v-model="picked" class="d-flex justify-content-start" val="2"> MatLab y software de simulación  </vs-radio>
      <vs-radio  v-model="picked" class="d-flex justify-content-start" val="3"> AutoCAD </vs-radio>
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


<style>

</style>