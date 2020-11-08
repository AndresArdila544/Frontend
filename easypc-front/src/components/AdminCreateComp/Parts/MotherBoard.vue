<template>
  <div class="">
    <div v-if="!submitted" class="row">
      <div class="col col-sm-8 col-md-4 col-12 offset-md-2 offset-sm-0">
        <v-text-field 
        label="Modelo" 
        type="text" 
        v-model="motherboard.model"
        color="rgb(59,22,100)" />
      </div> 
      <div class="col col-sm-8 col-md-4 col-12 ">
         <v-text-field 
         label="Poder"
         suffix="W" 
         type="number" 
         v-model="motherboard.power" 
         class="" 
         color="rgb(59,22,100)"/>
      </div> 
      <div class="col col-sm-8 col-md-4 col-12 offset-md-2 offset-sm-0">
        <v-text-field 
        label="Precio SpeedLogic" 
        type="number" 
        v-model="motherboard.priceSL" 
        class="" 
        color="rgb(59,22,100)"/>
      </div> 
      <div class="col col-sm-8 col-md-4 col-12 ">
        <v-text-field 
        label="Precio Tauret Computadores" 
        type="number" 
        v-model="motherboard.priceTauret"  
        class=""
        color="rgb(59,22,100)"/>
      </div> 
      <div class="col col-sm-8 col-md-4 col-12 offset-md-2 offset-sm-0">
        <v-text-field 
        label="Precio Clones y Perifericos" 
        type="number" 
        v-model="motherboard.priceCyP" 
        class=""
        color="rgb(59,22,100)"/>
      </div> 
      <div class="col col-sm-8 col-md-4 col-12 ">
        <v-text-field 
        label="Link SpeedLogic" 
        type="text" 
        v-model="motherboard.linkSL" 
        class="" 
        color="rgb(59,22,100)"/>
      </div> 
      <div class="col col-sm-8 col-md-4 col-12 offset-md-2 offset-sm-0">
        <v-text-field 
        label="Link Tauret Computadores" 
        type="text" 
        v-model="motherboard.linkTauret"  
        class=""
        color="rgb(59,22,100)"/>
      </div> 
      <div class="col col-sm-8 col-md-4 col-12 ">
        <v-text-field 
        label="Link Clones y Perifericos" 
        type="text" 
        v-model="motherboard.linkCyP" 
        class=""
        color="rgb(59,22,100)"/>
      </div> 
      <div class="col col-sm-8 col-md-4 col-12 offset-md-2 offset-sm-0">
        <v-text-field 
        label="Link Imagen" 
        type="text" 
        v-model="motherboard.linkPicture"
        class=""
        color="rgb(59,22,100)"/>
      </div> 
      <div class="col col-sm-8 col-md-4 col-12 ">
        <v-text-field 
        label="Link Benchmark" 
        type="text" 
        v-model="motherboard.linkBenchmark" 
        class=""
        color="rgb(59,22,100)"/>
      </div> 
      <div class="col col-sm-10 col-md-4 col-12 offset-sm-2 offset-md-8">
        <vs-button 
        @click="saveMotherboard"
        color="rgb(59,22,100)"
        class="boton-crear"
        block>
        <h2>
          Añadir Tarjeta Madre
        </h2>
         </vs-button>
      </div> 
    </div>
    <div v-else class="col-12">
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
        power: '',
        priceSL: '',
        priceTauret: '',
        priceCyP: '',
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
.boton-crear {
  font-size: calc(2rem + 1.2vw);
  font-family: 'Poppins', sans-serif;
}
</style>