<template>
  <div class="container">
    <div class="container">
      <div class="row align-items-center">
        <div class="col">
          <ShowImage v-bind:imgURL= "Parte.linkPicture" > </ShowImage>
          
        </div>
        <div class="col-8">
          <v-row align="center">
            <v-col cols="12">
              <!--<RecomSelect
                v-bind:partesList="partes"
                :defaultPart="Parte.model"
              />-->
              <v-select
              :items="parte_models"
              dense
              outlined
              hide-details
              menu-props="auto"
              single-line
              v-model="defaultPart"
              return-object
            ></v-select>
              
            </v-col>
          </v-row>
        </div>
      </div>
      <!--<RecomSelect v-bind:partesList="partes" :defaultPart="Parte.model" />-->
    </div>
   <!--<p>{{cpu_models}}</p>-->
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
    parte_pics: []
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

    selectedValue() {
      if (this.flag == false) {
        this.flag = true;
        this.selected = this.defaultPart;
      }
    },
  },
  mounted() {
    this.retrieveParts();
  },
  beforeUpdate() {
    this.buildArray();
  },
};
</script>

<style>
</style>