<template>
  
  <div class="container">
      <p  id="tusComp" class="py-5">Selecciona tus componentes</p>
      <p> Sabemos que tienes conocimiento sobre computadores por eso te vamos a guiar en como armar tu PC.</p> 
      <InterComp/>
  </div>
  
</template>

<script>
import InterComp from "../components/InterComp/InterComp"
export default {
    name:"InterSelection",
    components: {
        InterComp,
    }

}
</script>

<style>

</style>