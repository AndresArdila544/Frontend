<template>
  <div>
 <!--     {{mapModels()}}
      {{this.partesModels == 0}}
    <div class="row align-items-center">
      <div class="col">
        <img v-bind:src="selected.linkPicture" height="70" />
        <p>{{ partesModels }}</p>
      </div>
      <div class="col-8">
        <v-row align="center">
          <v-col cols="12">-->
            <v-select
              :items="/*partesModels*/partesList"
              dense
              outlined
              hide-details
              menu-props="auto"
              single-line
              v-model="selected"
            ></v-select><!--
            <p>{{ this.partesModels == 0 }}</p>
          </v-col>
        </v-row>
      </div>
    </div>-->
  </div>
</template>

<script>
//import ShowImage from "../ShowImage.vue";

export default {
  name: "RecomSelect",
  components: {
    //ShowImage,
  },
  props: {
    partesList: Array,
    defaultPart: String,
  },
  data: () => ({
    selected: "",
    flag: false,
    partesModels: [],
    valueS: "",
    flag1: false,
  }),
  methods: {
    selectedValue() {
      if (this.flag == false) {
        this.flag = true;
        this.selected = this.defaultPart;
      }
    },
    /*findSelected(selected, partesList) {
      for (var i = 0; i < partesList.length; i++) {
        if (partesList[i].model == selected) {
          this.valueS = partesList[i].model;
        }
      }
    },
    mapModels() {
      this.$nextTick(() => {
        if (this.partesModels.length == 0) {
          for (var i = 0; i < this.partesList.length; i++) {
            this.partesModels.push(this.partesList[i].model);
          }
        }
      });
    },*/
  },
  mounted() {
    //this.findSelected(this.selected, this.partesList);
    //this.$nextTick(() => {
    //  this.mapModels();
    //});
  },
  beforeUpdate() {
    //this.mapModels();
    this.selectedValue();
    //this.findSelected(this.selected, this.partesList);
  },
};
</script>

<style>
</style>