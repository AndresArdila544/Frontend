<template>
<div>
      <div>
        <div v-if="!submitted">
          <vs-input label="Modelo" type="text" v-model="powersupply.model" />
          <vs-input label="Max Potencia" type="number" v-model="powersupply.maxPower" class="py-4" />
          <vs-input label="Precio SpeedLogic" type="number" v-model="powersupply.priceSL" class="py-4" />
          <vs-input label="Precio Tauret Computadores" type="number" v-model="powersupply.priceTauret"  class="py-4"/>
          <vs-input label="Precio Clones y Perifericos" type="number" v-model="powersupply.priceCyP" class="py-4"/>
          <vs-input label="Link SpeedLogic" type="text" v-model="powersupply.linkSL" class="py-4" />
          <vs-input label="Link Tauret Computadores" type="text" v-model="powersupply.linkTauret"  class="py-4"/>
          <vs-input label="Link Clones y Perifericos" type="text" v-model="powersupply.linkCyP" class="py-4"/>
          <vs-input label="Link Imagen" type="text" v-model="powersupply.linkPicture" class="py-4"/>
          <vs-button @click="savePowersupply">Añadir Power Supply </vs-button>
        </div>
        <div v-else>
          <h4>Has añadido un Power Supply!</h4>
          <vs-button @click="newPowersupply">Crear otra Power Supply</vs-button>
        </div>
        <P>PowerSupply: {{$data}}</P>
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
        maxPower: 0,
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
        .then(response => {
          this.powersupply.idPowersupply = response.data.id;
          console.log(response.data);
          this.submitted = true;
        })
        .catch(e => {
          console.log(e);
        });
    },
    newPowersupply() {
      this.submitted = false;
      this.powersupply = {};
    }
  },
}
</script>

<style>

</style>