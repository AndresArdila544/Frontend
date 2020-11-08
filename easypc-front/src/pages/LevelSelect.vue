<template>
  <div class="container">
    <h3>Eres nuevo en el mundo de los computadores, te haremos un formulario y te recomendaremos computadores armados por nosotros.</h3>
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
    <h3>Tienes conocimientos básicos sobre computadores, te ayudaremos a construir un pc.</h3>
    <vs-button            
            color="rgb(59,22,100)"
            size = "large"
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
<h3>Eres un experto en el tema de computadores y no necesitas ninguna ayuda.</h3>
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