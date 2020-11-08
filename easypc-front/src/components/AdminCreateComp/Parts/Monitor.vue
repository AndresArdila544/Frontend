<template>
  <div>
    <div v-if="!submitted" class="row">
      <div class="col col-sm-8 col-md-4 col-12 offset-md-2 offset-sm-0">
        <v-text-field label="Modelo" type="text" v-model="monitor.model" color="rgb(59,22,100)" />
      </div>
      <div class="col col-sm-8 col-md-4 col-12">
        <v-text-field
          label="Precio SpeedLogic"
          type="number"
          v-model="monitor.priceSL"
          color="rgb(59,22,100)"
        />
      </div>
      <div class="col col-sm-8 col-md-4 col-12 offset-md-2 offset-sm-0">
        <v-text-field
          label="Precio Tauret Computadores"
          type="number"
          v-model="monitor.priceTauret"
          color="rgb(59,22,100)"
        />
      </div>
      <div class="col col-sm-8 col-md-4 col-12">
        <v-text-field
          label="Precio Clones y Perifericos"
          type="number"
          v-model="monitor.priceCyP"
          color="rgb(59,22,100)"
        />
      </div>
      <div class="col col-sm-8 col-md-4 col-12 offset-md-2 offset-sm-0">
        <v-text-field
          label="Link SpeedLogic"
          type="text"
          v-model="monitor.linkSL"
          color="rgb(59,22,100)"
        />
      </div>
      <div class="col col-sm-8 col-md-4 col-12">
        <v-text-field
          label="Link Tauret Computadores"
          type="text"
          v-model="monitor.linkTauret"
          color="rgb(59,22,100)"
        />
      </div>
      <div class="col col-sm-8 col-md-4 col-12 offset-md-2 offset-sm-0">
        <v-text-field
          label="Link Clones y Perifericos"
          type="text"
          v-model="monitor.linkCyP"
          color="rgb(59,22,100)"
        />
      </div>
      <div class="col col-sm-8 col-md-4 col-12">
        <v-text-field
          label="Link Imagen"
          type="text"
          v-model="monitor.linkPicture"
          color="rgb(59,22,100)"
        />
      </div>
      <div class="col col-sm-10 col-md-4 col-12 offset-sm-2 offset-md-8">
        <vs-button @click="saveMonitor" block color="rgb(59,22,100)" class="boton-crear">
          <h2>Añadir Monitor</h2>
        </vs-button>
      </div>
    </div>
    <div v-else>
      <h4>Has añadido un Monitor!</h4>
      <vs-button @click="newMonitor">Crear otro Monitor</vs-button>
    </div>
  </div>
</template>

<script>
import EasyPCService from "../../../services/EasyPCService";

export default {
  name: "MonitorForm",
  components: {},
  data() {
    return {
      monitor: {
        idMonitor: null,
        model: "",
        priceSL: "",
        priceTauret: "",
        priceCyP: "",
        linkSL: "",
        linkTauret: "",
        linkCyP: "",
        linkPicture: "",
      },
      submitted: false,
    };
  },
  methods: {
    saveMonitor() {
      var data = {
        idMonitor: this.monitor.idMonitor,
        model: this.monitor.model,
        power: this.monitor.power,
        priceSL: this.monitor.priceSL,
        priceTauret: this.monitor.priceTauret,
        priceCyP: this.monitor.priceCyP,
        linkSL: this.monitor.linkSL,
        linkTauret: this.monitor.linkTauret,
        linkCyP: this.monitor.linkCyP,
        linkPicture: this.monitor.linkPicture,
      };

      EasyPCService.createMonitor(data)
        .then((response) => {
          this.monitor.idMonitor = response.data.id;
          console.log(response.data);
          this.submitted = true;
        })
        .catch((e) => {
          console.log(e);
        });
    },
    newMonitor() {
      this.submitted = false;
      this.monitor = {};
    },
  },
};
</script>

<style>
</style>