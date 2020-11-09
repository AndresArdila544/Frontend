<template >
  <div class="row">
    <div class="col col-sm-12 col-md-7 col-lg-6 col-12 offset-sm-0 offset-md-2 offset-lg-3">
      <v-slider
        class
        max="12805000"
        min="3298000"
        thumb-label="always"
        step="100000"
        v-model="budget"
        ticks
        color="#3b1664"
        tick-size="1"
        @change="setBudget()"
        :thumb-size="30"
      >
        <template v-slot:thumb-label="{ value }">
            {{ satisfactionEmojis[Math.min(Math.floor(value / 1280500), 9)] }}
          </template>
      </v-slider>
    </div>
    <div class="col col-sm-5 col-md-3 col-lg-1 col-12">
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