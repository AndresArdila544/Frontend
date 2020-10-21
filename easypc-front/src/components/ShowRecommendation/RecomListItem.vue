<template>
  <div class="container">
    <div class="container">
      <div class="row align-items-center">
        <div class="col">
          <ShowImage v-bind:imgURL= defaultImage v-if="renderComponent"> </ShowImage>
          
        </div>
        <div class="col-8">
          <v-row align="center">
            <v-col cols="12">
              <!--<RecomSelect
                v-bind:partesList="partes"
                :defaultPart="Parte.model"
                ->parte_pics[pic_idx]
              />-->
              <v-select
              :items="parte_models"
              dense
              outlined
              hide-details
              menu-props="auto"
              single-line
              v-model="defaultPart"
              @change="setImage()"
            ></v-select>
              
            </v-col>
          </v-row>
        </div>
      </div>
    </div>
  </div>
</template>




<script>
import ShowImage from "../ShowImage.vue";
import EasyPCService from "../../services/EasyPCService";

export default {
  name: "RecomListItem",
  components: {
    ShowImage,
  },
  data: () => ({
    partes: [],
    id: 2,
    flag: false,
    cpu: "",
    selected: "",
    cpus: [],
    parte_models: [],
    parte_pics: [],
    renderComponent: true,
    pic_idx: 0,
    currentImageURL: ""
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
    defaultPart: String,
    defaultImage: String
  },
  methods: {
    buildArray() {
      if (this.flag == false) {
        this.flag = true;
        this.partes.push(this.Parte.model);
        //this.partes.push(this.cpu)
      }
    },

    retrieveParts() {
      EasyPCService.getAll(this.tipo)
        .then((response) => {
          this.partes = response.data;
          console.log(response.data);
          for (var i=0;i<this.partes.length;i++) {
            this.parte_models.push(this.partes[i].model)
            this.parte_pics.push(this.partes[i].linkPicture)
          }
          // JSON are parsed automatically.
        })
        .catch((e) => {
          console.log(e);
        });
    },

    /*selectedValue() {
      if (this.flag == false) {
        this.flag = true;
        this.selected = this.defaultPart;
      }
    },*/
    setImage: function(){
      this.pic_idx=this.parte_models.indexOf(this.defaultPart)
      //console.log( this.pic_idx)
      this.defaultImage = this.parte_pics[this.pic_idx]
      this.forceRerender();
    },

    forceRerender() {
      this.renderComponent = false;
      //console.log("ID: "+ this.id);
      this.$nextTick(() => {
        this.renderComponent = true;
      });
    },
  },
  mounted() {
    this.retrieveParts();
    
  },
  beforeMount(){
    
  },
  beforeUpdate() {
    
    this.buildArray();
  },
};
</script>

<style>
</style>