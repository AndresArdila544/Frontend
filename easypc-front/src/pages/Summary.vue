<template>
  <div>
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
  </div>
</template>

<script>
import ComponentView from '../components/Summary/ComponentView'
import EasyPCService from '../services/EasyPCService'

export default {
    name: 'Summary',
    components: {
        ComponentView
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
        }
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
        },

    },
    mounted() {
        this.retrieveBuildFromDB(1);
    }
}
</script>



<style>

</style>