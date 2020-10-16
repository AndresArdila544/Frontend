<template>
  <div class="p-4 container-fluid">
    <vs-row vs-type="flex" class="col-container">
      <vs-col class="col" w="4">
        <div class="container-fluid">
          <h3 class="titulo">{{tipo}}</h3>
          <div class="py-3">
            <img class="image" :src="Parte.linkPicture" alt />
          </div>
          <p class="modelo">{{Parte.model}}</p>
        </div>
      </vs-col>
      <vs-col class="col" direction="column" w="4">
        <vs-col w="12">
          <div class="d-flex justify-content-left" v-if="Parte.linkSL || Parte.priceSL">
            <a
              class="texto"
              :href="Parte.linkSL"
              v-if="Parte.linkSL"
              >Link SpeedLogic</a
            >
            <div class="texto" v-else>Tienda SpeedLogic</div>
          </div>
        </vs-col>
        <vs-col w="12">
          <div class="py-4 d-flex justify-content-left" v-if="Parte.linkTauret || Parte.priceTauret">
            <a
              class="texto"
              :href="Parte.linkTauret"
              v-if="Parte.linkTauret"
              >Link Tauret Computadores</a
            >
            <div class="texto" v-else>Tienda SpeedLogic</div>
          </div>
        </vs-col>
        <vs-col w="12">
          <div class="d-flex justify-content-left" v-if="Parte.linkCyP || Parte.priceCyP">
            <a
              class="texto"
              :href="Parte.linkCyP"
              v-if="Parte.linkCyP"
              >Link Clones y Perifericos</a
            >
            <div class="texto" v-else>Tienda SpeedLogic</div>
          </div>
        </vs-col>
      </vs-col>
      <vs-col class="col" direction="column" w="4">
        <vs-col align="flex-end" w="12">
          <div class="d-flex justify-content-left" v-if="Parte.linkSL || Parte.priceSL">
            <div class="texto" v-if="Parte.priceSL">${{Parte.priceSL}}</div>
            <div class="texto" v-else>No tiene precio actualmente</div>

          </div>
        </vs-col>
        <vs-col w="12">
          <div class="py-4 d-flex justify-content-left" v-if="Parte.linkTauret || Parte.priceTauret">
            <div class="texto" v-if="Parte.priceTauret">${{Parte.priceTauret}}</div>
            <div class="texto" v-else>No tiene precio actualmente</div>

          </div>
        </vs-col>
        <vs-col w="12">
          <div class="d-flex justify-content-left" v-if="Parte.linkCyP || Parte.priceCyP">
            <div class="texto" v-if="Parte.priceCyP" >${{Parte.priceCyP}}</div>
            <div class="texto" v-else>No tiene precio actualmente</div>
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
    tipo:String,
    Parte: {
      model: String,
      priceSL:Number,
      priceTauret:Number,
      priceCyP:Number,
      linkSL:String,
      linkTauret:String,
      linkCyP:String,
      linkPicture:String
    },
  },
  data() {
    return {
      
    }
  },
  mounted(){
    
  }
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