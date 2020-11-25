<template>
  <div class="">
    <div v-if="!submitted" class="row">
      <div class="col col-sm-8 col-md-4 col-12 offset-md-2 offset-sm-0">
        <v-text-field
         label="Modelo" 
         type="text" 
         v-model="ram.model"
         color="rgb(59,22,100)" />
      </div>
      <div class="col col-sm-8 col-md-4 col-12">
        <v-text-field
         label="Poder"
         type="number" 
         v-model="ram.power" 
         class="" 
         color="rgb(59,22,100)"/>
      </div>
      <div class="col col-sm-8 col-md-4 col-12 offset-md-2 offset-sm-0">
        <v-text-field
         label="Memoria" 
         type="number" 
         v-model="ram.memory" 
         class="" 
         color="rgb(59,22,100)"/>
      </div>
      <div class="col col-sm-8 col-md-4 col-12">
        <v-text-field 
        label="Velocidad" 
        type="number" 
        v-model="ram.speed" 
        class="" 
        color="rgb(59,22,100)"/>
      </div>
      <div class="col col-sm-8 col-md-4 col-12 offset-md-2 offset-sm-0">
        <v-text-field
         label="Precio SpeedLogic" 
         type="number" 
         v-model="ram.priceSL" 
         class=""
         color="rgb(59,22,100)" />
      </div>
      <div class="col col-sm-8 col-md-4 col-12">
        <v-text-field
         label="Precio Tauret Computadores" 
         type="number" 
         v-model="ram.priceTauret"  
         class=""
         color="rgb(59,22,100)"/>
      </div>
      <div class="col col-sm-8 col-md-4 col-12 offset-md-2 offset-sm-0">
        <v-text-field
         label="Precio Clones y Perifericos" 
         type="number" 
         v-model="ram.priceCyP" 
         class=""
         color="rgb(59,22,100)"/>
      </div>
      <div class="col col-sm-8 col-md-4 col-12">
        <v-text-field
         label="Link SpeedLogic" 
         type="text" 
         v-model="ram.linkSL" 
         class="" 
         color="rgb(59,22,100)"/>
      </div>
      <div class="col col-sm-8 col-md-4 col-12 offset-md-2 offset-sm-0">
        <v-text-field
         label="Link Tauret Computadores" 
         type="text" 
         v-model="ram.linkTauret"  
         class=""
         color="rgb(59,22,100)"/>
      </div>
      <div class="col col-sm-8 col-md-4 col-12">
        <v-text-field
         label="Link Clones y Perifericos" 
         type="text" 
         v-model="ram.linkCyP" 
         class=""
         color="rgb(59,22,100)"/>
      </div>
      <div class="col col-sm-8 col-md-4 col-12 offset-md-2 offset-sm-0">
        <v-text-field
         label="Link Imagen" 
         type="text" 
         v-model="ram.linkPicture" 
         class=""
         color="rgb(59,22,100)"/>
      </div>
      <div class="col col-sm-8 col-md-4 col-12">
        <v-text-field
         label="Link Benchmark" 
         type="text" 
         v-model="ram.linkBenchmark" 
         class=""
         color="rgb(59,22,100)"/>
      </div>
      <div class="col col-sm-10 col-md-4 col-12 offset-sm-2 offset-md-8">
        <vs-button 
        @click="saveRAM"
        block
        color="rgb(59,22,100)"
        class="boton-crear">
        <h2>
           Añadir RAM
        </h2>
        </vs-button>
      </div>
        
    </div>
    <div v-else>
      <h4>Has añadido una RAM!</h4>
      <vs-button 
      @click="newRAM">Crear otra RAM</vs-button>
    </div>
    

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
.boton-crear {
  font-size: calc(2rem + 1.2vw);
  font-family: 'Poppins', sans-serif;
}
</style>