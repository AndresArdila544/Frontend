<template>
  <div class="container">
    <div class="row align-items-end">
      <div class="col col-lg-4  col-12 align-items-end">
        <div class="col col-12 pb-3">
          <h3>
            Eres nuevo en el mundo de los computadores, te haremos un formulario
            y te recomendaremos computadores armados por nosotros.
          </h3>
        </div>
        <div class="col col-12">
          <vs-button
            color="rgb(59,22,100)"
            circle
            block
            animation-type="rotate"
            to="QuizB"
            class="boton-level"
          >
            <h2>Principiante</h2>
          </vs-button>
        </div>
      </div>
      <div class="col col-lg-4 col-12 align-items-end">
        <div class="col col-12 pb-3">
          <h3>
            Tienes conocimientos básicos sobre computadores, te ayudaremos a
            construir un pc.
          </h3>
        </div>
        <div class="col col-12">
          <vs-button
            color="rgb(59,22,100)"
            size="large"
            circle
            block
            animation-type="rotate"
            to="InterSelection"
            class="boton-level"
          >
            <h2>Intermedio</h2>
          </vs-button>
        </div>
      </div>
      <div class="col col-lg-4 col-12  align-items-end">
        <div class="col col-12 pb-3">
          <h3>
            Eres un experto en el tema de computadores y no necesitas ninguna
            ayuda.
          </h3>
        </div>
        <div class="col col-12 ">
          <vs-button
            color="rgb(59,22,100)"
            circle
            block
            animation-type="rotate"
            to="Expert"
            class="boton-level"
          >
            <h2>Experto</h2>
          </vs-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LevelSelect",
  methods: {},
};
</script>

<style scoped  >
.boton-level {
  text-align: center;
  font-size: calc(0.5rem + 3.2vw);
  font-family: "Poppins", sans-serif;
  color: #e0ece4;
  margin-bottom: 50px;
}
</style>