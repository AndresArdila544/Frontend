<template>
  <div id='home' class="pt-4  container-fluid">
      <img alt="logo" class="img-fluid mx-auto" src="../assets/logo2.png"/>
      <p id = "parrafo" class="pt-4">
          EASY-PC
      </p>
      
        <vs-button 
        id = "boton"  
        color="rgb(59,22,100)"
        floating
        circle
        icon
        block
        xl
        animation-type="vertical"
        to="QuizBeg"
        @click="openLoading">
          Comenzar!
          <template #animate >
              <vs-row>
                <vs-col  vs-type="flex" vs-justify="center" vs-align="center" w="12">
                  <img alt="limon" class="img-fluid mx-auto" src="../assets/limon.png" width=10%/> Squezy 
              </vs-col>
              
               </vs-row>
              
          </template>
        </vs-button>
      
      
  </div>
</template>

<script>


export default {
    name: 'Home',
    components: {

    },
    methods: {
        openLoading() {
          const loading = this.$vs.loading()
          setTimeout(() => {
            loading.close()
          }, 2000)
        }
    }

}
</script>

<style>
  #home{
    font-size: 10px;
  }
  h1{
    animation-name: animacion;
    position: relative;
    animation-duration: 3s;  
    animation-delay: 0,7s;
    animation-fill-mode: backwards;
    font-size: 10vw;
  }
  @keyframes animacion {
      0% {right: -500px;}
      80% {right: 100px;}
      100% {right: 0px;}
  }
  #parrafo {
    font-size: 5vw;
  }

  #boton{
    text-align: center;
    display: inline-block;
    font-size: 5vw;
    border: none;
  }

</style>