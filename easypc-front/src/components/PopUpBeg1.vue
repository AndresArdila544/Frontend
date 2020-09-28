<template>
  <div class="center">
    <vs-button class="vbnext" border :active="active == 0" @click="active = !active">Siguiente</vs-button>
    <vs-dialog not-close v-model="active">
      <template>
         <p id="pregunta1" class="pt-1">¿Qué videojuegos quieres correr?</p>
      <pregunta11/>
      </template>
      <template>
         <p id="pregunta1" class="pt-1">¿Con qué propósito jugarás videojuegos?</p>
      <pregunta12/>
      </template>
      <template>
         <p id="pregunta1" class="pt-1">¿Cómo quieres que se vean los juegos?</p>
      <pregunta13/>
      </template>


      <template #footer>
        <div class="footer-dialog">
          <vs-button block> Aceptar </vs-button>

        </div>
      </template>
    </vs-dialog>
     <!--
    <vs-dialog not-close v-model="active">
      <template>
         <p id="pregunta1" class="pt-1">¿Qué programas quieres correr?</p>
      <pregunta21/>
      </template>
      <template>
         <p id="pregunta1" class="pt-1">¿Qué tanto almacenamiento necesitas??</p>
      <pregunta22/>
      </template>
      <template>
         <p id="pregunta1" class="pt-1">¿Con qué calidad realizas tu trabajo?</p>
      <pregunta23/>
      </template>


      <template #footer>
        <div class="footer-dialog">
          <vs-button block> Aceptar </vs-button>

        </div>
      </template>
    </vs-dialog>

    <vs-dialog not-close v-model="active">
      <template>
         <p id="pregunta1" class="pt-1">¿Qué programas necesitas correr?</p>
      <pregunta31/>
      </template>
      <template>
         <p id="pregunta1" class="pt-1">¿Sueles hacer muchas tareas a la vez?</p>
      <pregunta32/>
      </template>
      <template>
         <p id="pregunta1" class="pt-1">¿Qué tanto almacenamiento necesitas?</p>
      <pregunta33/>
      </template>


      <template #footer>
        <div class="footer-dialog">
          <vs-button block> Aceptar </vs-button>

        </div>
      </template>
    </vs-dialog>
    -->

  </div>
</template>
  <script>

import Pregunta11 from "./Pregunta1.1"
import Pregunta12 from "./Pregunta1.2"
import Pregunta13 from "./Pregunta1.3"

/*import Pregunta21 from "./Pregunta2.1"
import Pregunta22 from "./Pregunta2.2"
import Pregunta23 from "./Pregunta2.3"

import Pregunta31 from "./Pregunta3.1"
import Pregunta32 from "./Pregunta3.2"
import Pregunta33 from "./Pregunta3.3"
*/


export default {
  name: "QuizB",
  components: {
    Pregunta11,
    Pregunta12,
    Pregunta13,
    /*Pregunta21,
    Pregunta22,
    Pregunta23,
    Pregunta31,
    Pregunta32,
    Pregunta33*/
  },


  data: () => ({
    active: false,
  }),
};
</script>

 <style lang="stylus">
  getColor(vsColor, alpha = 1)
      unquote("rgba(var(--vs-"+vsColor+"), "+alpha+")")
  getVar(var)
      unquote("var(--vs-"+var+")")
  .not-margin
    margin 0px
    font-weight normal
    padding 10px
  .con-form
    width 100%
    .flex
      display flex
      align-items center
      justify-content space-between
      a
        font-size .8rem
        opacity .7
        &:hover
          opacity 1
    .vs-checkbox-label
      font-size .8rem
    .vs-input-content
      margin 10px 0px
      width calc(100%)
      .vs-input
        width 100%
  .footer-dialog
    display flex
    align-items center
    justify-content center
    flex-direction column
    width calc(100%)
    .new
      margin 0px
      margin-top 20px
      padding: 0px
      font-size .7rem
      a
        color getColor('primary') !important
        margin-left 6px
        &:hover
          text-decoration underline
    .vs-button
      margin 0px
  </style>