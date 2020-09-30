
<template>
    <div class="center">
      <h1>Eliminar un Componente</h1>
      <p class="left">Seleccione un tipo de componente</p>
      <vs-select  placeholder="Select" color="warn" v-model="value">
        <vs-option label="CPU" value="1">
          CPU
        </vs-option>
        <vs-option label="TarjetaMadre" value="2">
          Tarjeta Madre
        </vs-option>
        <vs-option label="RAM" value="3">
          RAM
        </vs-option>
        <vs-option label="GPU" value="4">
          GPU
        </vs-option>
        <vs-option label="Cooling" value="5">
          Cooling
        </vs-option>
        <vs-option label="Case" value="6">
          Case
        </vs-option>
        <vs-option label="PowerSupply" value="7">
          Power Supply
        </vs-option>
        <vs-option label="HDD" value="8">
          HDD
        </vs-option>
        <vs-option label="SSD" value="9">
          SSD
        </vs-option>
        <vs-option label="Mouse" value="10">
          Mouse
        </vs-option>
        <vs-option label="Teclado" value="10">
          Teclado
        </vs-option>
        <vs-option label="Monitor" value="10">
          Monitor
        </vs-option>

      </vs-select>



    </div>
    

  
  </template>
<script>
    export default {
      data:() => ({
        value: '',
      })
    }
    
  </script>

  <style >

  
  </style>

        