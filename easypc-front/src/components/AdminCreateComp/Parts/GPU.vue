<template>
  <div>
    <div v-if="!submitted">
        <vs-input label="Modelo" type="text" v-model="gpu.model" />
        <vs-input label="Poder" type="number" v-model="gpu.power" class="py-4" />
        <vs-input label="Memoria" type="number" v-model="gpu.memory" class="py-4" />
        <vs-input label="Velocidad" type="number" v-model="gpu.speed" class="py-4" />
        <vs-input label="Precio SpeedLogic" type="number" v-model="gpu.priceSL" class="py-4" />
        <vs-input label="Precio Tauret Computadores" type="number" v-model="gpu.priceTauret"  class="py-4"/>
        <vs-input label="Precio Clones y Perifericos" type="number" v-model="gpu.priceCyP" class="py-4"/>
        <vs-input label="Link SpeedLogic" type="text" v-model="gpu.linkSL" class="py-4" />
        <vs-input label="Link Tauret Computadores" type="text" v-model="gpu.linkTauret"  class="py-4"/>
        <vs-input label="Link Clones y Perifericos" type="text" v-model="gpu.linkCyP" class="py-4"/>
        <vs-input label="Link Imagen" type="text" v-model="gpu.linkPicture" class="py-4"/>
        <vs-input label="Link Benchmark" type="text" v-model="gpu.linkBenchmark" class="py-4"/>
        <vs-button @click="saveGPU">Añadir GPU </vs-button>
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
  components:{},
  data() {
    return {
      gpu: {
        idGPU: null,
        model: "",
        power: 0,
        memory: 0,
        speed: 0,
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
    saveGPU() {
      var data = {
        idGPU: this.gpu.idGPU,
        model: this.gpu.model,
        power: this.gpu.power,
        memory: this.gpu.memory,
        speed: this.gpu.speed,
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
        .then(response => {
          this.gpu.idGPU = response.data.id;
          console.log(response.data);
          this.submitted = true;
        })
        .catch(e => {
          console.log(e);
        });
    },
    newGPU() {
      this.submitted = false;
      this.gpu = {};
    }
  }

}
</script>

<style>

</style>