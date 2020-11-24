<template>
  <div>
    <InterListItem
      v-bind:tipo="components[count]"
      v-bind:count="count"
      v-if="renderComponent"
    />
    <div class="row">
      <div class="col col-sm-12 col-md-4 col-12 boton-pop">
        <vs-button @click="decrementCounter" v-if="count > 0" block>
          <h2>Volver</h2>
        </vs-button>
      </div>
      <div class="col col-sm-12 col-md-4 col-12 boton-pop">
        <vs-button
          @click="incrementCounter"
          v-if="skipable.includes(count)"
          block
        >
          <h2>Saltar</h2>
        </vs-button>
      </div>
      <div class="col col-sm-12 col-md-4 col-12 boton-pop">
        <vs-button @click="selectPart" v-if="count != 11" block>
          <h2>Siguiente</h2>
        </vs-button>
      </div>

      <div class="col col-sm-12 col-md-4 col-12 boton-pop">
        <vs-button @click="sendBuild" v-if="count == 11" block>
          <h2>Terminar</h2>
        </vs-button>
      </div>
    </div>
  </div>
</template>

<script>
import InterListItem from "./InterListItem";
import EasyPCService from "../../services/EasyPCService";

export default {
  name: "InterComp",
  components: {
    InterListItem,
  },
  data() {
    return {
      id: 1,
      tipo: String,
      price: "",
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
      skipable: [5, 6, 8, 9, 10],
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
    };
  },
  methods: {
    incrementCounter() {
      if (this.count < 11) {
        this.count += 1;
      }
      this.forceRender();
    },
    decrementCounter() {
      if (this.count < 11) {
        this.count -= 1;
      }
      this.forceRender();
    },
    forceRender() {
      this.renderComponent = false;
      this.$nextTick(() => {
        this.renderComponent = true;
      });
    },
    selectPart() {
      if (this.$store.getters["getInterSelection"][this.count] != -1) {
        this.incrementCounter();
      }
    },
    sendBuild() {
      this.build.idCPU = this.$store.getters["getInterSelection"][0];
      this.build.idMotherboard = this.$store.getters["getInterSelection"][1];
      this.build.idRAM = this.$store.getters["getInterSelection"][2];
      this.build.idGPU = this.$store.getters["getInterSelection"][3];
      this.build.idCooling = this.$store.getters["getInterSelection"][4];

      if (this.$store.getters["getInterSelection"][5] == -1) {
        this.build.idSSD = null;
      } else {
        this.build.idSSD = this.$store.getters["getInterSelection"][5];
      }

      if (this.$store.getters["getInterSelection"][6] == -1) {
        this.build.idHDD = null;
      } else {
        this.build.idHDD = this.$store.getters["getInterSelection"][6];
      }

      this.build.idPowerSupply = this.$store.getters["getInterSelection"][7];

      if (this.$store.getters["getInterSelection"][8] == -1) {
        this.build.idMouse = null;
      } else {
        this.build.idMouse = this.$store.getters["getInterSelection"][8];
      }

      if (this.$store.getters["getInterSelection"][9] == -1) {
        this.build.idKeyboard = null;
      } else {
        this.build.idKeyboard = this.$store.getters["getInterSelection"][9];
      }

      if (this.$store.getters["getInterSelection"][10] == -1) {
        this.build.idMonitor = null;
      } else {
        this.build.idMonitor = this.$store.getters["getInterSelection"][10];
      }

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
    this.selectPart();
    this.$store.commit("defaultInterSelection");
    this.count = 0;
  },
};
</script>

<style scoped lang="scss">
.boton-pop {
  text-align: center;
  font-size: calc(1.2rem + 1.2vw);
  font-family: "Poppins", sans-serif;
}
</style>