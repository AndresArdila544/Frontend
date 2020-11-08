<template>
  <div class="">
    <div class="">
      <div class="col titulo-crear">
        <h1>Crear un Componente</h1>
      </div>
    </div>
    <div class="">
      <div class="col subtitulo-crear">
        <h3>Seleccione un tipo de componente</h3>
      </div>
    </div>
    <div class="">
      <div class="col-12 d-flex justify-content-sm-start justify-content-md-center ">
        <Select @update-value="cambiarValor" class="align-self-center "/>
      </div>
    </div>
    <div class="">
      <div class="col-12">
        <Form :part="value"/> 
      </div>  
    </div>
  </div>
</template>

<script>
import Select from "../components/AdminCreateComp/Select";
import Form from "../components/AdminCreateComp/Form";


export default {
  name: "AdminCreateComp",
  components: {
    
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
.titulo-crear {
  font-size: calc(2rem + 3.2vw);
  font-family: 'Poppins', sans-serif;
}
.subtitulo-crear {
  font-size: calc(2rem + 3.2vw);
  font-family: 'Poppins', sans-serif;
}

</style>

        