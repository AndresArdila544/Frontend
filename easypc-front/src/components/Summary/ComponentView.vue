<template>
  <div class="box p-2 container">
    <h3 class="titulo pt-2">{{tipo}}</h3>
    <p class="modelo">{{Parte.model}}</p>

    <vs-row vs-type="flex" class="col-container py-1">
      <vs-col class="col" w="4">
        <div class="container-fluid">
          
          <div class="py-1">
            <img class="image" :src="Parte.linkPicture" alt />
          </div>
          
        </div>
      </vs-col>
      <vs-col class="col" direction="column" w="4">
        <vs-col w="12">
          <div class="pb-3 d-flex justify-content-left" v-if="Parte.linkSL || Parte.priceSL">
            <div class="product__view--more">
              <a target="_blank" class="texto" :href="Parte.linkSL" v-if="Parte.linkSL">Link SpeedLogic</a>
              <div class="texto" v-else>Tienda SpeedLogic</div>
              <div class="view__more--block" v-if="Parte.linkSL"></div>
            </div>
          </div>
        </vs-col>
        <vs-col w="12">
          <div class="pb-3 d-flex justify-content-left" v-if="Parte.linkTauret || Parte.priceTauret">
            <div class="product__view--more">
              <a target="_blank" class="texto" :href="Parte.linkTauret" v-if="Parte.linkTauret">Link Tauret Computadores</a>
              <div class="texto" v-else>Tienda Tauret Computadores</div>
              <div class="view__more--block" v-if="Parte.linkTauret"></div>
            </div>
          </div>
        </vs-col>
        <vs-col w="12">
          <div class="pb-3 d-flex justify-content-left" v-if="Parte.linkCyP || Parte.priceCyP">
            
            <div class="product__view--more">
              <a target="_blank" class="texto" :href="Parte.linkCyP" v-if="Parte.linkCyP">Link Clones y Perifericos</a>
              <div class="texto" v-else>Tienda Clones y Perifericos</div>
              <div class="view__more--block" v-if="Parte.linkCyP"></div>
            </div>
          </div>
        </vs-col>
      </vs-col>
      <vs-col class="col" direction="column" w="4">
        <vs-col align="right" w="12">
          <div class="pb-3 d-flex flex-row-reverse" v-if="Parte.linkSL || Parte.priceSL">
            <div
              class="texto"
              v-if="Parte.priceSL"
            >${{Parte.priceSL.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}} COP</div>
            <div class="texto" v-else>No tiene precio actualmente</div>
          </div>
        </vs-col>
        <vs-col w="12">
          <div class="pb-3 d-flex flex-row-reverse" v-if="Parte.linkTauret || Parte.priceTauret">
            <div
              class="texto"
              v-if="Parte.priceTauret"
            >${{Parte.priceTauret.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}} COP</div>
            <div class="texto" v-else>No tiene precio actualmente</div>
          </div>
        </vs-col>
        <vs-col w="12">
          <div class="pb-3 d-flex flex-row-reverse" v-if="Parte.linkCyP || Parte.priceCyP">
            <div
              class="texto"
              v-if="Parte.priceCyP"
            >${{Parte.priceCyP.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}} COP</div>
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
    tipo: String,
    Parte: {
      model: String,
      priceSL: Number,
      priceTauret: Number,
      priceCyP: Number,
      linkSL: String,
      linkTauret: String,
      linkCyP: String,
      linkPicture: String,
    },
  },
  data() {
    return {};
  },
  mounted() {},
};
</script>

<style scoped lang="scss" >
@import url(https://fonts.googleapis.com/css2?family=Maven+Pro:wght@700&display=swap);

.texto {
  font-size: 2vw;
  text-align: left;
  z-index: 2;
}

.titulo {
  font-size: 2.7vw;
}
.modelo {
  font-size: 2vw;
}

a:hover {
  text-decoration: none;
  color:inherit;

}
a {
  color:#FF9941;
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

.box {
  border-style: none none solid none;
  border-color: #3b1664;
  color: #FF9941;
  text-decoration-style: wavy;
  font-family: "Maven Pro", sans-serif;
  background-color: rgb(24, 23, 23);
  
}

.product__view--more {
  width: 100%;
  display: flex;
  align-items: center;
  
  cursor: pointer;

  &:hover {
    .view__more--block {
      width: 26vw;
      height: 4.5vw;
    }
  }

  .view__more--block {
    width: 0;
    height: 0;
    position: absolute;
    background: #3b1664;
    z-index: 1;
    transition: cubic-bezier(0.68, -0.55, 0.27, 01.55) 520ms;
    border-radius: 0 30% 30% 0;
  }
  
}
</style>