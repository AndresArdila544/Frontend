<template>
  <div class>
    
    <p id class="Summary pt-4">Resumen # {{CurrentBuild.idBuild}}</p>
    <p class="user">Build para {{CurrentBuild.user.username}}</p>
    <div class="pt-2 parts row">
      <div class="p-1 col-12 col-md-6" v-if="CurrentCPU">
        <ComponentView v-bind:Parte="CurrentCPU"  tipo="CPU" />
      </div>
      <div class="p-1 col-12 col-md-6" v-if="CurrentGPU">
        <ComponentView v-bind:Parte="CurrentGPU"  tipo="GPU" />
      </div>
      <div class="p-1 col-12 col-md-6" v-if="CurrentMotherboard">
        <ComponentView
          v-bind:Parte="CurrentMotherboard"
          tipo="Motherboard"
        />
      </div>
      <div class="p-1 col-12 col-md-6" v-if="CurrentRAM">
        <ComponentView v-bind:Parte="CurrentRAM"  tipo="RAM" />
      </div>
      <div class="p-1 col-12 col-md-6" v-if="CurrentCooling">
        <ComponentView v-bind:Parte="CurrentCooling"  tipo="Cooling" />
      </div>
      <div class="p-1 col-12 col-md-6" v-if="CurrentSSD">
        <ComponentView v-bind:Parte="CurrentSSD"  tipo="SSD" />
      </div>
      <div class="p-1 col-12 col-md-6" v-if="CurrentHDD">
        <ComponentView v-bind:Parte="CurrentHDD"  tipo="HDD" />
      </div>
      <div class="p-1 col-12 col-md-6" v-if="CurrentPowerSupply">
        <ComponentView
          v-bind:Parte="CurrentPowerSupply"
          
          tipo="PowerSupply"
        />
      </div>
      <div class="p-1 col-12 col-md-6" v-if="CurrentMouse">
        <ComponentView v-bind:Parte="CurrentMouse"  tipo="Mouse" />
      </div>
      <div class="p-1 col-12 col-md-6" v-if="CurrentKeyboard">
      <ComponentView v-bind:Parte="CurrentKeyboard"  tipo="Keyboard" />
       
      </div>
      <div class="p-1 col-12 col-md-6" v-if="CurrentMonitor">
      <ComponentView v-bind:Parte="CurrentMonitor"  tipo="Monitor" />
       
      </div>
      <div class="p-1 col-12 col-md-6" v-if="CurrentCase">
      <ComponentView v-bind:Parte="CurrentCase"  tipo="Case" />
       
      </div>


      <div class="container  TotalPrice">
        <p>Total Minimo: ${{Total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}} COP</p>
      </div>
    </div>
  </div>
</template>

<script>

import ComponentView from "../components/Summary/ComponentView";
import EasyPCService from "../services/EasyPCService";

export default {
  name: "Summary",
  components: {
    ComponentView,
    
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
      Total: Number,
      retrievedBuildID: Number
    };
  },
  props: {
    id: Number,
  },
  methods: {
    retrieveBuildFromDB(id) {
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
        })
        .catch((e) => {
          console.log(e);
        });
      EasyPCService.getBuildPriceById(id)
        .then((response) => {
          this.Total = response.data;
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
  mounted() {
    this.retrieveBuildFromDB(this.$store.getters["getInterIDBuild"]);
    this.retrievedBuildID = this.$store.getters["getInterIDBuild"];
  },
};
</script>



<style scoped >
@import url(https://fonts.googleapis.com/css2?family=Fredoka+One&display=swa);
@import url(https://fonts.googleapis.com/css2?family=Maven+Pro:wght@700&display=swap);

.TotalPrice {
  font-size: 4vw;
  font-family: "Fredoka One", cursive;
  color: #ff9941;
  background-color: rgb(24, 23, 23);
  border-radius: 25% 25% 50% 50%;
  border-style: none none solid none;
  border-color: #3b1664;
}

.Summary {
  font-family: "Maven Pro", sans-serif;
  font-size: 7vw;
  color: rgb(24, 23, 23);
}

.parts {
  animation: animacion;
  animation-duration: 2s;
}

.user {
  font-size: 4.23vw;
  font-family: "Maven Pro", sans-serif;
  color: rgb(24, 23, 23);
}

@keyframes animacion {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}
</style>