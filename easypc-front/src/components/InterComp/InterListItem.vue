<template>
  <div>
    <div>
      <InterTitle v-bind:count="count" />
      <div class="row align-items-center">
        <div class="col col-md-4 col-12">
          <InterDescription v-bind:count="count" />
        </div>

        <div class="col col-md-4 col-12">
          <v-select
            :items="parte_models"
            dense
            solo
            hide-details
            menu-props="auto"
            single-line
            v-model="defaultPart"
            @change="setImage()"
          ></v-select>
        </div>
        <div class="col col-md-4 col-12 container-fluid">
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
import InterTitle from "./InterTitle";

export default {
  name: "InterListItem",
  components: {
    ShowImage,
    InterDescription,
    InterTitle,
  },
  data: () => ({
    partes: [],
    partesId: [],
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
          for (var i = 0; i < this.partes.length; i++) {
            this.parte_models.push(this.partes[i].model);
            this.parte_pics.push(this.partes[i].linkPicture);
            this.partesId.push(this.partes[i][Object.keys(this.partes[i])[0]]);
          }
        })
        .catch((e) => {
          console.log(e);
        });
    },

    setImage() {
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
      var a = [this.count, this.partesId[this.pic_idx]];
      this.$store.commit("setInterSelection", a);
    },

    getCompatibleMB() {
      var idCPU = this.$store.getters["getInterSelection"][0];
      EasyPCService.getCompatibleMBs(idCPU)
      .then((response) => {
          this.partes = response.data;
          for (var i = 0; i < this.partes.length; i++) {
            this.parte_models.push(this.partes[i].model);
            this.parte_pics.push(this.partes[i].linkPicture);
            this.partesId.push(this.partes[i][Object.keys(this.partes[i])[0]]);
          }
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
  mounted() {
    if (this.tipo == "motherboards") {
      this.getCompatibleMB();
    } else {
      this.retrieveParts();
    }
  },
  
};
</script>
