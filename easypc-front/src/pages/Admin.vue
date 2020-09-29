<template>
<div>
  <div id="botones" class="p-5">
    <vs-row>
      <vs-col justify="center" vs-align="center" w="4">
        <div class="d-flex justify-content-center">
          <vs-button
            color="rgb(59,22,100)"
            size="small"
            to="AdminC"
            @click="openLoading"
          >Crear Componente</vs-button>
        </div>
      </vs-col>
      <vs-col vs-type="flex" vs-justify="center" vs-align="center" w="4">
        <div class="d-flex justify-content-center">
          <vs-button
            color="rgb(59,22,100)"
            size="small"
            to="AdminD"
            @click="openLoading"
          >Eliminar Componente</vs-button>
        </div>
      </vs-col>
      <vs-col vs-type="flex" vs-justify="center" vs-align="center" w="4">
        <div class="d-flex justify-content-center">
          <vs-button
            color="rgb(59,22,100)"
            size="small"
            to="ListOfComponents"
            @click="openLoading"
          >Ver Lista de Componentes</vs-button>
        </div>
      </vs-col>
    </vs-row>
  </div>
  <Footer/>
</div>
  
</template>

<script>
import Footer from '../components/Footer.vue'

export default {
  name: "Admin",
  components: {
    Footer,
  },
  methods: {
    openLoading() {
      const loading = this.$vs.loading();
      setTimeout(() => {
        loading.close();
      }, 2000);
    },
  },
};
</script>

<style>

</style>