<template>
  <div>
    <div v-if="!submitted" class="row">
      <div class="col col-sm-8 col-md-4 col-12 offset-md-2 offset-sm-0">
        <v-text-field label="Modelo" type="text" v-model="caja.model" color="rgb(59,22,100)" />
      </div>
      <div class="col col-sm-8 col-md-4 col-12">
        <v-text-field label="Precio SpeedLogic" type="number" v-model="caja.priceSL" color="rgb(59,22,100)" />
      </div>
      <div class="col col-sm-8 col-md-4 col-12 offset-md-2 offset-sm-0">
        <v-text-field
          label="Precio Tauret Computadores"
          type="number"
          v-model="caja.priceTauret"
          color="rgb(59,22,100)"
        />
      </div>
      <div class="col col-sm-8 col-md-4 col-12">
        <v-text-field
          label="Precio Clones y Perifericos"
          type="number"
          v-model="caja.priceCyP"
          color="rgb(59,22,100)"
        />
      </div>
      <div class="col col-sm-8 col-md-4 col-12 offset-md-2 offset-sm-0">
        <v-text-field label="Link SpeedLogic" type="text" v-model="caja.linkSL" color="rgb(59,22,100)" />
      </div>
      <div class="col col-sm-8 col-md-4 col-12">
        <v-text-field
          label="Link Tauret Computadores"
          type="text"
          v-model="caja.linkTauret"
          color="rgb(59,22,100)"
        />
      </div>
      <div class="col col-sm-8 col-md-4 col-12 offset-md-2 offset-sm-0">
        <v-text-field
          label="Link Clones y Perifericos"
          type="text"
          v-model="caja.linkCyP"
          color="rgb(59,22,100)"
        />
      </div>
      <div class="col col-sm-8 col-md-4 col-12">
        <v-text-field label="Link Imagen" type="text" v-model="caja.linkPicture" color="rgb(59,22,100)" />
      </div>

      <div class="col col-sm-10 col-md-4 col-12 offset-sm-2 offset-md-8">
        <vs-button @click="saveCaja" block class="boton-crear" color="rgb(59,22,100)">
          <h2>Añadir Case</h2>
        </vs-button>
      </div>

      
    </div>
    <div v-else>
      <h4>Has añadido un Case!</h4>
      <vs-button @click="newCaja">Crear otro Case</vs-button>
    </div>
  </div>
</template>

<script>
import EasyPCService from "../../../services/EasyPCService";

export default {
  name: "cajaForm",
  components: {},
  data() {
    return {
      caja: {
        idCase: null,
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
    saveCaja() {
      var data = {
        idCase: this.caja.idCase,
        model: this.caja.model,
        power: this.caja.power,
        priceSL: this.caja.priceSL,
        priceTauret: this.caja.priceTauret,
        priceCyP: this.caja.priceCyP,
        linkSL: this.caja.linkSL,
        linkTauret: this.caja.linkTauret,
        linkCyP: this.caja.linkCyP,
        linkPicture: this.caja.linkPicture,
      };

      EasyPCService.createCase(data)
        .then((response) => {
          this.caja.idCase = response.data.id;
          this.submitted = true;
        })
        .catch((e) => {
          console.log(e);
        });
    },
    newCaja() {
      this.submitted = false;
      this.caja = {};
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