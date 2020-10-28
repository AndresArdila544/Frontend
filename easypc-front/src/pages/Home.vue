<template>
<div>
 <div id='home' class="py-5 container-fluid ">
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
  <h1 class="display-1">Display 1</h1>
  <h1 >h1. Bootstrap heading</h1>
<h2>h2. Bootstrap heading</h2>
<h3>h3. Bootstrap heading</h3>
<h4>h4. Bootstrap heading</h4>
<h5>h5. Bootstrap heading</h5>
<h6>h6. Bootstrap heading</h6>
</div>
 
</template>

<script>


import Logo from '../components/Logo.vue'
export default {
    name: 'Home',
    components: {
      
      
      Logo,
    },
    methods: {
        
    }

}
</script>

<style >


  #boton{
    text-align: center;
    display: inline-block;
    font-size: 5vw;
    border: none;
  }
 

</style>