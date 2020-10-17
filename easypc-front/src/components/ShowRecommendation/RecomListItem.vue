<template>
  <div class="container">
    <div class="container">
      
        <div class="row align-items-center">
        <div class="col">
          <ShowImage v-bind:imgURL="Parte.linkPicture"> </ShowImage>
        </div>
        <div class="col-8">
          <v-row align="center">
            <v-col cols="12">
              <RecomSelect v-bind:partesList="partes" :defaultPart="Parte.model" />
              
            </v-col>
          </v-row>
        </div>
      </div>
      <!--<RecomSelect v-bind:partesList="partes" :defaultPart="Parte.model" />-->
    </div>
  </div>
</template>




<script>
import ShowImage from "../ShowImage.vue";
import EasyPCService from "../../services/EasyPCService";
import RecomSelect from "./RecomSelect.vue";

export default {
  name: "RecomListItem",
  components: {
    ShowImage,
    RecomSelect,
  },
  data: () => ({
    partes: [],
    id: 2,
    flag:false,
    cpu:"",
    Selected:""
  }),
  props: {
    tipo: String,
    Parte: {
      model: String,
      priceSL: Number,
      priceTauret: Number,
      priceCyP: Number,
      linkPicture: String,
    },
  },
  methods: {
    buildArray() {
      if(this.flag==false){
        this.flag=true
        this.partes.push(this.Parte.model)
        //this.partes.push(this.cpu)
      }
    },

    retrieveCPU(id) {
      EasyPCService.getCPUById(id)
        .then((response) => {
          this.cpu=response.data;
          console.log(response.data);
        })
        .catch((e) => {
          console.log(e);
        });
    },
    


  },
  mounted() {
     //this.retrieveCPU(this.id) 

  },
  beforeUpdate(){
    this.buildArray()
  }
};
</script>

<style>
</style>