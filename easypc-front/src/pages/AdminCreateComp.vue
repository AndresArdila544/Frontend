<template>
  <div class="py-5 container-fluid ">
    <Footer/>
    <h1>Crear un Componente</h1>
    <p>Seleccione un tipo de componente</p>
    <Select @update-value="cambiarValor"/>
    <Form :part="value"/>
  </div>
</template>

<script>
import Select from "../components/AdminCreateComp/Select";
import Form from "../components/AdminCreateComp/Form";
import Footer from '../components/Footer.vue'

export default {
  name: "AdminCreateComp",
  components: {
    Footer,
    Select,
    Form,
  },
  data: () => ({
    value: "",
   
  }),
  methods: {
    cambiarValor(e) {
      this.value = e
    }
  }
};
</script>

<style>

</style>

        