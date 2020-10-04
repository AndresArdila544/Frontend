<template>
  <div>
    <div v-if="!submitted">
        <vs-input label="Modelo" type="text" v-model="hdd.model" />
        <vs-input label="Poder" type="number" v-model="hdd.power" class="py-4" />
        <vs-input label="Memoria" type="number" v-model="hdd.memory" class="py-4" />
        <vs-input label="Velocidad" type="number" v-model="hdd.speed" class="py-4" />
        <vs-input label="Precio SpeedLogic" type="number" v-model="hdd.priceSL" class="py-4" />
        <vs-input label="Precio Tauret Computadores" type="number" v-model="hdd.priceTauret"  class="py-4"/>
        <vs-input label="Precio Clones y Perifericos" type="number" v-model="hdd.priceCyP" class="py-4"/>
        <vs-input label="Link SpeedLogic" type="text" v-model="hdd.linkSL" class="py-4" />
        <vs-input label="Link Tauret Computadores" type="text" v-model="hdd.linkTauret"  class="py-4"/>
        <vs-input label="Link Clones y Perifericos" type="text" v-model="hdd.linkCyP" class="py-4"/>
        <vs-input label="Link Imagen" type="text" v-model="hdd.linkPicture" class="py-4"/>
        <vs-input label="Link Benchmark" type="text" v-model="hdd.linkBenchmark" class="py-4"/>
        <vs-button @click="saveHDD">Añadir HDD </vs-button>
    </div>
    <div v-else>
      <h4>Has añadido una HDD!</h4>
      <vs-button @click="newHDD">Crear otra HDD</vs-button>
    </div>
    <P>HDD: {{$data}}</P>

  </div>
</template>

<script>
import EasyPCService from "../../../services/EasyPCService";


export default {
  name: "HDDForm",
  components:{},
  data() {
    return {
      hdd: {
        idHDD: null,
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
    saveHDD() {
      var data = {
        idHDD: this.hdd.idHDD,
        model: this.hdd.model,
        power: this.hdd.power,
        memory: this.hdd.memory,
        speed: this.hdd.speed,
        priceSL: this.hdd.priceSL,
        priceTauret: this.hdd.priceTauret,
        priceCyP: this.hdd.priceCyP,
        linkSL: this.hdd.linkSL,
        linkTauret: this.hdd.linkTauret,
        linkCyP: this.hdd.linkCyP,
        linkBenchmark: this.hdd.linkBenchmark,
        linkPicture: this.hdd.linkPicture,
      };

      EasyPCService.createHDD(data)
        .then(response => {
          this.hdd.idHDD = response.data.id;
          console.log(response.data);
          this.submitted = true;
        })
        .catch(e => {
          console.log(e);
        });
    },
    newHDD() {
      this.submitted = false;
      this.hdd = {};
    }
  }
}
</script>

<style>

</style>