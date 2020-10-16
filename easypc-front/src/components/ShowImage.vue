<template>
  <div>
      <p><img v-bind:src=imgURL></p>
  </div>


</template>

<script>




export default {
    name: "ShowImage",
    components: {
        
  },
   props: ['imgURL'],
    data: () => ({
    imgURL: ""
  }),
}
</script>

<style>

</style>