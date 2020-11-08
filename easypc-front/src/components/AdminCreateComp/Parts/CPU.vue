<template>
  <v-form class="">
    <div v-if="!submitted" class="row">
      <div class="col col-sm-8 col-md-4 col-12 offset-md-2 offset-sm-0">
        <v-text-field 
         label="Modelo"
         required
         v-model="cpu.model"
         :rules="required"
         class=""
         color="rgb(59,22,100)"
         hint="Nombre del Producto/Parte"/>
      </div>
      <div class="col col-sm-8 col-md-4 col-12 ">
        <v-text-field 
         label="Poder" 
         type="number" 
         suffix="W" 
         v-model="cpu.power" 
         class=""
         color="rgb(59,22,100)"/>
      </div>
      <div class="col col-sm-8 col-md-4 col-12 offset-md-2 offset-sm-0">
        <v-text-field
         label="# de Nucleos"
         border type="number" 
         v-model="cpu.cores" 
         class=""
         color="rgb(59,22,100)"/>
      </div>
      <div class="col col-sm-8 col-md-4 col-12">
        <v-text-field
         label="Velocidad" 
         border  type="number" 
         v-model="cpu.speed" 
         class=""
         suffix="GHz" 
         color="rgb(59,22,100)"/>
      </div>
      <div class="col col-sm-8 col-md-4 col-12 offset-md-2 offset-sm-0">
        <v-text-field 
         label="Precio SpeedLogic" 
         border type="number" 
         v-model="cpu.priceSL" 
         class="" 
         color="rgb(59,22,100)"/>
      </div>
      <div class="col col-sm-8 col-md-4 col-12">
        <v-text-field 
         label="Precio Tauret Computadores" 
         border type="number" 
         v-model="cpu.priceTauret"  
         class=""
         color="rgb(59,22,100)"/> 
      </div>
      <div class="col col-sm-8 col-md-4 col-12 offset-md-2 offset-sm-0">
        <v-text-field
         label="Precio Clones y Perifericos" 
         border type="number" 
         v-model="cpu.priceCyP" 
         class=""
         color="rgb(59,22,100)"/>
      </div>
      <div class="col col-sm-8 col-md-4 col-12">
        <v-text-field 
        label="Link SpeedLogic" 
        type="url" 
        border 
        v-model="cpu.linkSL" 
        class=""
        color="rgb(59,22,100)"/>
      </div>
      <div class="col col-sm-8 col-md-4 col-12 offset-md-2 offset-sm-0">
        <v-text-field 
        label="Link Tauret Computadores" 
        border type="url" 
        v-model="cpu.linkTauret"  
        class=""
        color="rgb(59,22,100)"/>
      </div>
      <div class="col col-sm-8 col-md-4 col-12">
        <v-text-field 
        label="Link Clones y Perifericos" 
        type="url" 
        v-model="cpu.linkCyP" 
        class=""
        color="rgb(59,22,100)"/>
      </div>
      <div class="col col-sm-8 col-md-4 col-12 offset-md-2 offset-sm-0">
        <v-text-field 
        label="Link Imagen" 
        type="url" border 
        v-model="cpu.linkPicture" 
        class=""
        color="rgb(59,22,100)"/>
      </div>
      <div class="col col-sm-8 col-md-4 col-12">
        <v-text-field 
        label="Link Benchmark" 
        type="url" 
        v-model="cpu.linkBenchmark" 
        class=""
        color="rgb(59,22,100)"/>
      </div>
      <div class="col  col-xs-10 col-sm-10 col-md-4 col-12 offset-sm-2 offset-md-8">
        <vs-button 
         @click="saveCPU"
         block
         color="rgb(59,22,100)"
         class=" boton-crear"
        >
         Añadir CPU 
        </vs-button>
      </div>
  </div>
      <div v-else class="col-12">
        <h4>Has añadido una CPU!</h4>
        <div class="">
          <vs-button @click="newCPU">Crear otra CPU</vs-button>
        </div>
      </div>
  </v-form>
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
        power: '',
        cores:'',
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
      required: [
        value => !!value || 'Este campo es obligatorio.',
      ],
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
.boton-crear {
  text-align: center;
  font-size: calc(1.6rem + 1.2vw);
  font-family: 'Poppins', sans-serif; 
}
</style>