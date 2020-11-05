<template>
  <div class="container">
    <div class="row-12">
      <div id="home" class="py-5 col-12 align-self-center container-fluid">
        <Logo />
        <div class="p-1">
          <vs-button
            
            color="rgb(59,22,100)"
            floating
            circle
            block
            animation-type="rotate"
            to="QuizB"
            class="boton-home"
          > 
            <p>
              Comenzar!
            </p>
            <template #animate>
              
                <div class="container-fluid">
                  <img alt="limon" class="img-fluid" src="../assets/limon.png" /> 
          
                </div>
                  
                
              
            </template>
          </vs-button>
        </div>
      </div>
    </div>
    
  </div>
</template>

<script>
import Logo from "../components/Logo.vue";

export default {
  name: "Home",
  components: {
    Logo,
    
  },
  methods: {},
};
</script>

<style scoped  >


.boton-home {
  text-align: center;
  font-size: calc(2rem + 3.2vw);
  font-family: 'Poppins', sans-serif;
  color:#e0ece4;
  
}
</style>