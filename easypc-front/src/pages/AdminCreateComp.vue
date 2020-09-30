
<template>
    <div class="center">
      <h1>Crear un Componente</h1>
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

<div class="px-5 py-5">
<vs-input
        v-if= "value"
        warn
        class="py-4 "
        type="text"
        v-model="Modelo"
        label="Modelo"
      />
<vs-input
        v-if= "value==1 || value==2 || value==3 || value==4 || value==5 || value==8 || value==9"
        class="py-4 "
        warn
        type="number"
        v-model="Poder"
        label="Poder"
      />
<vs-input
        v-if= "value==1"
        warn
        class="py-4"
        type="number"
        v-model="Nucleos"
        label="Nucleos"
      />
<vs-input

        v-if= "value==1 || value==3 || velocidad==8 || value==9"
        class="py-4"
        warn
        type="number"
        v-model="Velocidad"
        label="Velocidad"
      />

<vs-input
        v-if= "value==2"
        class="py-4"
        warn
        type="text"
        v-model="Marca"
        label="Marca"
      />
<vs-input
        v-if= "value==3 || value==4 || value==8 || value==9"
        class="py-4"
        warn
        type="number"
        v-model="Memoria"
        label="Memoria"
      />

<vs-input
        v-if= "value==7"
        class="py-4"
        warn
        type="number"
        v-model="MaxPower"
        label="Max Power"
      />

<vs-input
        v-if= "value"
        class="py-4"
        warn
        type="number"
        v-model="PrecioSL"
        label="Precio SL"
      />
<vs-input
        v-if= "value"
        class="py-4"
        warn
        type="number"
        v-model="PrecioTauret"
        label="Precio Tauret"
      />

<vs-input
        v-if= "value"
        class="py-4"
        warn
        type="text"
        v-model="linkSL"
        label="link SL"
      />
<vs-input
        v-if= "value"
        class="py-4"
        warn
        type="text"
        v-model="linkTauret"
        label="link Tauret"
      />

<vs-input
        v-if= "value"
        class="py-4"
        warn
        type="text"
        v-model="linkCyP"
        label="link CyP"
      />

<vs-input
        v-if= "value"
        class="py-4"
        warn
        type="text"
        v-model="Benchmark"
        label="link Benchmark"
      />

<vs-input
        v-if= "value"
        class="py-4"
        warn
        type="text"
        v-model="linkFoto"
        label="Link Foto"
      />
      </div>


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

        