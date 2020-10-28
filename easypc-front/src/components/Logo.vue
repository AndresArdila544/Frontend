<template>
  <div id="logo">
      <img class="img-fluid mx-auto" src="../assets/logo2.png" />
      <p id = "parrafo" class="py-5">
          Easy-PC
      </p>
  </div>
</template>
<script>
export default {
    name: 'Logo',
    components:{

    },
}
</script>

<style scoped >
@import url(https://fonts.googleapis.com/css?family=Righteous);
    #logo{
      height: 100%;
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
</style>