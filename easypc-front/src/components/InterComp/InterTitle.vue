<template>
  <div>
    <div v-if="count == 0">
        <h3>Empecemos por lo primero: La CPU</h3>
    </div>
    <div v-if="count == 1">
        <h3>Ahora la Tarjeta Madre</h3>
    </div>
    <div v-if="count == 2">
        <h3>Sigamos con la memoria RAM</h3>
    </div>
    <div v-if="count == 3">
        <h3>La GPU o Tarjeta Gráfica</h3>
    </div>
    <div v-if="count == 4">
        <h3>La refrigeración</h3>
    </div>
    <div v-if="count == 5">
        <h3>Almacenamiento: SDD</h3>
    </div>
    <div v-if="count == 6">
        <h3>Almacenamiento: HDD</h3>
    </div>
    <div v-if="count == 7">
        <h3>La fuente de poder</h3>
    </div>
    <div v-if="count == 8">
        <h3>Perifericos: El mouse</h3>
    </div>
    <div v-if="count == 9">
        <h3>Perifericos: El Teclado</h3>
    </div>
    <div v-if="count == 10">
        <h3>Perifericos: El monitor</h3>
    </div>
    <div v-if="count == 11">
        <h3>Finalmente, el chasis de tu PC</h3>
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
h3{
    text-align:left
}
</style>