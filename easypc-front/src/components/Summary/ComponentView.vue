<template>
  <div>
    <div class="card box block">
      <div class="card-header" id="headingOne">
        <div class="row">
          <div
            class="col-12 text-center"
            type="button"
            data-toggle="collapse"
            :data-target="'#' + tipo"
            aria-expanded="true"
            :aria-controls="tipo"
          >
            <h3 class="titulo">{{tipo}}</h3>
          </div>
        </div>
        <div class="collapse" :id="tipo" aria-labelledby="headingOne">
          <div class="card-body">
            <div class="row">
              <div class="col-12 text-center">
                <h2 class="modelo">{{Parte.model}}</h2>
              </div>
            </div>
            <div class="row mx-auto">
              <div class="col-sm-5 col-md-4 col-12">
                <img class="img-fluid" :src="Parte.linkPicture" alt="" />
              </div>
              <div class="col-sm-4 col-md-4 col-6">
                <div class="pb-3 col-12" v-if="Parte.linkSL || Parte.priceSL">
                  <div class="product__view--more">
                    <a
                      target="_blank"
                      class="texto"
                      :href="Parte.linkSL"
                      v-if="Parte.linkSL"
                    >Link SpeedLogic</a>
                    <div class="texto" v-else>Tienda SpeedLogic</div>
                    <div class="view__more--block" v-if="Parte.linkSL"></div>
                  </div>
                </div>
                <div class="pb-3 col-12" v-if="Parte.linkTauret || Parte.priceTauret">
                  <div class="product__view--more">
                    <a
                      target="_blank"
                      class="texto"
                      :href="Parte.linkTauret"
                      v-if="Parte.linkTauret"

                    >
                    <div >
                      Link Tauret
                    </div>
                    <div class="d-none d-sm-block">
                      Computadores
                    </div>
                     </a>
                    <div class="texto" v-else>Tienda Tauret Computadores</div>
                    <div class="view__more--block" v-if="Parte.linkTauret"></div>
                  </div>
                </div>
                <div class="pb-3 col-12" v-if="Parte.linkCyP || Parte.priceCyP">
                  <div class="product__view--more">
                    <a
                      target="_blank"
                      class="texto"
                      :href="Parte.linkCyP"
                      v-if="Parte.linkCyP"
                    >
                    <div>
                      Link Clones
                    </div>
                    <div class="d-none d-sm-block">
                       y Perifericos
                    </div>
                     </a>
                    <div class="texto" v-else>Tienda Clones y Perifericos</div>
                    <div class="view__more--block" v-if="Parte.linkCyP"></div>
                  </div>
                </div>
              </div>
              <div class="col col-sm-12 col-md-12">
                <div class="pb-3 col-12" v-if="Parte.linkSL || Parte.priceSL">
                  <div
                    class="texto"
                    v-if="Parte.priceSL"
                  >${{Parte.priceSL.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}} COP</div>
                  <div class="texto" v-else>No tiene precio actualmente</div>
                </div>
                <div
                  class="pb-3 col-12"
                  v-if="Parte.linkTauret || Parte.priceTauret"
                >
                  <div
                    class="texto"
                    v-if="Parte.priceTauret"
                  >${{Parte.priceTauret.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}} COP</div>
                  <div class="texto" v-else>No tiene precio actualmente</div>
                </div>
                <div class="pb-3 col-12" v-if="Parte.linkCyP || Parte.priceCyP">
                  <div
                    class="texto"
                    v-if="Parte.priceCyP"
                  >${{Parte.priceCyP.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}} COP</div>
                  <div class="texto" v-else>No tiene precio actualmente</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
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
  font-size: calc(1rem + 0.5vw);
  text-align: left;
  z-index: 2;
}

.titulo {
  text-align: center;
  font-size: calc(1.9rem + 1.8vw);
  font-family: "Poppins", sans-serif;
}
.modelo {
  text-align: center;
  font-size: calc(1.5rem + 0.5vw);
  font-family: "Poppins", sans-serif;
}

a:hover {
  text-decoration: none;
  color: inherit;
}
a {
  color: #ff9941;
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
}

.box {
  border-style: none none solid none;
  border-color: #3b1664;
  border-width: 10px;
  color: #ff9941;
  text-decoration-style: wavy;
  font-family: "Maven Pro", sans-serif;
  background-color: rgb(24, 23, 23);
}

.product__view--more {
  width: 100%;
  display: flex;
  align-items: center;
}
</style>