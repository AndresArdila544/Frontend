<template>
  <div>
      <ComponentView/>
      <ComponentView/>
      <ComponentView/>

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
            CurrentMonitor: []
        }
    },
    methods: {
        retrieveBuildFromDB(id){
            EasyPCService.getBuildById(id).then((response) => {
                this.CurrentBuild = response.data;
            } ).catch( (e) => {console.log(e)} )
        },
        retrieveCPUbyId(id){
            EasyPCService.getCPUById(id).then((response) => {
                this.CurrentCPU = response.data;
            } ).catch( (e) => {console.log(e)} )
        },
        retrieveGPUbyId(id){
            EasyPCService.getGPUById(id).then((response) => {
                this.CurrentGPU = response.data;
            } ).catch( (e) => {console.log(e)} )
        },
        retrieveMotherBoardbyId(id){
            EasyPCService.getMotherboardById(id).then((response) => {
                this.CurrentMotherboard = response.data;
            } ).catch( (e) => {console.log(e)} )
        },
        retrieveRAMbyId(id){
            EasyPCService.getRAMById(id).then((response) => {
                this.CurrentRAM = response.data;
            } ).catch( (e) => {console.log(e)} )
        },
        retrieveCoolingbyId(id){
            EasyPCService.getCoolingById(id).then((response) => {
                this.CurrentCooling = response.data;
            } ).catch( (e) => {console.log(e)} )
        },
        retrieveSSDbyId(id){
            EasyPCService.getSSDById(id).then((response) => {
                this.CurrentSSD = response.data;
            } ).catch( (e) => {console.log(e)} )
        },
        retrieveHDDbyId(id){
            EasyPCService.getHDDById(id).then((response) => {
                this.CurrentHDD = response.data;
            } ).catch( (e) => {console.log(e)} )
        },
        retrievePowerSupplybyId(id){
            EasyPCService.getPowerSupplyById(id).then((response) => {
                this.CurrentPowerSupply = response.data;
            } ).catch( (e) => {console.log(e)} )
        },
        retrieveMousebyId(id){
            EasyPCService.getMouseById(id).then((response) => {
                this.CurrentMouse = response.data;
            } ).catch( (e) => {console.log(e)} )
        },
        retrieveKeyboardbyId(id){
            EasyPCService.getKeyboardById(id).then((response) => {
                this.CurrentKeyboard = response.data;
            } ).catch( (e) => {console.log(e)} )
        },
        retrieveMonitorbyId(id){
            EasyPCService.getMonitorById(id).then((response) => {
                this.CurrentMonitor = response.data;
            } ).catch( (e) => {console.log(e)} )
        },
    },
    mounted() {
        this.retrieveBuildFromDB();
        this.retrieveCPUbyId(this.CurrentBuild.cpu)
        this.retrieveGPUbyId(this.CurrentBuild.GPU)
        this.retrieveMotherBoardbyId(this.CurrentBuild.motherboard)
        this.retrieveRAMbyId(this.CurrentBuild.ram)
        this.retrieveCoolingbyId(this.CurrentBuild.cooling)
        this.retrieveSSDbyId(this.CurrentBuild.ssd)
        this.retrieveHDDbyId(this.CurrentBuild.hdd)
        this.retrievePowerSupplybyId(this.CurrentBuild.powerSupply)
        this.retrieveMousebyId(this.CurrentBuild.mouse)
        this.retrieveKeyboardbyId(this.CurrentBuild.keyboard)
        this.retrieveMonitorbyId(this.CurrentBuild.monitor)
    }
}
</script>



<style>

</style>