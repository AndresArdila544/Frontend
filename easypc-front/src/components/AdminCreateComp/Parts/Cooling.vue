<template>
  <div>
    <div v-if="!submitted" class="row">

      <div class="col col-sm-8 col-md-4 col-12 offset-md-2 offset-sm-0">
        <v-text-field label="Modelo" type="text" v-model="cooling.model" color="rgb(59,22,100)"/>
      </div>
      <div class="col col-sm-8 col-md-4 col-12 ">
        <v-text-field label="Poder" type="number" v-model="cooling.power" color="rgb(59,22,100)" />
      </div>
      <div class="col col-sm-8 col-md-4 col-12 offset-md-2 offset-sm-0">
        <v-text-field label="Precio SpeedLogic" type="number" v-model="cooling.priceSL" color="rgb(59,22,100)" />
      </div>
      <div class="col col-sm-8 col-md-4 col-12 ">
        <v-text-field
          label="Precio Tauret Computadores"
          type="number"
          v-model="cooling.priceTauret"
          color="rgb(59,22,100)"
        />
      </div>
      <div class="col col-sm-8 col-md-4 col-12 offset-md-2 offset-sm-0">
        <v-text-field
          label="Precio Clones y Perifericos"
          type="number"
          v-model="cooling.priceCyP"
          color="rgb(59,22,100)"
        />
      </div>
      <div class="col col-sm-8 col-md-4 col-12 ">
        <v-text-field label="Link SpeedLogic" type="text" v-model="cooling.linkSL" color="rgb(59,22,100)" />
      </div>
      <div class="col col-sm-8 col-md-4 col-12 offset-md-2 offset-sm-0">
        <v-text-field
          label="Link Tauret Computadores"
          type="text"
          v-model="cooling.linkTauret"
          color="rgb(59,22,100)"
        />
      </div>
      <div class="col col-sm-8 col-md-4 col-12">
        <v-text-field
          label="Link Clones y Perifericos"
          type="text"
          v-model="cooling.linkCyP"
          color="rgb(59,22,100)"
        />
      </div>
      
      <div class="col col-sm-8 col-md-4 col-12 offset-md-2 offset-sm-0">
        <v-text-field label="Link Imagen" type="text" v-model="cooling.linkPicture" color="rgb(59,22,100)" />
      </div>
      <div class="col col-sm-10 col-md-4 col-12 offset-sm-2 offset-md-8">
        <vs-button @click="saveCooling" block
        class="boton-crear"
        color="rgb(59,22,100)">
        <h2>
          Añadir Cooling
        </h2>
        </vs-button>
      </div>
      

    </div>
    <div v-else>
      <h4>Has añadido un Cooling!</h4>
      <vs-button @click="newCooling">Crear otro Cooling</vs-button>
    </div>
  </div>
</template>

<script>
import EasyPCService from "../../../services/EasyPCService";

export default {
  name: "CoolingForm",
  components: {},
  data() {
    return {
      cooling: {
        idCooling: null,
        model: "",
        power: '',
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
    saveCooling() {
      var data = {
        idCooling: this.cooling.idCooling,
        model: this.cooling.model,
        power: this.cooling.power,
        priceSL: this.cooling.priceSL,
        priceTauret: this.cooling.priceTauret,
        priceCyP: this.cooling.priceCyP,
        linkSL: this.cooling.linkSL,
        linkTauret: this.cooling.linkTauret,
        linkCyP: this.cooling.linkCyP,
        linkPicture: this.cooling.linkPicture,
      };

      EasyPCService.createCooling(data)
        .then((response) => {
          this.cooling.idCooling = response.data.id;
          this.submitted = true;
        })
        .catch((e) => {
          console.log(e);
        });
    },
    newCooling() {
      this.submitted = false;
      this.cooling = {};
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
