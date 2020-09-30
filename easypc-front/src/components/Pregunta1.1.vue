<template>
  <div class="con-checkbox">
    <p id="pregunta" class="pt-3 d-flex justify-content-start">¿Qué videojuegos quieres correr?</p>
    <div id="radio">
      <vs-checkbox id="opcion" val="fnt" v-model="options">Fortnite</vs-checkbox>
    <vs-checkbox id="opcion" val="mcft" v-model="options">Minecraft</vs-checkbox>
    <vs-checkbox id="opcion" val="cod" v-model="options">Call of duty</vs-checkbox>
    <vs-checkbox id="opcion" val="lol" v-model="options">League of legends</vs-checkbox>
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
</style>