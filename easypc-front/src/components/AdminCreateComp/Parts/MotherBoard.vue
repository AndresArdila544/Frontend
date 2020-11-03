<template>
  <div>
    <div v-if="!submitted">
        <vs-input label="Modelo" type="text" v-model="motherboard.model" />
        <vs-input label="Poder" type="number" v-model="motherboard.power" class="py-4" />
        <vs-input label="Precio SpeedLogic" type="number" v-model="motherboard.priceSL" class="py-4" />
        <vs-input label="Precio Tauret Computadores" type="number" v-model="motherboard.priceTauret"  class="py-4"/>
        <vs-input label="Precio Clones y Perifericos" type="number" v-model="motherboard.priceCyP" class="py-4"/>
        <vs-input label="Link SpeedLogic" type="text" v-model="motherboard.linkSL" class="py-4" />
        <vs-input label="Link Tauret Computadores" type="text" v-model="motherboard.linkTauret"  class="py-4"/>
        <vs-input label="Link Clones y Perifericos" type="text" v-model="motherboard.linkCyP" class="py-4"/>
        <vs-input label="Link Imagen" type="text" v-model="motherboard.linkPicture" class="py-4"/>
        <vs-input label="Link Benchmark" type="text" v-model="motherboard.linkBenchmark" class="py-4"/>
        <vs-button @click="saveMotherboard">Añadir Tarjeta Madre </vs-button>
    </div>
    <div v-else>
      <h4>Has añadido una Tarjeta Madre!</h4>
      <vs-button @click="newMotherboard">Crear otra Tarjeta Madre</vs-button>
    </div>
    
  </div>
</template>

<script>
import EasyPCService from "../../../services/EasyPCService";


export default {
  name: "MotherBoardForm",
  components: {},
  data() {
    return {
      motherboard: {
        idMotherboard: null,
        model: "",
        power: 0,
        priceSL: 0,
        priceTauret: 0,
        priceCyP: 0,
        linkSL: "",
        linkTauret: "",
        linkCyP: "",
        linkBenchmark: "",
        linkPicture: "",
      },
      submitted: false 
    };
  },
  methods:{
    saveMotherboard() {
      var data = {
        idMotherboard: this.motherboard.idMotherboard,
        model: this.motherboard.model,
        power: this.motherboard.power,
        priceSL: this.motherboard.priceSL,
        priceTauret: this.motherboard.priceTauret,
        priceCyP: this.motherboard.priceCyP,
        linkSL: this.motherboard.linkSL,
        linkTauret: this.motherboard.linkTauret,
        linkCyP: this.motherboard.linkCyP,
        linkBenchmark: this.motherboard.linkBenchmark,
        linkPicture: this.motherboard.linkPicture,
      };

      EasyPCService.createMotherboard(data)
        .then(response => {
          this.motherboard.idMotherboard = response.data.id;
          console.log(response.data);
          this.submitted = true;
        })
        .catch(e => {
          console.log(e);
        });
    },
    newMotherboard() {
      this.submitted = false;
      this.motherboard = {};
    }
  },
}
</script>

<style>

</style>