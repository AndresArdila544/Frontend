<template>
  <div class="">
    <p id="pregunta" class="pt-3 d-flex justify-content-start">¿Qué videojuegos quieres correr?</p>
    <div class="d-flex flex-column bd-highlight justify-content-start" >
      <div id="radio">
         <vs-checkbox   indeterminate val="fnt" class="" v-model="options">Fornite</vs-checkbox>
      </div>
      <vs-checkbox id="radio"  indeterminate val="mcft" class="" v-model="options">Minecraft</vs-checkbox>
      <vs-checkbox id="radio"  indeterminate val="cod" class="" v-model="options">Call of duty</vs-checkbox>
      <vs-checkbox id="radio"  indeterminate val="lol" class="" v-model="options">League of legends</vs-checkbox>
    </div>


    <!--<span class="data">{{ options }}</span>-->
  </div>
</template>

<script>



export default {
  data: () => ({
    options: [],
  }),
};
</script>

<style  scoped>
#pregunta {
  font-size: 4vw;
}
#opcion {
  font-size: 3vw;
}
#radio {
  font-size: 2.7vw
}
.vs-checkbox {
  font-size: 2.7vw
}
</style>