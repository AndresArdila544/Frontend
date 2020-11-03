<template>
  <div>
    <div v-if="!submitted">
        <vs-input label="Modelo" type="text" v-model="ssd.model" />
        <vs-input label="Poder" type="number" v-model="ssd.power" class="py-4" />
        <vs-input label="Memoria" type="number" v-model="ssd.memory" class="py-4" />
        <vs-input label="Velocidad" type="number" v-model="ssd.speed" class="py-4" />
        <vs-input label="Precio SpeedLogic" type="number" v-model="ssd.priceSL" class="py-4" />
        <vs-input label="Precio Tauret Computadores" type="number" v-model="ssd.priceTauret"  class="py-4"/>
        <vs-input label="Precio Clones y Perifericos" type="number" v-model="ssd.priceCyP" class="py-4"/>
        <vs-input label="Link SpeedLogic" type="text" v-model="ssd.linkSL" class="py-4" />
        <vs-input label="Link Tauret Computadores" type="text" v-model="ssd.linkTauret"  class="py-4"/>
        <vs-input label="Link Clones y Perifericos" type="text" v-model="ssd.linkCyP" class="py-4"/>
        <vs-input label="Link Imagen" type="text" v-model="ssd.linkPicture" class="py-4"/>
        <vs-input label="Link Benchmark" type="text" v-model="ssd.linkBenchmark" class="py-4"/>
        <vs-button @click="saveSSD">Añadir SSD </vs-button>
    </div>
    <div v-else>
      <h4>Has añadido un SSD!</h4>
      <vs-button @click="newSSD">Crear otro SSD</vs-button>
    </div>
    

  </div>
</template>

<script>
import EasyPCService from "../../../services/EasyPCService";


export default {
  name: "SSDForm",
  components:{},
  data() {
    return {
      ssd: {
        idSSD: null,
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
    saveSSD() {
      var data = {
        idSSD: this.ssd.idSSD,
        model: this.ssd.model,
        power: this.ssd.power,
        memory: this.ssd.memory,
        speed: this.ssd.speed,
        priceSL: this.ssd.priceSL,
        priceTauret: this.ssd.priceTauret,
        priceCyP: this.ssd.priceCyP,
        linkSL: this.ssd.linkSL,
        linkTauret: this.ssd.linkTauret,
        linkCyP: this.ssd.linkCyP,
        linkBenchmark: this.ssd.linkBenchmark,
        linkPicture: this.ssd.linkPicture,
      };

      EasyPCService.createSSD(data)
        .then(response => {
          this.ssd.idssd = response.data.id;
          console.log(response.data);
          this.submitted = true;
        })
        .catch(e => {
          console.log(e);
        });
    },
    newSSD() {
      this.submitted = false;
      this.ssd = {};
    }
  }
}
</script>

<style>

</style>