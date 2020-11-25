<template>
  <div class="container">
      <div class="row">
            <div class="col-12 col-md-12 col-lg-12">
              <h1>Bienvenido {{user}}</h1>
            </div>
          <div class="col-12 col-md-4">
                <vs-button
                    class="botones"
                    color="rgb(59,22,100)" 
                    block
                    to="ChangePassword" 
                    >
                    Cambiar Contraseña    
                </vs-button>
            </div>
            <div class="col-12 col-md-4">
                <vs-button
                    class="botones"
                    color="rgb(59,22,100)" 
                    block
                    to="MyBuilds" 
                    >
                    Ver mis Builds    
                </vs-button>
            </div>
            
            <div class="col-12 col-md-12" v-if="this.$store.getters.getRole =='admin'">
                <vs-button
                    class="botones"
                    color="rgb(59,22,100)" 
                    block
                    to="Admin" 
                    >
                    Opciones de Administrador    
                </vs-button>
            </div>
      </div>
  </div>
</template>

<script>
export default {
    name:"UserOptions",
    data() {
        return {
            user: this.$store.getters.getUser,
        };
    },
}
</script>

<style scoped lang="scss">
.botones {
  font-size: calc(1.2rem + 1.5vw);
  font-family: 'Poppins', sans-serif;
}
</style>