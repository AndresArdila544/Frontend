<template lang="html">
  <div class="container-fluid">
   <v-slider class="d-flex justify-content-start"
  max="12805000"
  min=3298000
  thumb-label="always"
  step=200000
  v-model=budget
  ticks="always"
  tick-size="1"
  @change="setBudget()"
  :thumb-size="24"
></v-slider>
  </div>
</template>

<script>
export default {
  data() {
    return {
      budget:"3298000"
      
    };
  },
  methods: {
    setBudget(){
      this.$store.commit('setBudget',this.budget.toString())
      
    }
  }
};
</script>