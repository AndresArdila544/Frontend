<template>
  <div>
    <div class="container">
      <h1 class="titulo-int d-none d-md-block">Selecciona tus componentes</h1>
      
      <ExpertComp />
    </div>
  </div>
</template>

<script>
import ExpertComp from "../components/Expert/ExpertComp";
export default {
  name: "Expert",
  components: {
    ExpertComp,
  },
};
</script>

