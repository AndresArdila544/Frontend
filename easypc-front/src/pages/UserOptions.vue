<template>
  <div class="container">
      <div class="row">
          <h1>Bienvenido {{user}}</h1>
          <div class="col col-md-4">
                <vs-button
                    class="botones-admin"
                    color="rgb(59,22,100)" 
                    block
                    to="MyBuilds" 
                    >
                    Ver mis Builds    
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

<style>

</style>