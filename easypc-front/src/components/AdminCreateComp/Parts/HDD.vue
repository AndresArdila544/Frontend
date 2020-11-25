<template>
  <div>
    <div v-if="!submitted" class="row">
      <div class="col col-sm-8 col-md-4 col-12 offset-md-2 offset-sm-0">
        <v-text-field label="Modelo" type="text" v-model="hdd.model" color="rgb(59,22,100)" />
      </div>
      <div class="col col-sm-8 col-md-4 col-12">
        <v-text-field label="Poder" type="number" v-model="hdd.power" color="rgb(59,22,100)" />
      </div>
      <div class="col col-sm-8 col-md-4 col-12 offset-md-2 offset-sm-0">
        <v-text-field label="Memoria" type="number" v-model="hdd.memory" color="rgb(59,22,100)" />
      </div>
      <div class="col col-sm-8 col-md-4 col-12">
        <v-text-field label="Velocidad" type="number" v-model="hdd.speed" color="rgb(59,22,100)" />
      </div>
      <div class="col col-sm-8 col-md-4 col-12 offset-md-2 offset-sm-0">
        <v-text-field
          label="Precio SpeedLogic"
          type="number"
          v-model="hdd.priceSL"
          color="rgb(59,22,100)"
        />
      </div>
      <div class="col col-sm-8 col-md-4 col-12">
        <v-text-field
          label="Precio Tauret Computadores"
          type="number"
          v-model="hdd.priceTauret"
          color="rgb(59,22,100)"
        />
      </div>
      <div class="col col-sm-8 col-md-4 col-12 offset-md-2 offset-sm-0">
        <v-text-field
          label="Precio Clones y Perifericos"
          type="number"
          v-model="hdd.priceCyP"
          color="rgb(59,22,100)"
        />
      </div>
      <div class="col col-sm-8 col-md-4 col-12">
        <v-text-field label="Link SpeedLogic" type="text" v-model="hdd.linkSL" color="rgb(59,22,100)" />
      </div>
      <div class="col col-sm-8 col-md-4 col-12  offset-md-2 offset-sm-0">
        <v-text-field
          label="Link Tauret Computadores"
          type="text"
          v-model="hdd.linkTauret"
          color="rgb(59,22,100)"
        />
      </div>
      <div class="col col-sm-8 col-md-4 col-12">
        <v-text-field  offset-md-2 offset-sm-0
          label="Link Clones y Perifericos"
          type="text"
          v-model="hdd.linkCyP"
          color="rgb(59,22,100)"
        />
      </div>
      <div class="col col-sm-8 col-md-4 col-12  offset-md-2 offset-sm-0">
        <v-text-field label="Link Imagen" type="text" v-model="hdd.linkPicture" color="rgb(59,22,100)" />
      </div>
      
      <div class="col col-sm-8 col-md-4 col-12">
        <v-text-field
          label="Link Benchmark"
          type="text"
          v-model="hdd.linkBenchmark"
          color="rgb(59,22,100)"
        />
      </div>
      <div class="col col-sm-10 col-md-4 col-12 offset-sm-2 offset-md-8">
        <vs-button @click="saveHDD" block color="rgb(59,22,100)" class="boton-crear">
          <h2>Añadir HDD</h2>
        </vs-button>
      </div>
    </div>
    <div v-else>
      <h4>Has añadido una HDD!</h4>
      <vs-button @click="newHDD">Crear otra HDD</vs-button>
    </div>
  </div>
</template>

<script>
import EasyPCService from "../../../services/EasyPCService";

export default {
  name: "HDDForm",
  components: {},
  data() {
    return {
      hdd: {
        idHDD: null,
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
      submitted: false,
    };
  },
  methods: {
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
        .then((response) => {
          this.hdd.idHDD = response.data.id;
          
          this.submitted = true;
        })
        .catch((e) => {
          console.log(e);
        });
    },
    newHDD() {
      this.submitted = false;
      this.hdd = {};
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