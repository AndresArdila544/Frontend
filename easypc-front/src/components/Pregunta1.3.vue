<template>
  <div>
    <div class="center">
      <vs-radio v-model="picked" val="1"> Normal, quiero jugar sin darle tanta importancia a la calidad </vs-radio>
      <vs-radio v-model="picked" val="2"> Bien, me importa la calidad pero no es lo más importante </vs-radio>
      <vs-radio  v-model="picked" val="3"> Excelente, quiero que se vean los más mínimos detalles </vs-radio>
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