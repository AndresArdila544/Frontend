<template>
  <div class="">
    <p id="pregunta" class="pt-3 d-flex justify-content-start">¿Qué videojuegos quieres correr?</p>
    <div class="d-flex flex-column bd-highlight justify-content-start" >
      <div id="radio">
         <vs-checkbox   indeterminate val="1" class="" v-model="options">Minecraft</vs-checkbox>
      </div>
      <vs-checkbox id="radio"  indeterminate val="2" class="" v-model="options">League of legends</vs-checkbox>
      <vs-checkbox id="radio"  indeterminate val="3" class="" v-model="options">Fornite</vs-checkbox>
      <vs-checkbox id="radio"  indeterminate val="4" class="" v-model="options">Call of duty</vs-checkbox>
    <p> {{setAnswer()}}</p>
    </div>
  </div>
</template>

<script>



export default {
  data: () => ({
    options: [],
    max: 0
  }),
  methods:{
    getMaxVal(){
      var temp = "0";
      for(var i=0; i<this.options.length;i++){
        if(this.options[i]>temp){
          temp=this.options[i];          
        }
      } 
      return temp     
    },
    setAnswer(){
      this.$store.commit("setA1",this.getMaxVal())
    }
  }



};
</script>

<style  scoped>
#pregunta {
  font-size: 4vw;
}
#opcion {
  font-size: 3vw;
}
#radio {
  font-size: 2.7vw
}
.vs-checkbox {
  font-size: 2.7vw
}
</style>