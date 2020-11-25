<template>
  <div>
    <v-app id="app"> 
      <Navbar />
      <v-main>
          <router-view />
      </v-main>
    </v-app>
  </div>
</template>


<script>


import Navbar from "../src/components/Navbar"
export default {
  name: "App",
  components: {
    Navbar
  },
  data: () => ({
    //
  }),
};
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased !important;
  -moz-osx-font-smoothing: grayscale !important;
  text-align: center !important;
  background-color:#66bfbf !important;
  display: block !important;
  height: 100% !important;
}
</style>