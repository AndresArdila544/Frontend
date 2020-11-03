<template>
  <div>
    <div v-if="!submitted">
          <vs-input label-placeholder="Modelo" type="text" v-model="cpu.model" class="py-1"/>
          <vs-input label-placeholder="Poder" type="number" v-model="cpu.power" class="py-1" />
          <vs-input label-placeholder="# de Nucleos" type="number" v-model="cpu.cores" class="py-1" />
          <vs-input label-placeholder="Velocidad" type="number" v-model="cpu.speed" class="py-1" />
          <vs-input label-placeholder="Precio SpeedLogic" type="number" v-model="cpu.priceSL" class="py-1" />
          <vs-input label-placeholder="Precio Tauret Computadores" type="number" v-model="cpu.priceTauret"  class="py-1"/> 
          <vs-input label-placeholder="Precio Clones y Perifericos" type="number" v-model="cpu.priceCyP" class="py-1"/>
          <vs-input label-placeholder="Link SpeedLogic" type="text" v-model="cpu.linkSL" class="py-1" />
          <vs-input label-placeholder="Link Tauret Computadores" type="text" v-model="cpu.linkTauret"  class="py-1"/>
          <vs-input label-placeholder="Link Clones y Perifericos" type="text" v-model="cpu.linkCyP" class="py-1"/>
          <vs-input label-placeholder="Link Imagen" type="text" v-model="cpu.linkPicture" class="py-1"/>
          <vs-input label-placeholder="Link Benchmark" type="text" v-model="cpu.linkBenchmark" class="py-1"/>
      <vs-button @click="saveCPU">Añadir CPU </vs-button>
  </div>
      <div v-else>
      <h4>Has añadido una CPU!</h4>
      <vs-button @click="newCPU">Crear otra CPU</vs-button>
      </div>
  </div>
</template>

<script>
import EasyPCService from "../../../services/EasyPCService";

export default {
  name: "CPUForm",
  components:{},
  data() {
    return {
      cpu: {
        idCPU: null,
        model: "",
        power: 0,
        cores: 0,
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
    saveCPU() {
      var data = {
        idCPU: this.cpu.idCPU,
        model: this.cpu.model,
        power: this.cpu.power,
        cores: this.cpu.cores,
        speed: this.cpu.speed,
        priceSL: this.cpu.priceSL,
        priceTauret: this.cpu.priceTauret,
        priceCyP: this.cpu.priceCyP,
        linkSL: this.cpu.linkSL,
        linkTauret: this.cpu.linkTauret,
        linkCyP: this.cpu.linkCyP,
        linkBenchmark: this.cpu.linkBenchmark,
        linkPicture: this.cpu.linkPicture,
      };

      EasyPCService.createCPU(data)
        .then(response => {
          this.cpu.idCPU = response.data.id;
          console.log(response.data);
          this.submitted = true;
        })
        .catch(e => {
          console.log(e);
        });
    },
    newCPU() {
      this.submitted = false;
      this.cpu = {};
    }
  }
}
</script>

<style>

</style>