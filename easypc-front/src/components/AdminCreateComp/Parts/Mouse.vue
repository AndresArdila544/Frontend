<template>
  <div>
    <div>
      <div v-if="!submitted">
          <vs-input label="Modelo" type="text" v-model="mouse.model" />
          <vs-input label="Precio SpeedLogic" type="number" v-model="mouse.priceSL" class="py-4" />
          <vs-input label="Precio Tauret Computadores" type="number" v-model="mouse.priceTauret"  class="py-4"/>
          <vs-input label="Precio Clones y Perifericos" type="number" v-model="mouse.priceCyP" class="py-4"/>
          <vs-input label="Link SpeedLogic" type="text" v-model="mouse.linkSL" class="py-4" />
          <vs-input label="Link Tauret Computadores" type="text" v-model="mouse.linkTauret"  class="py-4"/>
          <vs-input label="Link Clones y Perifericos" type="text" v-model="mouse.linkCyP" class="py-4"/>
          <vs-input label="Link Imagen" type="text" v-model="mouse.linkPicture" class="py-4"/>
          <vs-button @click="saveMouse">Añadir Mouse </vs-button>
      </div>
      <div v-else>
        <h4>Has añadido un Mouse!</h4>
        <vs-button @click="newMouse">Crear otro Mouse</vs-button>
      </div>
      <P>Mouse: {{$data}}</P>
    </div>
  </div>
</template>

<script>
import EasyPCService from "../../../services/EasyPCService";


export default {
  name: "MouseForm",
  components: {},
  data() {
    return {
      mouse: {
        idMouse: null,
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
    saveMouse() {
      var data = {
        idMouse: this.mouse.idMouse,
        model: this.mouse.model,
        power: this.mouse.power,
        priceSL: this.mouse.priceSL,
        priceTauret: this.mouse.priceTauret,
        priceCyP: this.mouse.priceCyP,
        linkSL: this.mouse.linkSL,
        linkTauret: this.mouse.linkTauret,
        linkCyP: this.mouse.linkCyP,
        linkPicture: this.mouse.linkPicture,
      };

      EasyPCService.createMouse(data)
        .then(response => {
          this.mouse.idMouse = response.data.id;
          console.log(response.data);
          this.submitted = true;
        })
        .catch(e => {
          console.log(e);
        });
    },
    newMouse() {
      this.submitted = false;
      this.mouse = {};
    }
  },
}
</script>

<style>

</style>