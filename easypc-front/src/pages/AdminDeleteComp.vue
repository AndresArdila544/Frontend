
<template>
  <div class="center">
    <h1>Eliminar un Componente</h1>
    <p class="left">Seleccione un tipo de componente</p>
    <vs-select placeholder="Select" color="warn" v-model="value">
      <vs-option label="CPU" value="A"> CPU </vs-option>
      <vs-option label="TarjetaMadre" value="B"> Tarjeta Madre </vs-option>
      <vs-option label="RAM" value="C"> RAM </vs-option>
      <vs-option label="GPU" value="D"> GPU </vs-option>
      <vs-option label="Cooling" value="E"> Cooling </vs-option>
      <vs-option label="Case" value="F"> Case </vs-option>
      <vs-option label="PowerSupply" value="G"> Power Supply </vs-option>
      <vs-option label="HDD" value="H"> HDD </vs-option>
      <vs-option label="SSD" value="I"> SSD </vs-option>
      <vs-option label="Mouse" value="J"> Mouse </vs-option>
      <vs-option label="Teclado" value="K"> Teclado </vs-option>
      <vs-option label="Monitor" value="L"> Monitor </vs-option>
    </vs-select>

    <CPUlist v-if= "value == 'A'" />
    <MOTHERlist v-if= "value == 'B'" />
    <RAMlist v-if= "value == 'C'" />
    <GPUlist v-if= "value == 'D'" />
    <COOlist v-if= "value == 'E'" />
    <CASElist v-if= "value == 'F'" />
    <POWERlist v-if= "value == 'G'" />
    <HDDlist v-if= "value == 'H'" />
    <SSDlist v-if= "value == 'I'" />
    <MOUSElist v-if= "value == 'J'" />
    <KEYBlist v-if= "value == 'K'" />
    <MONlist v-if= "value == 'L'" />
  </div>
</template>


<script>
import CPUlist from "../components/ListComp/CPUlist";
import GPUlist from "../components/ListComp/GPUlist";
import RAMlist from "../components/ListComp/RAMlist";
import COOlist from "../components/ListComp/COOlist";
import CASElist from "../components/ListComp/CASElist";
import POWERlist from "../components/ListComp/POWERlist";
import HDDlist from "../components/ListComp/HDDlist";
import SSDlist from "../components/ListComp/SSDlist";
import MOUSElist from "../components/ListComp/MOUSElist";
import KEYBlist from "../components/ListComp/KEYBlist";
import MONlist from "../components/ListComp/MONlist";
import MOTHERlist from "../components/ListComp/MOTHERlist";

export default {
  data: () => ({
    value: "",
  }),
  components: {
    CPUlist,
    GPUlist,
    RAMlist,
    COOlist,
    CASElist,
    POWERlist,
    HDDlist,
    SSDlist,
    MOUSElist,
    KEYBlist,
    MONlist,
    MOTHERlist,
  },
};
</script>

  <style >
</style>

        