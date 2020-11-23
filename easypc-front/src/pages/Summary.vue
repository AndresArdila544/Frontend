<template>
  <div class>
    <p class="Summary pt-4">Resumen # {{ CurrentBuild.idBuild }}</p>
    <p class="user">Build para {{ user}}</p>
    <div class="pt-2 parts row accordion">
      <div
        class="p-1 col-12 col-md-8 col-lg-6 offset-lg-0 offset-md-2 offset-sm-0"
        v-if="CurrentCPU"
      >
        <ComponentView v-bind:Parte="CurrentCPU" tipo="CPU" />
      </div>
      <div
        class="p-1 col-12 col-md-8 col-lg-6 offset-lg-0 offset-md-2 offset-sm-0"
        v-if="CurrentGPU"
      >
        <ComponentView v-bind:Parte="CurrentGPU" tipo="GPU" />
      </div>
      <div
        class="p-1 col-12 col-md-8 col-lg-6 offset-lg-0 offset-md-2 offset-sm-0"
        v-if="CurrentMotherboard"
      >
        <ComponentView v-bind:Parte="CurrentMotherboard" tipo="Motherboard" />
      </div>
      <div
        class="p-1 col-12 col-md-8 col-lg-6 offset-lg-0 offset-md-2 offset-sm-0"
        v-if="CurrentRAM"
      >
        <ComponentView v-bind:Parte="CurrentRAM" tipo="RAM" />
      </div>
      <div
        class="p-1 col-12 col-md-8 col-lg-6 offset-lg-0 offset-md-2 offset-sm-0"
        v-if="CurrentCooling"
      >
        <ComponentView v-bind:Parte="CurrentCooling" tipo="Cooling" />
      </div>
      <div
        class="p-1 col-12 col-md-8 col-lg-6 offset-lg-0 offset-md-2 offset-sm-0"
        v-if="CurrentSSD"
      >
        <ComponentView v-bind:Parte="CurrentSSD" tipo="SSD" />
      </div>
      <div
        class="p-1 col-12 col-md-8 col-lg-6 offset-lg-0 offset-md-2 offset-sm-0"
        v-if="CurrentHDD"
      >
        <ComponentView v-bind:Parte="CurrentHDD" tipo="HDD" />
      </div>
      <div
        class="p-1 col-12 col-md-8 col-lg-6 offset-lg-0 offset-md-2 offset-sm-0"
        v-if="CurrentPowerSupply"
      >
        <ComponentView v-bind:Parte="CurrentPowerSupply" tipo="PowerSupply" />
      </div>
      <div
        class="p-1 col-12 col-md-8 col-lg-6 offset-lg-0 offset-md-2 offset-sm-0"
        v-if="CurrentMouse"
      >
        <ComponentView v-bind:Parte="CurrentMouse" tipo="Mouse" />
      </div>
      <div
        class="p-1 col-12 col-md-8 col-lg-6 offset-lg-0 col-lg-6 offset-lg-0 offset-md-2 offset-sm-0"
        v-if="CurrentKeyboard"
      >
        <ComponentView v-bind:Parte="CurrentKeyboard" tipo="Keyboard" />
      </div>
      <div
        class="p-1 col-12 col-md-8 col-lg-6 offset-lg-0 offset-md-2 offset-sm-0"
        v-if="CurrentMonitor"
      >
        <ComponentView v-bind:Parte="CurrentMonitor" tipo="Monitor" />
      </div>
      <div
        class="p-1 col-12 col-md-8 col-lg-6 offset-lg-0 offset-md-2 offset-sm-0"
        v-if="CurrentCase"
      >
        <ComponentView v-bind:Parte="CurrentCase" tipo="Case" />
      </div>

      <div class="container">
        <h2 class="TotalPrice">
          Total Minimo: ${{
          Total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
          }}
          COP
        </h2>
      </div>
      <div class="col-12 col-sm-6 col-md-5 offset-md-6  mb-3">
        <vs-button
          class=""
          block
          @click="saveModel"
          color="rgb(59,22,100)"
        >
          <h2>Guardar Build</h2>
        </vs-button>
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
      user: this.$store.getters.getUser,
      Total: Number,
      retrievedBuildID: Number, 
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
    retrieveBuildFromAnswers(answers) {
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

      EasyPCService.getRecommendedPrice(answers)
        .then((response) => {
          this.Total = response.data;
        })
        .catch((e) => {
          console.log("Retrive price error: " + e);
        });
    },
    saveModel(){
      if(!this.$store.getters.getAuthenticated){
        this.$router.push({name: 'Login'})
      }else{
        var data = {
          idBuild: null,
          cpu: this.CurrentBuild.cpu,
          gpu: this.CurrentBuild.gpu,
          motherboard: this.CurrentBuild.motherboard,
          ram: this.CurrentBuild.ram,
          cooling: this.CurrentBuild.cooling,
          ssd: this.CurrentBuild.ssd,
          hdd: this.CurrentBuild.hdd,
          powerSupply: this.CurrentBuild.powerSupply,
          mouse: this.CurrentBuild.mouse,
          keyboard: this.CurrentBuild.keyboard,
          monitor: this.CurrentBuild.monitor,
          caseObj: this.CurrentBuild.caseObj,
          user:{
             username: this.user
          }
        }
        EasyPCService.createBuild(data)
          .then(() => {
          })
          .catch((e) => {
            console.log(e);
          });
        this.$router.push({name: 'MyBuilds'})
      }
    }
  },
  mounted() {},
  beforeMount() {
    if (this.$store.getters["getInterIDBuild"] != -1) {
      this.retrieveBuildFromDB(this.$store.getters["getInterIDBuild"]);
      this.retrievedBuildID = this.$store.getters["getInterIDBuild"];
      this.$store.commit("setInterIDBuild", -1);
    } else {
      this.retrieveBuildFromAnswers(this.$store.getters["getAnswers"]);
      this.$store.commit("emptyAnswers");
    }
    
  },
};
</script>



<style scoped >
@import url(https://fonts.googleapis.com/css2?family=Fredoka+One&display=swa);
@import url(https://fonts.googleapis.com/css2?family=Maven+Pro:wght@700&display=swap);

.TotalPrice {
  font-size: calc(1.8rem + 1.7vw);
  font-family: "Fredoka One", cursive;
  color: #ff9941;
  background-color: rgb(24, 23, 23);
  border-radius: 25% 25% 50% 50%;
  border-style: none none solid none;
  border-color: #3b1664;
}

.Summary {
  font-family: "Maven Pro", sans-serif;
  font-size: calc(1.9rem + 3.8vw);
  color: rgb(24, 23, 23);
}

.parts {
  animation: animacion;
  animation-duration: 2s;
}

.user {
  font-size: calc(1rem + 1.5vw);
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