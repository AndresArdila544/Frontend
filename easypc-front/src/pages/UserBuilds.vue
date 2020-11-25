<template>
  <div class="container h-100">
      <h1>Builds de {{this.$store.getters.getUser}}</h1>
      <div class="row">

      
        <BuildCard 
          class="BuildCard col-lg-4" 
          v-for="build in userBuilds" 
          :key="build.idBuild" 
          v-bind:buildId="build.idBuild"
          v-bind:buildCaseImage="build.caseObj.linkPicture"
          /></div>
          
      
  </div>
</template>

<script>
import BuildCard from "../components/UserBuilds/BuildCard";
import EasyPCService from "../services/EasyPCService";
export default {
  name:"MyBuilds",
  data(){
    return{
      userBuilds:[]
    }
  },
  components:{
    BuildCard
  },
  methods: {
    getUserBuilds(){
      EasyPCService.getBuildsByUser()
        .then((response) => {
          this.userBuilds = response.data;
        })
        .catch((e) => {
          console.log(e);
        });
    },
    
  },
  beforeMount(){
    this.getUserBuilds()
  }
}
</script>

<style scoped lang="scss">
.h-100{
  height: 100% !important;
}

.BuildCard {
  text-align: left;
}

</style>