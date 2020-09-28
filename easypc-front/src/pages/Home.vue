<template>
  <div id='home' class="py-5 container-fluid ">
      <Footer/>
      <BackgroundAnimation/>
      <img id="" alt="logo" class="img-fluid mx-auto" src="../assets/logo2.png"/>
      <p id = "parrafo" class="py-5">
          Easy-PC
      </p>
      <div class="p-1">
        <vs-button 
          id = "boton"  
          color="rgb(59,22,100)"
          floating
          circle
          xl
          block
          animation-type="vertical"
          to="QuizBeg"
          @click="openLoading">
          Comenzar!
          <template #animate >
              <vs-row>
                <vs-col  vs-type="flex" vs-justify="center" vs-align="center" w="12">
                  <img alt="limon" class="img-fluid mx-auto" src="../assets/limon.png" width=7%/> Squezy 
                </vs-col>
               </vs-row>
          </template>
        </vs-button>
      </div>
  </div>
</template>

<script>
import Footer from '../components/Footer.vue'
import BackgroundAnimation from '../components/BackgroundAnimation.vue'
export default {
    name: 'Home',
    components: {
      Footer,
      BackgroundAnimation,
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

<style scope lang="scss">
@import url(https://fonts.googleapis.com/css?family=Righteous);
  #home{
    font-size: 10px;
  }
  h1{
    font-size: 10vw;
  }
  @keyframes animacion {
      0% {right: -500px;}
      80% {right: 100px;}
      100% {right: 0px;}
  }
  #parrafo {
    animation-name: animacion;
    position: relative;
    animation-duration: 3s;  
    animation-delay: 0,7s;
    animation-fill-mode: backwards;
    font-size: 7vw;
    font-family: 'Righteous', serif;
    text-shadow: .03em .03em 0 hsla(230,40%,50%,1);
  }

  #boton{
    text-align: center;
    display: inline-block;
    font-size: 5vw;
    border: none;
  }
 
  #logo{
   
  }

 



</style>