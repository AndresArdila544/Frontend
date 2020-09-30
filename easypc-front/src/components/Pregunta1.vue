<template>
  <div class="p1">
    <ul>
    <li><vs-radio v-model="picked" val="1" v-on:change="$emit('option', val)"> Videojuegos </vs-radio></li>
    <li><vs-radio v-model="picked" val="2" v-on:change="$emit('option', val)">
      Diseño/edición de fotos o video
    </vs-radio></li>
    <li><vs-radio v-model="picked" val="3" v-on:change="$emit('option', val)"> Trabajo </vs-radio></li>
    </ul>

     <PopUpBeg1  v-bind:valor="picked"></PopUpBeg1>

  </div>
</template>

  <script>
import PopUpBeg1 from '../components/PopUpBeg1.vue'


export default {
  data: () => ({
    picked: 0,
    active: false,
  }),
  components: {
    PopUpBeg1,

  },
};
</script>

<style>
.p1 {
  text-align: left;
  position: relative;
  vertical-align: middle;
}
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}

</style>