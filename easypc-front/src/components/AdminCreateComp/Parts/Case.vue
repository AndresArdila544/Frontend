<template>
  <div>
    <div>
      <div v-if="!submitted">
          <vs-input label="Modelo" type="text" v-model="caja.model" />
          <vs-input label="Precio SpeedLogic" type="number" v-model="caja.priceSL" class="py-4" />
          <vs-input label="Precio Tauret Computadores" type="number" v-model="caja.priceTauret"  class="py-4"/>
          <vs-input label="Precio Clones y Perifericos" type="number" v-model="caja.priceCyP" class="py-4"/>
          <vs-input label="Link SpeedLogic" type="text" v-model="caja.linkSL" class="py-4" />
          <vs-input label="Link Tauret Computadores" type="text" v-model="caja.linkTauret"  class="py-4"/>
          <vs-input label="Link Clones y Perifericos" type="text" v-model="caja.linkCyP" class="py-4"/>
          <vs-input label="Link Imagen" type="text" v-model="caja.linkPicture" class="py-4"/>
          <vs-button @click="saveCaja">Añadir Case </vs-button>
      </div>
      <div v-else>
        <h4>Has añadido un Case!</h4>
        <vs-button @click="newCaja">Crear otro Case</vs-button>
      </div>
      <P>Case: {{$data}}</P>
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
        .then(response => {
          this.caja.idCase = response.data.id;
          console.log(response.data);
          this.submitted = true;
        })
        .catch(e => {
          console.log(e);
        });
    },
    newCaja() {
      this.submitted = false;
      this.caja = {};
    }
  },
}
</script>

<style>

</style>