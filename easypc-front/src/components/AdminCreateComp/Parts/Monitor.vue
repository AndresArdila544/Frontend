<template>
  <div>
    <div>
      <div v-if="!submitted">
          <vs-input label="Modelo" type="text" v-model="monitor.model" />
          <vs-input label="Precio SpeedLogic" type="number" v-model="monitor.priceSL" class="py-4" />
          <vs-input label="Precio Tauret Computadores" type="number" v-model="monitor.priceTauret"  class="py-4"/>
          <vs-input label="Precio Clones y Perifericos" type="number" v-model="monitor.priceCyP" class="py-4"/>
          <vs-input label="Link SpeedLogic" type="text" v-model="monitor.linkSL" class="py-4" />
          <vs-input label="Link Tauret Computadores" type="text" v-model="monitor.linkTauret"  class="py-4"/>
          <vs-input label="Link Clones y Perifericos" type="text" v-model="monitor.linkCyP" class="py-4"/>
          <vs-input label="Link Imagen" type="text" v-model="monitor.linkPicture" class="py-4"/>
          <vs-button @click="saveMonitor">Añadir Monitor </vs-button>
      </div>
      <div v-else>
        <h4>Has añadido un Monitor!</h4>
        <vs-button @click="newMonitor">Crear otro Monitor</vs-button>
      </div>
      <P>Monitor: {{$data}}</P>
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
        priceSL: 0,
        priceTauret: 0,
        priceCyP: 0,
        linkSL: "",
        linkTauret: "",
        linkCyP: "",
        linkPicture: "",
      },
      submitted: false 
    };
  },
  methods:{
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
        .then(response => {
          this.monitor.idMonitor = response.data.id;
          console.log(response.data);
          this.submitted = true;
        })
        .catch(e => {
          console.log(e);
        });
    },
    newMonitor() {
      this.submitted = false;
      this.monitor = {};
    }
  },
}
</script>

<style>

</style>