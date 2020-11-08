<template>
  <div>
    <div v-if="!submitted" class="row">
      <div class="col col-sm-8 col-md-4 col-12 offset-md-2 offset-sm-0">
        <v-text-field label="Modelo" type="text" v-model="mouse.model" color="rgb(59,22,100)" />
      </div>
      <div class="col col-sm-8 col-md-4 col-12">
        <v-text-field
          label="Precio SpeedLogic"
          type="number"
          v-model="mouse.priceSL"
          color="rgb(59,22,100)"
        />
      </div>
      <div class="col col-sm-8 col-md-4 col-12 offset-md-2 offset-sm-0">
        <v-text-field
          label="Precio Tauret Computadores"
          type="number"
          v-model="mouse.priceTauret"
          color="rgb(59,22,100)"
        />
      </div>
      <div class="col col-sm-8 col-md-4 col-12">
        <v-text-field
          label="Precio Clones y Perifericos"
          type="number"
          v-model="mouse.priceCyP"
          color="rgb(59,22,100)"
        />
      </div>
      <div class="col col-sm-8 col-md-4 col-12 offset-md-2 offset-sm-0">
        <v-text-field
          label="Link SpeedLogic"
          type="text"
          v-model="mouse.linkSL"
          color="rgb(59,22,100)"
        />
      </div>
      <div class="col col-sm-8 col-md-4 col-12">
        <v-text-field
          label="Link Tauret Computadores"
          type="text"
          v-model="mouse.linkTauret"
          color="rgb(59,22,100)"
        />
      </div>
      <div class="col col-sm-8 col-md-4 col-12 offset-md-2 offset-sm-0">
        <v-text-field
          label="Link Clones y Perifericos"
          type="text"
          v-model="mouse.linkCyP"
          color="rgb(59,22,100)"
        />
      </div>
      <div class="col col-sm-8 col-md-4 col-12">
        <v-text-field
          label="Link Imagen"
          type="text"
          v-model="mouse.linkPicture"
          color="rgb(59,22,100)"
        />
      </div>
      <div class="col col-sm-10 col-md-4 col-12 offset-sm-2 offset-md-8">
        <vs-button @click="saveMouse" block
         color="rgb(59,22,100)"
         class="boton-crear">
         <h2>
           Añadir Mouse
         </h2>
         </vs-button>
      </div>
    </div>
    <div v-else>
      <h4>Has añadido un Mouse!</h4>
      <vs-button @click="newMouse">Crear otro Mouse</vs-button>
    </div>
  </div>
</template>

<script>
import EasyPCService from "../../../services/EasyPCService";

export default {
  name: "MouseForm",
  components: {},
  data() {
    return {
      mouse: {
        idMouse: null,
        model: "",
        priceSL: '',
        priceTauret: '',
        priceCyP: '',
        linkSL: "",
        linkTauret: "",
        linkCyP: "",
        linkPicture: "",
      },
      submitted: false,
    };
  },
  methods: {
    saveMouse() {
      var data = {
        idMouse: this.mouse.idMouse,
        model: this.mouse.model,
        power: this.mouse.power,
        priceSL: this.mouse.priceSL,
        priceTauret: this.mouse.priceTauret,
        priceCyP: this.mouse.priceCyP,
        linkSL: this.mouse.linkSL,
        linkTauret: this.mouse.linkTauret,
        linkCyP: this.mouse.linkCyP,
        linkPicture: this.mouse.linkPicture,
      };

      EasyPCService.createMouse(data)
        .then((response) => {
          this.mouse.idMouse = response.data.id;
          console.log(response.data);
          this.submitted = true;
        })
        .catch((e) => {
          console.log(e);
        });
    },
    newMouse() {
      this.submitted = false;
      this.mouse = {};
    },
  },
};
</script>

<style>
</style>