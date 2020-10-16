<template>
  <div>
    {{ retrieveBuild(id) }}
    <p>{{ build.cpu.model }}</p>
    <ShowImage v-bind:imgURL="build.cpu.linkPicture"> </ShowImage>
    <p>Benchmark: <ShowLink v-bind:URL="build.cpu.linkBenchmark"> </ShowLink></p>
    <p>SpeedLogic: <ShowLink v-bind:URL="build.cpu.linkSL"> </ShowLink></p>
    <p>Precio:{{build.cpu.priceSL}} </p>
    <p>Tauret: <ShowLink v-bind:URL="build.cpu.linkTauret"> </ShowLink></p>
    <p>Precio:{{build.cpu.priceTauret}} </p>
    <p>CyP: <ShowLink v-bind:URL="build.cpu.linkCyP"> </ShowLink></p>
    <p>Precio:{{build.cpu.priceCyP}} </p>
  </div>
</template>

<script>
import EasyPCService from "../../services/EasyPCService";
import ShowImage from "../ShowImage.vue";
import ShowLink from "../ShowTheLink.vue";

export default {
  name: "ShowCPU",
  components: {
    ShowImage,
    ShowLink,
  },
  data() {
    return {
      build: {},
      id: 1,
    };
  },
  methods: {
    /* eslint-disable no-console */
    retrieveBuild(id) {
      EasyPCService.getBuildById(id)
        .then((response) => {
          this.build = response.data; // JSON are parsed automatically.
          console.log(response.data);
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
};
</script>

<style>
</style>