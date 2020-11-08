<template>
  <div class="container">
    <div class="container-fluid">
      <InterTitle v-bind:count="count"/>
      <div class="row align-items-center">
        <div class="col-md-4">
          <InterDescription v-bind:count="count"/>
        </div>
        
        <div class="col-md-4">
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
        </div>
        <div class="col-md-4">
            <ShowImage v-bind:imgURL="currentImageURL" v-if="renderComponent">
            </ShowImage>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ShowImage from "../ShowImage";
import EasyPCService from "../../services/EasyPCService";
import InterDescription from "./InterDescription";
import InterTitle from "./InterTitle"

export default {
  name: "InterListItem",
  components: {
    ShowImage,
    InterDescription,
    InterTitle
  },
  data: () => ({
    partes: [],
    parte_models: [],
    parte_pics: [],
    renderComponent: true,
    pic_idx: 0,
    currentImageURL: "",
    defaultPart: "",
  }),
  props: {
    tipo: String,
    count: Number,
  },
  methods: {
    retrieveParts() {
      EasyPCService.getAll(this.tipo)
        .then((response) => {
          this.partes = response.data;
          console.log(response.data);
          for (var i = 0; i < this.partes.length; i++) {
            this.parte_models.push(this.partes[i].model);
            this.parte_pics.push(this.partes[i].linkPicture);
          }
        })
        .catch((e) => {
          console.log(e);
        });
    },

    setImage: function () {
      this.pic_idx = this.parte_models.indexOf(this.defaultPart);
      this.currentImageURL = this.parte_pics[this.pic_idx];
      this.forceRerender();
      this.sendToStore();
    },

    forceRerender() {
      this.renderComponent = false;
      this.$nextTick(() => {
        this.renderComponent = true;
      });
    },

    sendToStore() {
      var a = [this.count, this.pic_idx];
      this.$store.commit("setInterSelection", a);
      console.log(this.$store.getters["getInterSelection"]);
    },
  },
  mounted() {
    this.retrieveParts();
  },
  beforeMount() {},
  beforeUpdate() {},
};
</script>

<style>
</style>