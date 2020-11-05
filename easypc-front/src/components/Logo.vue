<template>
  <div class="logo container">
      <div class="row">
          <div class="col-12 col-lg-9">
            <img alt="limon" class="img-fluid col-12" src="../assets/logo2.png"/>
          </div>
          <div class="col-12 col-lg-3">
            <h1 class="titulo center">
                Easy-PC
            </h1> 
          </div>
      </div>
      
      
      
  </div>
</template>
<script>
export default {
    name: 'Logo',
    components:{

    },
}
</script>

<style scoped lang="scss">
@import url(https://fonts.googleapis.com/css?family=Righteous);
    .logo{
      height: 100%;
      animation: animacion_imagen;
  animation-duration: 2s;
    }
    @keyframes animacion {
        0% {right: -500px;}
        80% {right: 100px;}
        100% {right: 0px;}
    }
    .titulo {
        animation-name: animacion;
        position: relative;
        animation-duration: 3s;  
        animation-delay: 0,7s;
        font-size:calc(2rem + 5vw);
        animation-fill-mode: backwards;
        font-family: 'Righteous', serif;
        text-shadow: .03em .03em 0 #3C136C;
        color: #841436;
    }

@keyframes animacion_imagen {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}
</style>