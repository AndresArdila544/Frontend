<template>
  <div>
    <div id="radio" class="center">
      <p id="pregunta" class="pt-4 d-flex justify-content-start">¿Sueles hacer muchas tareas a la vez?</p>
      <vs-radio v-model="picked" class="d-flex justify-content-start" val="1"> NO </vs-radio>
      <vs-radio v-model="picked" class="d-flex justify-content-start" val="2"> A veces </vs-radio>
      <vs-radio  v-model="picked" class="pb-1 d-flex justify-content-start" val="3"> SI </vs-radio>
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