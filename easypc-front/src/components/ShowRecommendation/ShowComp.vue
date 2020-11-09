<template>
  <div class="container">
    <RecomListItem
      v-bind:Parte="CurrentCPU"
      v-bind:tipo="'cpus'"
      v-bind:defaultPart="CurrentCPU.model"
      v-bind:defaultImage="CurrentCPU.linkPicture"
      v-if="CurrentCPU"
    />
    <RecomListItem
      v-bind:Parte="CurrentGPU"
      v-bind:tipo="'gpus'"
      v-bind:defaultPart="CurrentGPU.model"
      v-bind:defaultImage="CurrentGPU.linkPicture"
      v-if="CurrentGPU"
    />
    <RecomListItem
      v-bind:Parte="CurrentMotherboard"
      v-bind:tipo="'motherboards'"
      v-bind:defaultPart="CurrentMotherboard.model"
      v-bind:defaultImage="CurrentMotherboard.linkPicture"
      v-if="CurrentMotherboard"
    />
    <RecomListItem
      v-bind:Parte="CurrentRAM"
      v-bind:tipo="'rams'"
      v-bind:defaultPart="CurrentRAM.model"
      v-bind:defaultImage="CurrentRAM.linkPicture"
      v-if="CurrentRAM"
    />
    <RecomListItem
      v-bind:Parte="CurrentCooling"
      v-bind:tipo="'coolings'"
      v-bind:defaultPart="CurrentCooling.model"
      v-bind:defaultImage="CurrentCooling.linkPicture"
      v-if="CurrentCooling"
    />
    <RecomListItem
      v-bind:Parte="CurrentSSD"
      v-bind:tipo="'ssds'"
      v-bind:defaultPart="CurrentSSD.model"
      v-bind:defaultImage="CurrentSSD.linkPicture"
      v-if="CurrentSSD"
    />
    <RecomListItem
      v-bind:Parte="CurrentHDD"
      v-bind:tipo="'hdds'"
      v-bind:defaultPart="CurrentHDD.model"
      v-bind:defaultImage="CurrentHDD.linkPicture"
      v-if="CurrentHDD"
    />
    <RecomListItem
      v-bind:Parte="CurrentPowerSupply"
      v-bind:tipo="'power-supplies'"
      v-bind:defaultPart="CurrentPowerSupply.model"
      v-bind:defaultImage="CurrentPowerSupply.linkPicture"
      v-if="CurrentPowerSupply"
    />
    <RecomListItem
      v-bind:Parte="CurrentMouse"
      v-bind:tipo="'mice'"
      v-bind:defaultPart="CurrentMouse.model"
      v-bind:defaultImage="CurrentMouse.linkPicture"
      v-if="CurrentMouse"
    />
    <RecomListItem
      v-bind:Parte="CurrentKeyboard"
      v-bind:tipo="'keyboards'"
      v-bind:defaultPart="CurrentKeyboard.model"
      v-bind:defaultImage="CurrentKeyboard.linkPicture"
      v-if="CurrentKeyboard"
    />
    <RecomListItem
      v-bind:Parte="CurrentMonitor"
      v-bind:tipo="'monitors'"
      v-bind:defaultPart="CurrentMonitor.model"
      v-bind:defaultImage="CurrentMonitor.linkPicture"
      v-if="CurrentMonitor"
    />
    <RecomListItem
      v-bind:Parte="CurrentCase"
      v-bind:tipo="'cases'"
      v-bind:defaultPart="CurrentCase.model"
      v-bind:defaultImage="CurrentCase.linkPicture"
      v-if="CurrentCase"
    />
    <div class="d-flex flex-row-reverse TotalPrice px-2">
      <p>
        Total: ${{
          price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
        }}
        COP
      </p>
    </div>
  </div>
</template>

<script>
import EasyPCService from "../../services/EasyPCService";
import RecomListItem from "./RecomListItem.vue";

export default {
  name: "ShowComp",
  components: {
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
      tipo: String,
      price: "",
    };
  },
  props: {},
  methods: {
    
    retrieveBuildPrice(answers) {
      EasyPCService.getRecommendedPrice(answers)
        .then((response) => {
          this.price = response.data;
        })
        .catch((e) => {
          console.log("Retrive price error: " + e);
        });
    },
    retrieveBuild(answers) {
      EasyPCService.getRecommendedBuild(answers)
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
          
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
  mounted() {
    //this.retrieveBuild(1);
    
  },
  beforeMount(){
    this.retrieveBuild(this.$store.getters["getAnswers"])
    this.retrieveBuildPrice(this.$store.getters["getAnswers"])
    this.$store.commit("emptyAnswers")
  }
};
</script>

<style>
@import url(https://fonts.googleapis.com/css2?family=Fredoka+One&display=swa);
p.ex1 {
  padding-bottom: 25px;
}
.TotalPrice {
    font-size: 4vw;
    font-family: 'Fredoka One', cursive;
    color: #FF9941;
    background-color: rgb(24, 23, 23);
    
}

</style>