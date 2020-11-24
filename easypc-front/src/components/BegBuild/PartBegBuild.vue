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
              <p id="parte" class="py-5">{{ Parte.model }}</p>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <p id="benchmark" class="py-5"><a class="py-3" :href="Parte.linkBenchmark" v-if="Parte.linkBenchmark">Benchmark</a></p>
            </v-col>
            <v-col>
              <p id="link" class="py-5"><a class="py-3" :href="Parte.linkSL" v-if="Parte.linkSL">SpeedLogic</a></p>
            </v-col>
            <v-col>
              <p id="link" class="py-5"><a class="py-3" :href="Parte.linkTauret" v-if="Parte.linkTauret">Tauret</a></p>
            </v-col>
            <v-col>
            </v-col>
          </v-row>
        </div>
      </div>
      
    </div>
    
  </div>
</template>

<script>
import ShowImage from "../ShowImage.vue";
export default {
  name: "PartBegBuild",
  components: {
    ShowImage,
  },
  props: {
    Parte: {
      model: String,
      linkSL: Number,
      linkTauret: Number,
      linkCyP: Number,
      linkPicture: String,
      linkBenchmark:String
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
    selectedValue() {
      if (this.flag == false) {
        this.flag = true;
        this.selected = this.defaultPart;
      }
    },
  },
  mounted() {
  },
};
</script>

<style >
  #parte {
        font-size: 3vw;
        font-family: 'Righteous', serif;
        text-shadow: .03em .03em 0 hsla(230,40%,50%,1);
  }
</style>