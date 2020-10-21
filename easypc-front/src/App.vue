  <template>

  <div id="app" class="shadow p-4 container-fluid">
    <v-app><router-view/></v-app>
  </div>
</template>


<script>


export default {
  name: 'App',

  components: {

  },

  data: () => ({
    //
  }),
};
</script>

<style>
#app {
  font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #339EB7;
  background-color: #FF9941;
  display:block;
  
}
</style>