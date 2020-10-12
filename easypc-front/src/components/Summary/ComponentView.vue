<template>
  <div class="p-4 container-fluid">
    <vs-row vs-type="flex" class="col-container">
      <vs-col class="col" w="4">
        <div class="container-fluid">
          <h3 class="titulo">{{tipo}}</h3>
          <div class="py-3">
            <img class="image" :src="linkPicture" alt />
          </div>
          <p class="modelo">{{modelo}}</p>
        </div>
      </vs-col>
      <vs-col class="col" direction="column" w="4">
        <vs-col w="12">
          <div class="d-flex justify-content-left">
            <a
              class="texto"
              :href="linkSL"
              >Link SpeedLogic</a
            >
          </div>
        </vs-col>
        <vs-col w="12">
          <div class="py-4 d-flex justify-content-left">
            <a
              class="texto"
              :href="linkTauret"
              >Link Tauret Computadores</a
            >
          </div>
        </vs-col>
        <vs-col w="12">
          <div class="d-flex justify-content-left">
            <a
              class="texto"
              :href="linkCyP"
              >Link Clones y Perifericos</a
            >
          </div>
        </vs-col>
      </vs-col>
      <vs-col class="col" direction="column" w="4">
        <vs-col align="flex-end" w="12">
          <div class="d-flex justify-content-left">
            <div class="texto">{{precioSL}}</div>
          </div>
        </vs-col>
        <vs-col w="12">
          <div class="py-4 d-flex justify-content-left">
            <div class="texto">{{precioTauret}}</div>
          </div>
        </vs-col>
        <vs-col w="12">
          <div class="d-flex justify-content-left">
            <div class="texto">{{precioCyP}}</div>
          </div>
        </vs-col>
      </vs-col>
    </vs-row>
  </div>
</template>

<script>
export default {
  name: "ComponentView",
  components: {},
  props: {
    modelo: String,
    tipo: String,
    linkSL: String,
    linkTauret: String,
    linkCyP: String,
    linkBenchmark: String,
    linkPicture: String,
    precioSL: Number,
    precioTauret: Number,
    precioCyP: Number,
    ComputerComponent: null
  },
};
</script>

<style scoped>
.texto {
  font-size: 2vw;
  text-align: left;
}
.titulo {
  font-size: 2.5vw;
}
.modelo {
  font-size: 2vw;
}

a:hover {
  text-decoration: none;
  color: none;
}

.col-container {
  width: 100%;
  display: flex; /* Set full-width to expand the whole page */
}

.col {
  flex: 1;
}
.image {
  max-width: 100%;
  width: 400px;
}
</style>