<template>
    <div class="center con-checkbox">
      <vs-checkbox val="fnt" v-model="options">
        Fortnite
      </vs-checkbox>
      <vs-checkbox val="mcft" v-model="options">
        Minecraft
      </vs-checkbox>
      <vs-checkbox val="cod" v-model="options">
        Call of duty
      </vs-checkbox>
      <vs-checkbox val="lol" v-model="options">
        League of legends
      </vs-checkbox>

      <span class="data">
        {{ options }}
      </span>
    </div>
  </template>
  <script>
    export default {
      data:() => ({
        options: [
        ],
      }),
    }
  </script>