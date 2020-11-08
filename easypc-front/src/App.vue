  <template>
  <div >
    
    <v-app id="app" fluid>
      
      <Navbar />
      <v-main>
        
        <v-container fluid>
          
          <router-view />
        </v-container>
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
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color:#66bfbf;
  display: block;
  height: 100%;
}
</style>