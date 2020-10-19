<template>
  <div>
 
            <v-select
              :items="partesList"
              dense
              outlined
              hide-details
              menu-props="auto"
              single-line
              v-model="selected"
              return-object
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
    },/*
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