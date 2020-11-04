<template>
  <div>
    <InterListItem
      v-bind:tipo="components[count]"
      v-bind:count ="count"
      v-if="renderComponent"
    />
    <vs-button
      id="button"
      class="d-flex"
      @click="selectPart"
      v-if="count!=11"
      >Siguiente</vs-button
    >
    <vs-button
      id="button"
      class="d-flex"
      @click="incrementCounter"
      v-if="skipable.includes(count)"
      >Saltar</vs-button
    >
    <vs-button
      id="button"
      class="d-flex"
      @click="decrementCounter"
      v-if="count>0"
      >Volver</vs-button
    >
    <vs-button
      id="button"
      class="d-flex"
      v-if="count==11"
      to="/Summary"
      >Terminar</vs-button
    >
  </div>
</template>

<script>
import InterListItem from "./InterListItem";
export default {
  name: "InterComp",
  components: {
    InterListItem,
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
      count: 0,
      components: [
        "cpus",
        "motherboards",
        "rams",
        "gpus",
        "coolings",
        "ssds",
        "hdds",
        "power-supplies",
        "mice",
        "keyboards",
        "monitors",
        "cases",
      ],
      skipable:[5,6,8,9,10],
      renderComponent: true,
      defaultPart: -1,
    };
  },
  methods: {
    incrementCounter() {
      if (this.count < 11) {
        this.count += 1;
      }
      this.forceRender();
    },
    decrementCounter() {
      if (this.count < 11) {
        this.count -= 1;
      }
      this.forceRender();
    },
    forceRender() {
      this.renderComponent = false;
      this.$nextTick(() => {
        this.renderComponent = true;
      });
    },
    selectPart(){        
        if(this.$store.getters["getInterSelection"][this.count] != -1){
           this.incrementCounter()
        } 
    }
  },
  beforeMount(){
      this.selectPart();
  }
};
</script>

<style>
</style>