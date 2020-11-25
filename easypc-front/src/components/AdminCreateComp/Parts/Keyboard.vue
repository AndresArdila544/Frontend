<template>
  <div>
    <div v-if="!submitted" class="row">
      <div class="col col-sm-8 col-md-4 col-12 offset-md-2 offset-sm-0">
        <v-text-field label="Modelo" type="text" v-model="keyboard.model" color="rgb(59,22,100)" />
      </div>
      <div class="col col-sm-8 col-md-4 col-12">
        <v-text-field
          label="Precio SpeedLogic"
          type="number"
          v-model="keyboard.priceSL"
          color="rgb(59,22,100)"
        />
      </div>
      <div class="col col-sm-8 col-md-4 col-12 offset-md-2 offset-sm-0">
        <v-text-field
          label="Precio Tauret Computadores"
          type="number"
          v-model="keyboard.priceTauret"
          color="rgb(59,22,100)"
        />
      </div>
      <div class="col col-sm-8 col-md-4 col-12">
        <v-text-field
          label="Precio Clones y Perifericos"
          type="number"
          v-model="keyboard.priceCyP"
          color="rgb(59,22,100)"
        />
      </div>
      <div class="col col-sm-8 col-md-4 col-12 offset-md-2 offset-sm-0">
        <v-text-field
          label="Link SpeedLogic"
          type="text"
          v-model="keyboard.linkSL"
          color="rgb(59,22,100)"
        />
      </div>
      <div class="col col-sm-8 col-md-4 col-12">
        <v-text-field
          label="Link Tauret Computadores"
          type="text"
          v-model="keyboard.linkTauret"
          color="rgb(59,22,100)"
        />
      </div>
      <div class="col col-sm-8 col-md-4 col-12 offset-md-2 offset-sm-0">
        <v-text-field
          label="Link Clones y Perifericos"
          type="text"
          v-model="keyboard.linkCyP"
          color="rgb(59,22,100)"
        />
      </div>
      <div class="col col-sm-8 col-md-4 col-12">
        <v-text-field
          label="Link Imagen"
          type="text"
          v-model="keyboard.linkPicture"
          color="rgb(59,22,100)"
        />
      </div>
      <div class="col col-sm-10 col-md-4 col-12 offset-sm-2 offset-md-8">
        <vs-button  @click="saveKeyboard" block color="rgb(59,22,100)" class="boton-crear">
          <h2>Añadir Teclado</h2>
        </vs-button>
      </div>
    </div>
    
    <div v-else>
      <h4>Has añadido un Teclado!</h4>
      <vs-button @click="newKeyboard">Crear otro Teclado</vs-button>
    </div>
  </div>
</template>

<script>
import EasyPCService from "../../../services/EasyPCService";

export default {
  name: "KeyboardForm",
  components: {},
  data() {
    return {
      keyboard: {
        idKeyboard: null,
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
    saveKeyboard() {
      var data = {
        idKeyboard: this.keyboard.idKeyboard,
        model: this.keyboard.model,
        power: this.keyboard.power,
        priceSL: this.keyboard.priceSL,
        priceTauret: this.keyboard.priceTauret,
        priceCyP: this.keyboard.priceCyP,
        linkSL: this.keyboard.linkSL,
        linkTauret: this.keyboard.linkTauret,
        linkCyP: this.keyboard.linkCyP,
        linkPicture: this.keyboard.linkPicture,
      };

      EasyPCService.createKeyboard(data)
        .then((response) => {
          this.keyboard.idKeyboard = response.data.id;
           
          this.submitted = true;
        })
        .catch((e) => {
          console.log(e);
        });
    },
    newKeyboard() {
      this.submitted = false;
      this.keyboard = {};
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