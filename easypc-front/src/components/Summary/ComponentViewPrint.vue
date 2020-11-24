<template>
  <div>
    <div class="card-header" id="headingOne">
      <div class="row">
        <div
          class="col-12"
          type="button"
          :data-target="'#' + tipo"
          aria-expanded="true"
          :aria-controls="tipo"
        >
          <h3 class="titulo">{{ tipo }}</h3>
        </div>
      </div>
      <div :id="tipo" aria-labelledby="headingOne">
        <div class="card-body">
          <div class="row">
            <div>
              <h2 class="modelo">{{ Parte.model }}</h2>
            </div>
          </div>
          <div class="row">
            <div class="col">
              <img class="img-fluid" :src="Parte.linkPicture" alt="" />
            </div>
            <div>
              <div class="col" v-if="Parte.linkSL || Parte.priceSL">
                <div class="product__view--more">
                  <a
                    target="_blank"
                     
                    :href="Parte.linkSL"
                    v-if="Parte.linkSL"
                    >Link SpeedLogic</a
                  >
                  <div v-else>Tienda SpeedLogic</div>
                  <div class="view__more--block" v-if="Parte.linkSL"></div>
                </div>
              </div>
              <div
                class="col"
                v-if="Parte.linkTauret || Parte.priceTauret"
              >
                <div class="product__view--more">
                  <a
                    target="_blank"
                     
                    :href="Parte.linkTauret"
                    v-if="Parte.linkTauret"
                  >
                    <div>Link Tauret</div>
                    <div class="d-none">Computadores</div>
                  </a>
                  <div v-else>Tienda Tauret Computadores</div>
                  <div class="view__more--block" v-if="Parte.linkTauret"></div>
                </div>
              </div>
              <div class="col" v-if="Parte.linkCyP || Parte.priceCyP">
                <div class="product__view--more">
                  <a
                    target="_blank"
                     
                    :href="Parte.linkCyP"
                    v-if="Parte.linkCyP"
                  >
                    <div>Link Clones y Perifericos</div>
                  </a>
                  <div v-else>Tienda Clones y Perifericos</div>
                  <div class="view__more--block" v-if="Parte.linkCyP"></div>
                </div>
              </div>
            </div>
            <div class="col-7 ">
              <div class="col-12" v-if="Parte.linkSL || Parte.priceSL">
                <div v-if="Parte.priceSL">
                  ${{
                    Parte.priceSL
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                  }}
                  COP
                </div>
              </div>
              <div
                class="col-12"
                v-if="Parte.linkTauret || Parte.priceTauret"
              >
                <div   v-if="Parte.priceTauret">
                  ${{
                    Parte.priceTauret
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                  }}
                  COP
                </div>
              </div>
              <div class="col-12" v-if="Parte.linkCyP || Parte.priceCyP">
                <div v-if="Parte.priceCyP">
                  ${{
                    Parte.priceCyP
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                  }}
                  COP
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
  name: "ComponentViewPrint",
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

.titulo {
  text-align: left;
  font-size: calc(1.5rem + 1.8vw);
}
.modelo {
  text-align: right;
  font-size: calc(1rem + 0.5vw);
}

.col-container {
  width: 50%;
  display: flex; /* Set full-width to expand the whole page */
}

.col {
  flex: 1;
}

.product__view--more {
  width: 50%;
  display: flex;
  align-items: center;
}
</style>