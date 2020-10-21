<template>
  <div id='home' class="py-5 container-fluid ">
      <Footer/>
      <BackgroundAnimation/>
      <Logo/>
      <div class="p-1">
        <vs-button 
          id = "boton"  
          color="rgb(59,22,100)"
          floating
          circle
          block
          animation-type="vertical"
          to="QuizB"
          >
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
import Logo from '../components/Logo.vue'
export default {
    name: 'Home',
    components: {
      Footer,
      BackgroundAnimation,
      Logo,
    },
    methods: {
        
    }

}
</script>

<style lang="scss">


  #boton{
    text-align: center;
    display: inline-block;
    font-size: 5vw;
    border: none;
  }
 

</style>