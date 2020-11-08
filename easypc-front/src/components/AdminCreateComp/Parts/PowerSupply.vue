<template>
  <div>
    <div v-if="!submitted" class="row">
      <div class="col col-sm-8 col-md-4 col-12 offset-md-2 offset-sm-0">
        <v-text-field
          label="Modelo"
          type="text"
          v-model="powersupply.model"
          color="rgb(59,22,100)"
        />
      </div>

      <div class="col col-sm-8 col-md-4 col-12">
        <v-text-field
          label="Max Potencia"
          type="number"
          v-model="powersupply.maxPower"
          color="rgb(59,22,100)"
        />
      </div>
      <div class="col col-sm-8 col-md-4 col-12 offset-md-2 offset-sm-0">
        <v-text-field
          label="Precio SpeedLogic"
          type="number"
          v-model="powersupply.priceSL"
          color="rgb(59,22,100)"
        />
      </div>
      <div class="col col-sm-8 col-md-4 col-12">
        <v-text-field
          label="Precio Tauret Computadores"
          type="number"
          v-model="powersupply.priceTauret"
          color="rgb(59,22,100)"
        />
      </div>
      <div class="col col-sm-8 col-md-4 col-12 offset-md-2 offset-sm-0">
        <v-text-field
          label="Precio Clones y Perifericos"
          type="number"
          v-model="powersupply.priceCyP"
          color="rgb(59,22,100)"
        />
      </div>
      <div class="col col-sm-8 col-md-4 col-12">
        <v-text-field
          label="Link SpeedLogic"
          type="text"
          v-model="powersupply.linkSL"
          color="rgb(59,22,100)"
        />
      </div>
      <div class="col col-sm-8 col-md-4 col-12 offset-md-2 offset-sm-0">
        <v-text-field
          label="Link Tauret Computadores"
          type="text"
          v-model="powersupply.linkTauret"
          color="rgb(59,22,100)"
        />
      </div>
      <div class="col col-sm-8 col-md-4 col-12">
        <v-text-field
          label="Link Clones y Perifericos"
          type="text"
          v-model="powersupply.linkCyP"
          color="rgb(59,22,100)"
        />
      </div>
      <div class=" col col-sm-8 col-md-4 col-12 offset-md-2 offset-sm-0">
      <v-text-field
        label="Link Imagen"
        type="text"
        v-model="powersupply.linkPicture"
        color="rgb(59,22,100)"
      /></div>
      <div class="col col-sm-10 col-md-4 col-12 offset-sm-2 offset-md-8">
        <vs-button @click="savePowersupply" block color="rgb(59,22,100)" class="boton-crear">
          <h2>Añadir Power Supply</h2>
        </vs-button>
      </div>
    </div>

    <div v-else>
      <h4>Has añadido un Power Supply!</h4>
      <vs-button @click="newPowersupply">Crear otra Power Supply</vs-button>
    </div>
  </div>
</template>

<script>
import EasyPCService from "../../../services/EasyPCService";

export default {
  name: "PowerSupplyForm",
  components: {},
  data() {
    return {
      powersupply: {
        id_powersupply: null,
        model: "",
        maxPower: '',
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
    savePowersupply() {
      var data = {
        idPowerSupply: this.powersupply.id_case,
        model: this.powersupply.model,
        maxPower: this.powersupply.maxPower,
        priceSL: this.powersupply.priceSL,
        priceTauret: this.powersupply.priceTauret,
        priceCyP: this.powersupply.priceCyP,
        linkSL: this.powersupply.linkSL,
        linkTauret: this.powersupply.linkTauret,
        linkCyP: this.powersupply.linkCyP,
        linkPicture: this.powersupply.linkPicture,
      };

      EasyPCService.createPowerSupply(data)
        .then((response) => {
          this.powersupply.idPowersupply = response.data.id;
          console.log(response.data);
          this.submitted = true;
        })
        .catch((e) => {
          console.log(e);
        });
    },
    newPowersupply() {
      this.submitted = false;
      this.powersupply = {};
    },
  },
};
</script>

<style>
</style>