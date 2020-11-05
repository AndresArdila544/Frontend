<template>
  <div>
    <div>
      <div v-if="!submitted">
          <vs-input label="Modelo" type="text" v-model="keyboard.model" />
          <vs-input label="Precio SpeedLogic" type="number" v-model="keyboard.priceSL" class="py-4" />
          <vs-input label="Precio Tauret Computadores" type="number" v-model="keyboard.priceTauret"  class="py-4"/>
          <vs-input label="Precio Clones y Perifericos" type="number" v-model="keyboard.priceCyP" class="py-4"/>
          <vs-input label="Link SpeedLogic" type="text" v-model="keyboard.linkSL" class="py-4" />
          <vs-input label="Link Tauret Computadores" type="text" v-model="keyboard.linkTauret"  class="py-4"/>
          <vs-input label="Link Clones y Perifericos" type="text" v-model="keyboard.linkCyP" class="py-4"/>
          <vs-input label="Link Imagen" type="text" v-model="keyboard.linkPicture" class="py-4"/>
          <vs-button @click="saveKeyboard">Añadir Teclado </vs-button>
      </div>
      <div v-else>
        <h4>Has añadido un Teclado!</h4>
        <vs-button @click="newKeyboard">Crear otro Teclado</vs-button>
      </div>
      
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
        .then(response => {
          this.keyboard.idKeyboard = response.data.id;
          console.log(response.data);
          this.submitted = true;
        })
        .catch(e => {
          console.log(e);
        });
    },
    newKeyboard() {
      this.submitted = false;
      this.keyboard = {};
    }
  },
}
</script>

<style>

</style>