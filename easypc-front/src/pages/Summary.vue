<template>
  <div class="">
      
      <Footer/>
      <p id = "" class="Summary pt-4">
          Resumen # {{CurrentBuild.idBuild}}
      </p>
      <p class="user">Build para {{CurrentBuild.user.username}}</p>
      <div class="pt-2 parts">
        <ComponentView v-bind:Parte="CurrentCPU" v-if="CurrentCPU" tipo="CPU"/>
        <ComponentView v-bind:Parte="CurrentGPU" v-if="CurrentGPU" tipo="GPU"/>
        <ComponentView v-bind:Parte="CurrentMotherboard" v-if="CurrentMotherboard" tipo="Motherboard"/>
        <ComponentView v-bind:Parte="CurrentRAM" v-if="CurrentRAM" tipo="RAM"/>
        <ComponentView v-bind:Parte="CurrentCooling" v-if="CurrentCooling" tipo="Cooling"/>
        <ComponentView v-bind:Parte="CurrentSSD" v-if="CurrentSSD" tipo="SSD"/>
        <ComponentView v-bind:Parte="CurrentHDD" v-if="CurrentHDD" tipo="HDD"/>
        <ComponentView v-bind:Parte="CurrentPowerSupply" v-if="CurrentPowerSupply" tipo="PowerSupply"/>
        <ComponentView v-bind:Parte="CurrentMouse" v-if="CurrentMouse" tipo="Mouse"/>
        <ComponentView v-bind:Parte="CurrentKeyboard" v-if="CurrentKeyboard" tipo="Keyboard"/>
        <ComponentView v-bind:Parte="CurrentMonitor" v-if="CurrentMonitor" tipo="Monitor"/>
        <ComponentView v-bind:Parte="CurrentCase" v-if="CurrentCase" tipo="Case"/> 
       

      
      <div class="d-flex flex-row-reverse TotalPrice px-2">
        <p>Total Minimo: ${{Total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}} COP
        </p>
       
      </div>
      </div>
      
  </div>
</template>

<script>

import Footer from '../components/Footer.vue'
import ComponentView from '../components/Summary/ComponentView'
import EasyPCService from '../services/EasyPCService'


export default {
    name: 'Summary',
    components: {
        ComponentView,
        Footer,
       
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
            Total:Number,
        }
    },
    props: {
        id: Number,
    },
    methods: {
        retrieveBuildFromDB(id){
            EasyPCService.getBuildById(id).then((response) => {
                this.CurrentBuild = response.data;
                this.CurrentCPU=this.CurrentBuild.cpu;
                this.CurrentGPU=this.CurrentBuild.gpu;
                this.CurrentMotherboard=this.CurrentBuild.motherboard;
                this.CurrentRAM=this.CurrentBuild.ram;
                this.CurrentCooling=this.CurrentBuild.cooling;
                this.CurrentSSD=this.CurrentBuild.ssd;
                this.CurrentHDD=this.CurrentBuild.hdd;
                this.CurrentPowerSupply=this.CurrentBuild.powerSupply;
                this.CurrentMouse=this.CurrentBuild.mouse;
                this.CurrentKeyboard=this.CurrentBuild.keyboard;
                this.CurrentMonitor=this.CurrentBuild.monitor;
                this.CurrentCase=this.CurrentBuild.caseObj;
            } ).catch( (e) => {console.log(e)} )
            EasyPCService.getBuildPriceById(id).then((response)=> {
                this.Total = response.data
            }).catch( (e) => {console.log(e)} )
        },
        

    },
    mounted() {
        this.retrieveBuildFromDB(1);
    }
}




</script>



<style scoped lang="scss">
@import url(https://fonts.googleapis.com/css2?family=Fredoka+One&display=swa);
@import url(https://fonts.googleapis.com/css2?family=Maven+Pro:wght@700&display=swap);

.TotalPrice {
    font-size: 4vw;
    font-family: 'Fredoka One', cursive;
    color: #FF9941;
    background-color: rgb(24, 23, 23);
    
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
    0%{      
        opacity: 0;
    }

    100%{
        opacity: 1;
    }
}




</style>