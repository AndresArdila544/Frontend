<template>
  <div class="">
    <vs-select placeholder="Elige un Componente" filter color="warn" v-model="value" @change="update_value(value)" class="opc" >
      <vs-option-group>
        <div slot="title">
            Componentes
        </div>
        <vs-option label="CPU" value="A">CPU</vs-option>
        <vs-option label="Tarjeta Madre" value="B">Tarjeta Madre</vs-option>
        <vs-option label="RAM" value="C">RAM</vs-option>
        <vs-option label="GPU" value="D">GPU</vs-option>
        <vs-option label="Cooling" value="E">Cooling</vs-option>
        <vs-option label="Case" value="F">Case</vs-option>
        <vs-option label="Power Supply" value="G">Power Supply</vs-option>
        <vs-option label="HDD" value="H">HDD</vs-option>
        <vs-option label="SSD" value="I">SSD</vs-option>
      </vs-option-group>
      <vs-option-group>
        <div slot="title">
            Perifericos
        </div>
        <vs-option label="Mouse" value="J">Mouse</vs-option>
        <vs-option label="Teclado" value="K">Teclado</vs-option>
        <vs-option label="Monitor" value="L" @>Monitor</vs-option>
      </vs-option-group>
      
      
    </vs-select>
  </div>
</template>

<script>
export default {
    name: "Select",
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