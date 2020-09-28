<template>
  <div id='home' class="py-5 container-fluid ">
      <Footer/>
      <ul class="circles">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
      <img alt="logo" class="img-fluid mx-auto" src="../assets/logo2.png"/>
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

export default {
    name: 'Home',
    components: {
      Footer,
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
 

.circles{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
}

.circles li{
    position: absolute;
    display: block;
    list-style: none;
    width: 20px;
    height: 20px;
    background: rgba(255, 255, 255, 0.2);
    animation: animate 25s linear infinite;
    bottom: -150px;
    
}

.circles li:nth-child(1){
    left: 25%;
    width: 80px;
    height: 80px;
    animation-delay: 0s;
}


.circles li:nth-child(2){
    left: 10%;
    width: 20px;
    height: 20px;
    animation-delay: 2s;
    animation-duration: 12s;
}

.circles li:nth-child(3){
    left: 70%;
    width: 20px;
    height: 20px;
    animation-delay: 4s;
}

.circles li:nth-child(4){
    left: 40%;
    width: 60px;
    height: 60px;
    animation-delay: 0s;
    animation-duration: 18s;
}

.circles li:nth-child(5){
    left: 65%;
    width: 20px;
    height: 20px;
    animation-delay: 0s;
}

.circles li:nth-child(6){
    left: 75%;
    width: 110px;
    height: 110px;
    animation-delay: 3s;
}

.circles li:nth-child(7){
    left: 35%;
    width: 150px;
    height: 150px;
    animation-delay: 7s;
}

.circles li:nth-child(8){
    left: 50%;
    width: 25px;
    height: 25px;
    animation-delay: 15s;
    animation-duration: 45s;
}

.circles li:nth-child(9){
    left: 20%;
    width: 15px;
    height: 15px;
    animation-delay: 2s;
    animation-duration: 35s;
}

.circles li:nth-child(10){
    left: 85%;
    width: 150px;
    height: 150px;
    animation-delay: 0s;
    animation-duration: 11s;
}



@keyframes animate {

    0%{
        transform: translateY(0) rotate(0deg);
        opacity: 1;
        border-radius: 0;
    }

    100%{
        transform: translateY(-1000px) rotate(720deg);
        opacity: 0;
        border-radius: 50%;
    }

}
 



</style>