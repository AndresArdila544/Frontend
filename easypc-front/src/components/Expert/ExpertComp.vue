<template>
  <div>
    <ExpertListItem
      v-bind:tipo="components[0]"
      v-bind:count="0"
      v-if="renderCPU"
      @changed="changedCPU()"
      class="mx-auto py-5"
    />
    <ExpertListItem
      v-bind:tipo="components[1]"
      v-bind:count="1"
      v-if="renderMB"
      class="mx-auto py-5"
    />
    <ExpertListItem
      v-bind:tipo="components[2]"
      v-bind:count="2"
      v-if="renderComponent"
      class="mx-auto py-5"
    />
    <ExpertListItem
      v-bind:tipo="components[3]"
      v-bind:count="3"
      v-if="renderComponent"
      class="mx-auto py-5"
    />
    <ExpertListItem
      v-bind:tipo="components[4]"
      v-bind:count="4"
      v-if="renderComponent"
      class="mx-auto py-5"
    />
    <div class="">
      <h5>Opcional</h5>
    </div>
    <ExpertListItem
      v-bind:tipo="components[5]"
      v-bind:count="5"
      v-if="renderComponent"
      class="mx-auto py-5"
    />
    <div class="">
      <h5>Opcional</h5>
    </div>
    <ExpertListItem
      v-bind:tipo="components[6]"
      v-bind:count="6"
      v-if="renderComponent"
      class="mx-auto py-5"
    />

    <ExpertListItem
      v-bind:tipo="components[7]"
      v-bind:count="7"
      v-if="renderComponent"
      class="mx-auto py-5"
    />
    <div class="">
      <h5>Opcional</h5>
    </div>
    <ExpertListItem
      v-bind:tipo="components[8]"
      v-bind:count="8"
      v-if="renderComponent"
      class="mx-auto py-5"
    />
    <div class="">
      <h5>Opcional</h5>
    </div>
    <ExpertListItem
      v-bind:tipo="components[9]"
      v-bind:count="9"
      v-if="renderComponent"
      class="mx-auto py-5"
    />
    <div class="">
      <h5>Opcional</h5>
    </div>
    <ExpertListItem
      v-bind:tipo="components[10]"
      v-bind:count="10"
      v-if="renderComponent"
      class="mx-auto py-5"
    />

    <ExpertListItem
      v-bind:tipo="components[11]"
      v-bind:count="11"
      v-if="renderComponent"
      class="mx-auto py-5"
    />

    <vs-button @click="sendBuild" block>
      <h2>Terminar</h2>
    </vs-button>
  </div>
</template>

<script>
import ExpertListItem from "./ExpertListItem";
import EasyPCService from "../../services/EasyPCService";

export default {
  name: "InterComp",
  components: {
    ExpertListItem,
  },
  data() {
    return {
      tipo: String,
      count: 0,
      components: [
        "cpus",
        "motherboards",
        "rams",
        "gpus",
        "coolings",
        "ssds",
        "hdds",
        "power-supplies",
        "mice",
        "keyboards",
        "monitors",
        "cases",
      ],
      renderComponent: true,
      build: {
        idCPU: "",
        idMotherboard: "",
        idRAM: "",
        idGPU: "",
        idCooling: "",
        idSSD: "",
        idHDD: "",
        idPowerSupply: "",
        idMouse: "",
        idKeyboard: "",
        idMonitor: "",
        idCase: "",
      },
      buildId: "",
      renderCPU: true,
      renderMB: true,
    };
  },
  methods: {
    forceRender() {
      this.renderComponent = false;
      this.$nextTick(() => {
        this.renderComponent = true;
      });
    },

    forceRenderMB() {
      this.renderMB = false;
      this.$nextTick(() => {
        this.renderMB = true;
      });
    },
    changedCPU() {
      this.forceRenderMB();
    },
    sendBuild() {
      this.build.idSSD = null;
      this.build.idHDD = null;
      this.build.idMouse = null;
      this.build.idKeyboard = null;
      this.build.idMonitor = null;

      if (this.$store.getters["getInterSelection"][5] != -1) {
        this.build.idSSD = this.$store.getters["getInterSelection"][5];
      }

      if (this.$store.getters["getInterSelection"][6] != -1) {
        this.build.idHDD = this.$store.getters["getInterSelection"][6];
      }

      if (this.$store.getters["getInterSelection"][8] != -1) {
        this.build.idMouse = this.$store.getters["getInterSelection"][8];
      }

      if (this.$store.getters["getInterSelection"][9] != -1) {
        this.build.idKeyboard = this.$store.getters["getInterSelection"][9];
      }

      if (this.$store.getters["getInterSelection"][10] != -1) {
        this.build.idMonitor = this.$store.getters["getInterSelection"][10];
      }

      this.build.idCPU = this.$store.getters["getInterSelection"][0];
      this.build.idMotherboard = this.$store.getters["getInterSelection"][1];
      this.build.idRAM = this.$store.getters["getInterSelection"][2];
      this.build.idGPU = this.$store.getters["getInterSelection"][3];
      this.build.idCooling = this.$store.getters["getInterSelection"][4];
      this.build.idPowerSupply = this.$store.getters["getInterSelection"][7];
      this.build.idCase = this.$store.getters["getInterSelection"][11];

      EasyPCService.createBuildID(this.build)
        .then((response) => {
          this.$store.commit("setInterIDBuild", response.data);
          this.$router.push("/Summary");
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
  beforeMount() {
    this.$store.commit("defaultInterSelection");
  },
};
</script>

<style scoped lang="scss">
.boton-pop {
  text-align: center;
  font-size: calc(1.2rem + 1.2vw);
  font-family: "Poppins", sans-serif;
}

h5 {
  text-align: left;
  font-family: "Poppins", sans-serif;
}
</style>