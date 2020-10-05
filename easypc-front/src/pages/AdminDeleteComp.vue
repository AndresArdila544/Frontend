
<template>
<div>
  <!--Pull request :D --> 
  <div class="pt-5 container-fluid ">
    <h1 id="titulo" >Eliminar un Componente</h1>
    <p id="subtitulo" class="left">Seleccione un tipo de componente:</p>
    <vs-select  id="select" placeholder="Select" color="warn" v-model="value">
      <vs-option label="CPU" value="A"><p id="select"> CPU </p> </vs-option>
      <vs-option label="TarjetaMadre" value="B"> <p id="select"> Tarjeta Madre </p> </vs-option>
      <vs-option label="RAM" value="C"><p id="select"> RAM </p> </vs-option>
      <vs-option label="GPU" value="D"><p id="select"> GPU </p> </vs-option>
      <vs-option label="Cooling" value="E"><p id="select"> Cooling </p> </vs-option>
      <vs-option label="Case" value="F"><p id="select"> Case </p> </vs-option>
      <vs-option label="PowerSupply" value="G"> <p id="select"> Power Supply </p> </vs-option>
      <vs-option label="HDD" value="H"> <p id="select"> HDD  </p> </vs-option>
      <vs-option label="SSD" value="I"><p id="select"> SSD  </p>  </vs-option>
      <vs-option label="Mouse" value="J"><p id="select"> Mouse  </p> </vs-option>
      <vs-option label="Teclado" value="K"><p id="select">Teclado  </p> </vs-option>
      <vs-option label="Monitor" value="L"><p id="select"> Monitor  </p> </vs-option>
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
    <Footer/>
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
import Footer from "../components/Footer"
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
    Footer,
  },
};
</script>

<style >
#titulo {
  font-size: 3vw;

}
#subtitulo{
  font-size: 1.5vw;
  text-align: left;

}
#select{
  font-size: 1.34vw;

}
</style>

        