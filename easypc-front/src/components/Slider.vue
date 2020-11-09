<template >
  <div class="row">
    <div class="col col-xs-12 col-sm-10 col-md-7 col-lg-6 col-12 offset-sm-4 offset-md-1 offset-lg-2">
      <v-slider
        class
        max="12805000"
        min="3298000"
        thumb-label="always"
        step="100000"
        v-model="budget"
        ticks
        tick-size="1"
        @change="setBudget()"
        :thumb-size="24"
      >
        <template v-slot:thumb-label="{ value }">
            {{ satisfactionEmojis[Math.min(Math.floor(value / 1280500), 9)] }}
          </template>
      </v-slider>
    </div>
    <div class="col col-sm-5 col-md-4 col-lg-4 col-12 d-flex justify-content-md-start ">
      <h3>
        ${{budget.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}} COP
      </h3>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      budget: "3298000",
      satisfactionEmojis: ['😭', '😢', '☹️', '🙁', '😐', '🙂', '😊', '😁', '😄', '😍'],
    };
  },
  methods: {
    setBudget() {
      this.$store.commit("setBudget", this.budget.toString());
    },
  },
  mounted() {
    this.setBudget();
  },
};
</script>