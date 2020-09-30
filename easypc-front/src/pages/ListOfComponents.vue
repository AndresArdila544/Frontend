<template>
  <div>
      <li v-for="(pokemon,name) in components" :key="name">
          {{pokemon.name}}
      </li>
  </div>
</template>

<script>

const apiURL = "https://pokeapi.co/api/v2/pokemon/40"

export default {
    name:"ListOfComponents",
    components:{},
    data(){
        return{
            components: []
        }
    },
    created() {
        fetch(apiURL)
            .then(response => {
                    return response.json()
                }
            ).then(components =>{
                this.components = components
            })
    }
}
</script>

<style>

</style>