<template>
  <div class="h2-title">
    <div v-if="count == 0">
      <h2>Empecemos por lo primero: La CPU</h2>
    </div>
    <div v-if="count == 1">
      <h2>Ahora la Tarjeta Madre</h2>
    </div>
    <div v-if="count == 2">
      <h2>Sigamos con la memoria RAM</h2>
    </div>
    <div v-if="count == 3">
      <h2>La GPU o Tarjeta Gráfica</h2>
    </div>
    <div v-if="count == 4">
      <h2>La refrigeración</h2>
    </div>
    <div v-if="count == 5">
      <h2>Almacenamiento: SDD</h2>
    </div>
    <div v-if="count == 6">
      <h2>Almacenamiento: HDD</h2>
    </div>
    <div v-if="count == 7">
      <h2>La fuente de poder</h2>
    </div>
    <div v-if="count == 8">
      <h2>Perifericos: El mouse</h2>
    </div>
    <div v-if="count == 9">
      <h2>Perifericos: El Teclado</h2>
    </div>
    <div v-if="count == 10">
      <h2>Perifericos: El monitor</h2>
    </div>
    <div v-if="count == 11">
      <h2>Finalmente, el chasis de tu PC</h2>
    </div>
  </div>
</template>

<script>
export default {
  name: "InterTitile",
  data: () => ({}),
  props: {
    count: Number,
  },
};
</script>

<style scoped>
 h2{
  text-align: left;
  font-family: "Poppins", sans-serif;
  };
</style>