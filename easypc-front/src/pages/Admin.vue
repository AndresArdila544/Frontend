<template>
  <div class="container">
    <div class="row">
      <div class="col-12 col-sm-6 col-md-4">
        <vs-button
              class="botones-admin"
              color="rgb(59,22,100)" 
              block
              to="AdminC" 
              >
              Crear Componente     
        </vs-button>
      </div>
      <div class="col-12 col-sm-6 col-md-4">
        <vs-button
              class="botones-admin"
              color="rgb(59,22,100)"
              block
              to="AdminD"
              >
                Eliminar Componente
        </vs-button>
      </div>
      <div class="col-12 col-md-4">
        <vs-button
              class="botones-admin"
              color="rgb(59,22,100)"
              block
              to="ListOfComponents"
              >
                Ver Lista de Componentes
        </vs-button>
      </div>
      <div class="col-12 col-md-12">
        <vs-button
              class="botones-admin"
              color="rgb(59,22,100)"
              block
              to="AdminCp"
              >
                Editar compatibilidad entre componentes
        </vs-button>
      </div>
    </div>
  </div>
</template>

<script>


export default {
  name: "Admin",
  components: {
    
  },
  methods: {
    
  },
};
</script>

<style scoped lang="scss">
.botones-admin {
  font-size: calc(1.2rem + 1.5vw);
  font-family: 'Poppins', sans-serif;
}
</style>