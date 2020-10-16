<template>
  <div>
    {{ retrieveCPU(id) }}
    <p>{{ cpu.model }}</p>
    <ShowImage v-bind:imgURL="cpu.linkPicture"> </ShowImage>

    <p>Benchmark: <ShowLink v-bind:URL="cpu.linkBenchmark"> </ShowLink></p>
    <p>SpeedLogic: <ShowLink v-bind:URL="cpu.linkSL"> </ShowLink></p>
    <p>Tauret: <ShowLink v-bind:URL="cpu.linkTauret"> </ShowLink></p>
    <p>CyP: <ShowLink v-bind:URL="cpu.linkCyP"> </ShowLink></p>
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
      cpu: {},
      id: 1,
    };
  },
  methods: {
    /* eslint-disable no-console */
    retrieveCPU(id) {
      EasyPCService.getCPUById(id)
        .then((response) => {
          this.cpu = response.data; // JSON are parsed automatically.
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