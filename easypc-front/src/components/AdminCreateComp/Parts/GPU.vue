<template>
  <div>
    <div v-if="!submitted" class="row">
      <div class="col col-sm-8 col-md-4 col-12 offset-md-2 offset-sm-0">
        <v-text-field label="Modelo" type="text" v-model="gpu.model" color="rgb(59,22,100)" />
      </div>
      <div class="col col-sm-8 col-md-4 col-12">
        <v-text-field label="Poder" type="number" v-model="gpu.power" color="rgb(59,22,100)" />
      </div>
      <div class="col col-sm-8 col-md-4 col-12 offset-md-2 offset-sm-0">
        <v-text-field label="Memoria" type="number" v-model="gpu.memory" color="rgb(59,22,100)" />
      </div>
      <div class="col col-sm-8 col-md-4 col-12 ">
        <v-text-field label="Precio SpeedLogic" type="number" v-model="gpu.priceSL" color="rgb(59,22,100)" />
      </div>
      <div class="col col-sm-8 col-md-4 col-12 offset-md-2 offset-sm-0">
        <v-text-field label="Precio Tauret Computadores" type="number" v-model="gpu.priceTauret" color="rgb(59,22,100)" />
      </div>
      <div class="col col-sm-8 col-md-4 col-12">
        <v-text-field label="Precio Clones y Perifericos" type="number" v-model="gpu.priceCyP" color="rgb(59,22,100)" />
      </div>
      <div class="col col-sm-8 col-md-4 col-12 offset-md-2 offset-sm-0">
        <v-text-field label="Link SpeedLogic" type="text" v-model="gpu.linkSL" color="rgb(59,22,100)" />
      </div>
      <div class="col col-sm-8 col-md-4 col-12">
        <v-text-field label="Link Tauret Computadores" type="text" v-model="gpu.linkTauret" color="rgb(59,22,100)" />
      </div>
      <div class="col col-sm-8 col-md-4 col-12 offset-md-2 offset-sm-0">
        <v-text-field label="Link Clones y Perifericos" type="text" v-model="gpu.linkCyP" color="rgb(59,22,100)" />
      </div>
      <div class="col col-sm-8 col-md-4 col-12">
        <v-text-field label="Link Imagen" type="text" v-model="gpu.linkPicture" color="rgb(59,22,100)" />
      </div>
      <div class="col col-sm-8 col-md-4 col-12 offset-md-2 offset-sm-0">
        <v-text-field label="Link Benchmark" type="text" v-model="gpu.linkBenchmark" color="rgb(59,22,100)" />
      </div>
      <div class="col col-sm-10 col-md-4 col-12 offset-sm-2 offset-md-8">
        <vs-button 
        @click="saveGPU"
        block
        class="boton-crear"
        color="rgb(59,22,100)">
        <h2>
          Añadir GPU
        </h2>
        </vs-button>
      </div>
      
    </div>
    <div v-else>
      <h4>Has añadido una GPU!</h4>
      <vs-button @click="newGPU">Crear otra GPU</vs-button>
    </div>
  </div>
</template>

<script>
import EasyPCService from "../../../services/EasyPCService";

export default {
  name: "GPUForm",
  components: {},
  data() {
    return {
      gpu: {
        idGPU: null,
        model: "",
        power: '',
        memory: '',
        priceSL: '',
        priceTauret: '',
        priceCyP: '',
        linkSL: "",
        linkTauret: "",
        linkCyP: "",
        linkBenchmark: "",
        linkPicture: "",
      },
      submitted: false,
    };
  },
  methods: {
    saveGPU() {
      var data = {
        idGPU: this.gpu.idGPU,
        model: this.gpu.model,
        power: this.gpu.power,
        memory: this.gpu.memory,
        priceSL: this.gpu.priceSL,
        priceTauret: this.gpu.priceTauret,
        priceCyP: this.gpu.priceCyP,
        linkSL: this.gpu.linkSL,
        linkTauret: this.gpu.linkTauret,
        linkCyP: this.gpu.linkCyP,
        linkBenchmark: this.gpu.linkBenchmark,
        linkPicture: this.gpu.linkPicture,
      };

      EasyPCService.createGPU(data)
        .then((response) => {
          this.gpu.idGPU = response.data.id;
          
          this.submitted = true;
        })
        .catch((e) => {
          console.log(e);
        });
    },
    newGPU() {
      this.submitted = false;
      this.gpu = {};
    },
  },
};
</script>

<style>
.boton-crear {
  font-size: calc(2rem + 1.2vw);
  font-family: 'Poppins', sans-serif;
}
</style>