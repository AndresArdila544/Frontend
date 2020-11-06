<template>
  <div class="container">
  <vs-button            
            color="rgb(59,22,100)"
            floating
            circle
            block
            animation-type="rotate"
            to="QuizB"
            class="boton-level"
          > 
            <p>
              Principiante
            </p>
    </vs-button>
    <vs-button            
            color="rgb(59,22,100)"
            floating
            circle
            block
            animation-type="rotate"
            to="InterSelection"
            class="boton-level"
          > 
            <p>
              Intermedio
            </p>
    </vs-button>

    <vs-button            
            color="rgb(59,22,100)"
            floating
            circle
            block
            animation-type="rotate"
            to="QuizB"
            class="boton-level"
          > 
            <p>
              Experto
            </p>
    </vs-button>
  </div>  
</template>

<script>
export default {
    name: "LevelSelect",
    methods:{},
}
</script>

<style scoped  >
.boton-level {
  text-align: center;
  font-size: calc(0.5rem + 3.2vw);
  font-family: 'Poppins', sans-serif;
  color:#e0ece4;
  margin-bottom: 50px;
}
</style>