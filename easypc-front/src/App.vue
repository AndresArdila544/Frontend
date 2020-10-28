  <template>
  <div >
    
    <v-app id="app" fluid>
      
      
      <v-main>
        <v-container fluid>
          <router-view />
        </v-container>
      </v-main>
    </v-app>
  </div>
</template>


<script>


export default {
  name: "App",

  components: {
    
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
  background-color: #ff9941;
  display: block;
  height: 100%;
}
</style>