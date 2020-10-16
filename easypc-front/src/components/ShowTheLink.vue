<template>
  <div>
         <p><a :href="''+URL">Link</a></p>
  </div>
</template>

<script>
export default {
    name: "ShowLink",
    components: {
        
  },
   props: ['URL'],
    data: () => ({
    URL: ""
  }),
}
</script>

<style>

</style>