<template>
  <div class="p-4 container-fluid">
    <vs-row vs-type="flex" class="col-container">
      <vs-col class="col" w="4">
        <div class="container-fluid">
          <h3 class="titulo">CPU</h3>
          <div class="py-3">
            <img class="image" src="../../assets/logo2.png" alt />
          </div>
          <p class="modelo" >Ryzen 5900 Lemon version</p>
        </div>
      </vs-col>
      <vs-col class="col" direction="column" w="4">
        <vs-col w="12">
          <div class="d-flex justify-content-left">
            <a
              class="texto"
              href="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.muycomputer.com%2F2019%2F01%2F11%2Fsistema-de-refrigeracion-cpu%2F&psig=AOvVaw1tmKce4kTC5IaEcZnku1KM&ust=1602538229502000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCKjIvKG-rewCFQAAAAAdAAAAABAK"
            >Link SpeedLogic</a>
          </div>
        </vs-col>
        <vs-col w="12">
          <div class="py-4 d-flex justify-content-left">
            <a
              class="texto"
              href="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.muycomputer.com%2F2019%2F01%2F11%2Fsistema-de-refrigeracion-cpu%2F&psig=AOvVaw1tmKce4kTC5IaEcZnku1KM&ust=1602538229502000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCKjIvKG-rewCFQAAAAAdAAAAABAK"
            >Link Tauret Computadores</a>
          </div>
        </vs-col>
        <vs-col w="12">
          <div class="d-flex justify-content-left">
            <a
              class="texto"
              href="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.muycomputer.com%2F2019%2F01%2F11%2Fsistema-de-refrigeracion-cpu%2F&psig=AOvVaw1tmKce4kTC5IaEcZnku1KM&ust=1602538229502000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCKjIvKG-rewCFQAAAAAdAAAAABAK"
            >Link Clones y Perifericos</a>
          </div>
        </vs-col>
      </vs-col>
      <vs-col class="col" direction="column" w="4">
        <vs-col align="flex-end" w="12">
          <div class="d-flex justify-content-left">
            <div class="texto">Precio SpeedLogic</div>
          </div>
        </vs-col>
        <vs-col w="12">
          <div class=" py-4 d-flex justify-content-left">
            <div class="texto">Precio Tauret Computadores</div>
          </div>
        </vs-col>
        <vs-col w="12">
          <div class="d-flex justify-content-left">
            <div class="texto">Precio Clones y Perifericos</div>
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