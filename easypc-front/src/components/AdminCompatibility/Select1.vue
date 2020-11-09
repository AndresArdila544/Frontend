<template>
  <div class="">
    <vs-select placeholder="Elige un Componente" filter color="warn" v-model="value" @change="update_value(value)" class="opc" >
      <vs-option-group>
        <div slot="title">
            Componentes
        </div>
        <vs-option label="CPU" value="cpus">CPU</vs-option>
        <vs-option label="Tarjeta Madre" value="motherboards">Tarjeta Madre</vs-option>
        
      </vs-option-group>
      
      
    </vs-select>
  </div>
</template>

<script>
export default {
    name: "Select1",
    components: {},
    props: {
      parte:String,
    },
    data: () => ({
      value:""
    }),
    methods: {
      update_value(parte) {
        parte = this.value
        this.$emit('update-value', parte)
      }
    },
}
</script>

<style scoped lang="scss">

</style>