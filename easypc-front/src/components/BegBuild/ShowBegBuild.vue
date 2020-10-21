<template>
  <div class="container">
    <PartBegBuild v-bind:Parte="CurrentCPU" v-bind:defaultPart="CurrentCPU.model" v-if="CurrentCPU"  />
    <PartBegBuild v-bind:Parte="CurrentGPU" v v-bind:defaultPart="CurrentGPU.model" v-if="CurrentGPU" />
    <PartBegBuild v-bind:Parte="CurrentMotherboard"  v-bind:defaultPart="CurrentMotherboard.model" v-if="CurrentMotherboard" />
    <PartBegBuild v-bind:Parte="CurrentRAM" v-bind:defaultPart="CurrentRAM.model" v-if="CurrentRAM" />
    <PartBegBuild v-bind:Parte="CurrentCooling"  v-bind:defaultPart="CurrentCooling.model" v-if="CurrentCooling" />
    <PartBegBuild v-bind:Parte="CurrentSSD" v-bind:defaultPart="CurrentSSD.model" v-if="CurrentSSD" />
    <PartBegBuild v-bind:Parte="CurrentHDD"  v-bind:defaultPart="CurrentHDD.model" v-if="CurrentHDD" />
    <PartBegBuild v-bind:Parte="CurrentPowerSupply" v-bind:defaultPart="CurrentPowerSupply.model" v-if="CurrentPowerSupply" />
    <PartBegBuild v-bind:Parte="CurrentMouse"  v-bind:defaultPart="CurrentMouse.model" v-if="CurrentMouse" />
    <PartBegBuild v-bind:Parte="CurrentKeyboard"  v-bind:defaultPart="CurrentKeyboard.model" v-if="CurrentKeyboard" />
    <PartBegBuild v-bind:Parte="CurrentMonitor"  v-bind:defaultPart="CurrentMonitor.model" v-if="CurrentMonitor" />
    <PartBegBuild v-bind:Parte="CurrentCase"  v-bind:defaultPart="CurrentCase.model" v-if="CurrentCase" />
    <p class="ex1"></p>
  </div>
</template>

<script>
import EasyPCService from "../../services/EasyPCService";
import PartBegBuild from "./PartBegBuild.vue";
export default {
    name: "ShowBegBuild",
  components: {
    PartBegBuild,
  },
  data() {
    return {
      CurrentBuild: [],
      CurrentCPU: [],
      CurrentGPU: [],
      CurrentMotherboard: [],
      CurrentRAM: [],
      CurrentCooling: [],
      CurrentSSD: [],
      CurrentHDD: [],
      CurrentPowerSupply: [],
      CurrentMouse: [],
      CurrentKeyboard: [],
      CurrentMonitor: [],
      CurrentCase: [],
      tipo: String,
    };
  },
  props: {
      id: Number,
      Parte: {
      model: String,
      priceSL: Number,
      priceTauret: Number,
      priceCyP: Number,
      linkPicture: String,
    },
  },
  methods: {
    retrieveBuild(id) {
      EasyPCService.getBuildById(id)
        .then((response) => {
          this.CurrentBuild = response.data;
          this.CurrentCPU = this.CurrentBuild.cpu;
          this.CurrentGPU = this.CurrentBuild.gpu;
          this.CurrentMotherboard = this.CurrentBuild.motherboard;
          this.CurrentRAM = this.CurrentBuild.ram;
          this.CurrentCooling = this.CurrentBuild.cooling;
          this.CurrentSSD = this.CurrentBuild.ssd;
          this.CurrentHDD = this.CurrentBuild.hdd;
          this.CurrentPowerSupply = this.CurrentBuild.powerSupply;
          this.CurrentMouse = this.CurrentBuild.mouse;
          this.CurrentKeyboard = this.CurrentBuild.keyboard;
          this.CurrentMonitor = this.CurrentBuild.monitor;
          this.CurrentCase = this.CurrentBuild.caseObj;
          //console.log(response.data);
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
  mounted() {
    this.retrieveBuild(this.id);
  },

}
</script>

<style>

</style>