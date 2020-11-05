<template>
  <div>
    <div>
    <div v-if="!submitted">
        <vs-input label="Modelo" type="text" v-model="cooling.model" />
        <vs-input label="Poder" type="number" v-model="cooling.power" class="py-4" />
        <vs-input label="Precio SpeedLogic" type="number" v-model="cooling.priceSL" class="py-4" />
        <vs-input label="Precio Tauret Computadores" type="number" v-model="cooling.priceTauret"  class="py-4"/>
        <vs-input label="Precio Clones y Perifericos" type="number" v-model="cooling.priceCyP" class="py-4"/>
        <vs-input label="Link SpeedLogic" type="text" v-model="cooling.linkSL" class="py-4" />
        <vs-input label="Link Tauret Computadores" type="text" v-model="cooling.linkTauret"  class="py-4"/>
        <vs-input label="Link Clones y Perifericos" type="text" v-model="cooling.linkCyP" class="py-4"/>
        <vs-input label="Link Imagen" type="text" v-model="cooling.linkPicture" class="py-4"/>

        <vs-button @click="saveCooling">Añadir Cooling </vs-button>
    </div>
    <div v-else>
      <h4>Has añadido un Cooling!</h4>
      <vs-button @click="newCooling">Crear otro Cooling</vs-button>
    </div>
    
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
        power: 0,
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
        .then(response => {
          this.cooling.idCooling = response.data.id;
          console.log(response.data);
          this.submitted = true;
        })
        .catch(e => {
          console.log(e);
        });
    },
    newCooling() {
      this.submitted = false;
      this.cooling = {};
    }
  },
}
</script>

<style>

</style>