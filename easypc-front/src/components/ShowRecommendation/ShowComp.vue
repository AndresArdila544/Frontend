<template>
  <div class="container">
    <!--dev 
    <div class="container">
      <div class="row align-items-center">
        <div class="col">
          <ShowImage v-bind:imgURL="CurrentCPU.linkPicture"> </ShowImage>
        </div>
        <div class="col-8">
          <h4>
            {{ CurrentCPU.model }}: {{ CurrentCPU.speed }} GHz
            {{ CurrentCPU.cores }} Cores
          </h4>
        </div>
      </div>
    </div>
     -->
    <RecomListItem v-bind:Parte="CurrentCPU" v-if="CurrentCPU" />
    <RecomListItem v-bind:Parte="CurrentGPU" v-if="CurrentGPU" />
    <RecomListItem v-bind:Parte="CurrentMotherboard" v-if="CurrentMotherboard" />
    <RecomListItem v-bind:Parte="CurrentRAM" v-if="CurrentRAM" />
    <RecomListItem v-bind:Parte="CurrentCooling" v-if="CurrentCooling" />
    <RecomListItem v-bind:Parte="CurrentSSD" v-if="CurrentSSD" />
    <RecomListItem v-bind:Parte="CurrentHDD" v-if="CurrentHDD" />
    <RecomListItem v-bind:Parte="CurrentPowerSupply" v-if="CurrentPowerSupply" />
    <RecomListItem v-bind:Parte="CurrentMouse" v-if="CurrentMouse" />
    <RecomListItem v-bind:Parte="CurrentKeyboard" v-if="CurrentKeyboard" />
    <RecomListItem v-bind:Parte="CurrentMonitor" v-if="CurrentMonitor" />
    <RecomListItem v-bind:Parte="CurrentCase" v-if="CurrentCase" />

    <p class="ex1"></p>
  </div>
</template>

<script>
import EasyPCService from "../../services/EasyPCService";
//import ShowImage from "../ShowImage.vue";
//import ShowLink from "../ShowLinkOverTxt.vue";
import RecomListItem from "./RecomListItem.vue";

export default {
  name: "ShowComp",
  components: {
    //ShowImage,
    //ShowLink,
    RecomListItem,
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
      id: 1,
      tipo: "",
    };
  },
  methods: {
    retrieveBuild(id) {
      EasyPCService.getBuildById(id)
        .then((response) => {
          //this.build = response.data;
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
    this.retrieveBuild(1);
  },
};
</script>

<style>
p.ex1 {
  padding-bottom: 25px;
}

/* Dev 
body {
  padding-top: 2rem;
  padding-bottom: 2rem;
}
h3 {
  margin-top: 2rem;
}
.row {
  margin-bottom: 1rem;
}
.row .row {
  margin-top: 1rem;
  margin-bottom: 0;
}
[class*="col-"] {
  padding-top: 1rem;
  padding-bottom: 1rem;
  background-color: ;
  border: 1px solid black;
}
[class*="col"] {
  padding-top: 1rem;
  padding-bottom: 1rem;
  background-color: ;
  border: 1px solid black;
}
hr {
  margin-top: 2rem;
  margin-bottom: 2rem;
}
/* Dev */
</style>