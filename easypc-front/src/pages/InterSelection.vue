<template>
  <div class="container">
    <h1 class="titulo-int d-none d-md-block">Selecciona tus componentes</h1>
    <InterComp />
  </div>
</template>

<script>
import InterComp from "../components/InterComp/InterComp";
export default {
  name: "InterSelection",
  components: {
    InterComp,
  },
};
</script>

<style scoped>
.titulo-int {
  font-size: calc(2rem + 2.2vw);
  font-family: "Poppins", sans-serif;
}
</style>