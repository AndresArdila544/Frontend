<template>
  <div>
    <div v-if="!submitted" class="row">
      <div class="col col-sm-8 col-md-4 col-12 offset-md-2 offset-sm-0">
        <v-text-field label="Modelo" type="text" v-model="ssd.model" color="rgb(59,22,100)" />
      </div>
      <div class="col col-sm-8 col-md-4 col-12">
        <v-text-field label="Poder" type="number" v-model="ssd.power" color="rgb(59,22,100)" />
      </div>
      <div class="col col-sm-8 col-md-4 col-12 offset-md-2 offset-sm-0">
        <v-text-field label="Memoria" type="number" v-model="ssd.memory" color="rgb(59,22,100)" />
      </div>
      <div class="col col-sm-8 col-md-4 col-12">
        <v-text-field label="Velocidad" type="number" v-model="ssd.speed" color="rgb(59,22,100)" />
      </div>
      <div class="col col-sm-8 col-md-4 col-12 offset-md-2 offset-sm-0">
        <v-text-field
          label="Precio SpeedLogic"
          type="number"
          v-model="ssd.priceSL"
          color="rgb(59,22,100)"
        />
      </div>
      <div class="col col-sm-8 col-md-4 col-12">
        <v-text-field
          label="Precio Tauret Computadores"
          type="number"
          v-model="ssd.priceTauret"
          color="rgb(59,22,100)"
        />
      </div>
      <div class="col col-sm-8 col-md-4 col-12 offset-md-2 offset-sm-0">
        <v-text-field
          label="Precio Clones y Perifericos"
          type="number"
          v-model="ssd.priceCyP"
          color="rgb(59,22,100)"
        />
      </div>
      <div class="col col-sm-8 col-md-4 col-12">
        <v-text-field label="Link SpeedLogic" type="text" v-model="ssd.linkSL" color="rgb(59,22,100)" />
      </div>
      <div class="col col-sm-8 col-md-4 col-12  offset-md-2 offset-sm-0">
        <v-text-field
          label="Link Tauret Computadores"
          type="text"
          v-model="ssd.linkTauret"
          color="rgb(59,22,100)"
        />
      </div>
      <div class="col col-sm-8 col-md-4 col-12">
        <v-text-field  offset-md-2 offset-sm-0
          label="Link Clones y Perifericos"
          type="text"
          v-model="ssd.linkCyP"
          color="rgb(59,22,100)"
        />
      </div>
      <div class="col col-sm-8 col-md-4 col-12  offset-md-2 offset-sm-0">
        <v-text-field label="Link Imagen" type="text" v-model="ssd.linkPicture" color="rgb(59,22,100)" />
      </div>
      
      <div class="col col-sm-8 col-md-4 col-12">
        <v-text-field
          label="Link Benchmark"
          type="text"
          v-model="ssd.linkBenchmark"
          color="rgb(59,22,100)"
        />
      </div>
      <div class="col col-sm-10 col-md-4 col-12 offset-sm-2 offset-md-8">
        <vs-button @click="saveSSD" block color="rgb(59,22,100)" class="boton-crear">
          <h2>Añadir SSD</h2>
        </vs-button>
      </div>
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
        power: '',
        memory: '',
        speed: '',
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
.boton-crear {
  font-size: calc(2rem + 1.2vw);
  font-family: 'Poppins', sans-serif;
}
</style>