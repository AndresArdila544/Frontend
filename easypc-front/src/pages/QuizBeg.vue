<template>
  <div>
    <div id="quizb" class="pt-4 container-fluid">
      <p id="parrafo" class="pt-3">Cuentanos tus necesidades!</p>

      <p id="Epregunta1" class="pt-1">¿Para qué quieres usar tu pc?</p>
      <p id="p1"><Pregunta1/></p>
      <p  ></p>
    </div>
    
   
  </div>
</template>

<script>


//import PopUpBeg1 from '../components/PopUpBeg1.vue'
import Pregunta1 from '../components/Pregunta1.vue'
var picked;

export default {
  name: "QuizBeg",
   
  components: {
    //PopUpBeg1,
    Pregunta1
  },
  methods: {
     option(e){
      picked= e,
      console.log(e)
    },
    option1(){
      picked= '0',
      console.log(picked)
    }

  },
  data: () => ({
    //isPicked: this.picked,
    active: false,
  }),
};
</script>

<style>



#parrafo {
  font-size: 3vh;
}

#pregunta1 {
  text-align: justify;
  display: float;
  border: none;
}
#p1{
  vertical-align: middle;
}
</style>