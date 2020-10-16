<template>
  <div class="container">
    <!--dev -->
    {{ retrieveBuild(id) }}
    <!--dev -->

    <div class="container">
      <div class="row align-items-center">
        <div class="col">
          <ShowImage v-bind:imgURL="build.cpu.linkPicture"> </ShowImage>
        </div>
        <div class="col-8">
          <h4>
            {{ build.cpu.model }}: {{ build.cpu.speed }} GHz
            {{ build.cpu.cores }} Cores
          </h4>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="row">
        <div class="col">
          <div class="row">
            <div class="col">
              <ShowLink v-bind:URL="build.cpu.linkBenchmark" txt="Benchmark">
              </ShowLink>
            </div>
          </div>
        </div>
        <div class="col-8">
          <div class="row">
            <div class="col-sm">
              SpeedLogic:
              <ShowLink v-bind:URL="build.cpu.linkSL" :txt="build.cpu.priceSL">
              </ShowLink>
            </div>
            <div class="col-sm">
              Tauret:
              <ShowLink
                v-bind:URL="build.cpu.linkSL"
                :txt="build.cpu.priceTauret"
              >
              </ShowLink>
            </div>
            <div class="col-sm">
              CyP:
              <ShowLink v-bind:URL="build.cpu.linkSL" :txt="build.cpu.priceCyP">
              </ShowLink>
            </div>
          </div>
        </div>
      </div>
    </div>

    <p class="ex1"></p>
  </div>
</template>

<script>
import EasyPCService from "../../services/EasyPCService";
import ShowImage from "../ShowImage.vue";
import ShowLink from "../ShowLinkOverTxt.vue";

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
    retrieveBuild(id) {
      EasyPCService.getBuildById(id)
        .then((response) => {
          this.build = response.data;
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
p.ex1 {
  padding-bottom: 25px;
}

/* Dev 
body {
  padding-top: 2rem;
  padding-bottom: 2rem;
}
h3 {
  margin-top: 2rem;
}
.row {
  margin-bottom: 1rem;
}
.row .row {
  margin-top: 1rem;
  margin-bottom: 0;
}
[class*="col-"] {
  padding-top: 1rem;
  padding-bottom: 1rem;
  background-color: ;
  border: 1px solid black;
}
[class*="col"] {
  padding-top: 1rem;
  padding-bottom: 1rem;
  background-color: ;
  border: 1px solid black;
}
hr {
  margin-top: 2rem;
  margin-bottom: 2rem;
}
/* Dev */
</style>