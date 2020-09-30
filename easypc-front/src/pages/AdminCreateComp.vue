
<template>
    <div class="center">
      <h1>Crear un Componente</h1>
      <p class="left">Seleccione un tipo de componente</p>
      <vs-select  placeholder="Select" color="warn" v-model="value">
        <vs-option label="CPU" value="A">
          CPU
        </vs-option>
        <vs-option label="TarjetaMadre" value="B">
          Tarjeta Madre
        </vs-option>
        <vs-option label="RAM" value="C">
          RAM
        </vs-option>
        <vs-option label="GPU" value="D">
          GPU
        </vs-option>
        <vs-option label="Cooling" value="E">
          Cooling
        </vs-option>
        <vs-option label="Case" value="F">
          Case
        </vs-option>
        <vs-option label="PowerSupply" value="G">
          Power Supply
        </vs-option>
        <vs-option label="HDD" value="H">
          HDD
        </vs-option>
        <vs-option label="SSD" value="I">
          SSD
        </vs-option>
        <vs-option label="Mouse" value="J">
          Mouse
        </vs-option>
        <vs-option label="Teclado" value="K">
          Teclado
        </vs-option>
        <vs-option label="Monitor" value="L">
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
        v-if= "value== 'A' || value== 'B' || value== 'C' || value== 'D' || value== 'E' || value== 'H' || value== 'I'"
        class="py-4 "
        warn
        type="number"
        v-model="Poder"
        label="Poder"
      />
<vs-input
        v-if= "value== 'A'"
        warn
        class="py-4"
        type="number"
        v-model="Nucleos"
        label="Nucleos"
      />
<vs-input

        v-if= "value== 'A' || value== 'C' || value== 'H' || value== 'I'"
        class="py-4"
        warn
        type="number"
        v-model="Velocidad"
        label="Velocidad"
      />

<vs-input
        v-if= "value== 'B'"
        class="py-4"
        warn
        type="text"
        v-model="Marca"
        label="Marca"
      />
<vs-input
        v-if= "value== 'C' || value== 'D' || value== 'H' || value== 'I'"
        class="py-4"
        warn
        type="number"
        v-model="Memoria"
        label="Memoria"
      />

<vs-input
        v-if= "value== 'G'"
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
        type="number"
        v-model="PrecioCyP"
        label="Precio CyP"
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
        Modelo: '',
        Poder: 0,
        Nucleos: 0,
        Velocidad: 0,
        Marca: '',
        Memoria: 0,
        MaxPower: 0,
        PrecioSL: 0,
        PrecioTauret: 0,
        PrecioCyP: 0,
        linkSL: '',
        linkTauret: '',
        linkCyP: '',
        Benchmark: '',
        linkFoto: ''

      })
    }
    
  </script>

  <style >

  
  </style>

        