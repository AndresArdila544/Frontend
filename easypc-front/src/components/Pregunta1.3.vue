<template>
  <div>
    <div class="pb-4 center">
      <p  id="pregunta" class="pt-4 d-flex justify-content-start">¿Cómo quieres que se vean los juegos?</p>
      <vs-radio v-model="picked" val="1" class="d-flex justify-content-start"> Normal, quiero jugar sin darle tanta importancia a la calidad </vs-radio>
      <vs-radio v-model="picked" val="2" class="d-flex justify-content-start"> Bien, me importa la calidad pero no es lo más importante </vs-radio>
      <vs-radio  v-model="picked" val="3" class="d-flex justify-content-start"> Excelente, quiero que se vean los más mínimos detalles </vs-radio>
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
<style  scoped>
#pregunta {
  font-size: 4vw;
}
</style>