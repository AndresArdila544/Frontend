<template>
  <div>
    <div v-if="!submitted">
        <vs-input label="Modelo" type="text" v-model="ram.model" />
        <vs-input label="Poder" type="number" v-model="ram.power" class="py-4" />
        <vs-input label="Memoria" type="number" v-model="ram.memory" class="py-4" />
        <vs-input label="Velocidad" type="number" v-model="ram.speed" class="py-4" />
        <vs-input label="Precio SpeedLogic" type="number" v-model="ram.priceSL" class="py-4" />
        <vs-input label="Precio Tauret Computadores" type="number" v-model="ram.priceTauret"  class="py-4"/>
        <vs-input label="Precio Clones y Perifericos" type="number" v-model="ram.priceCyP" class="py-4"/>
        <vs-input label="Link SpeedLogic" type="text" v-model="ram.linkSL" class="py-4" />
        <vs-input label="Link Tauret Computadores" type="text" v-model="ram.linkTauret"  class="py-4"/>
        <vs-input label="Link Clones y Perifericos" type="text" v-model="ram.linkCyP" class="py-4"/>
        <vs-input label="Link Imagen" type="text" v-model="ram.linkPicture" class="py-4"/>
        <vs-input label="Link Benchmark" type="text" v-model="ram.linkBenchmark" class="py-4"/>
        <vs-button @click="saveRAM">Añadir RAM </vs-button>
    </div>
    <div v-else>
      <h4>Has añadido una RAM!</h4>
      <vs-button @click="newRAM">Crear otra RAM</vs-button>
    </div>
    <P>RAM: {{$data}}</P>

  </div>
</template>

<script>
import EasyPCService from "../../../services/EasyPCService";


export default {
  name: "RAMForm",
  components:{},
  data() {
    return {
      ram: {
        idRAM: null,
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
    saveRAM() {
      var data = {
        idRAM: this.ram.idRAM,
        model: this.ram.model,
        power: this.ram.power,
        memory: this.ram.memory,
        speed: this.ram.speed,
        priceSL: this.ram.priceSL,
        priceTauret: this.ram.priceTauret,
        priceCyP: this.ram.priceCyP,
        linkSL: this.ram.linkSL,
        linkTauret: this.ram.linkTauret,
        linkCyP: this.ram.linkCyP,
        linkBenchmark: this.ram.linkBenchmark,
        linkPicture: this.ram.linkPicture,
      };

      EasyPCService.createRAM(data)
        .then(response => {
          this.ram.idRAM = response.data.id;
          console.log(response.data);
          this.submitted = true;
        })
        .catch(e => {
          console.log(e);
        });
    },
    newRAM() {
      this.submitted = false;
      this.ram = {};
    }
  }
};
</script>

<style>
</style>