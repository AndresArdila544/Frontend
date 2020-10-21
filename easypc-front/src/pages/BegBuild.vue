<template>
  <div class="py-5 container-fluid">
    <p id="tuPC" class="py-5">Este es tu PC</p>
    <v-select
      v-model="buildSelect"
      @change="setBuildId()"
      :items="options"
    ></v-select>
    <ShowBegBuild v-bind:id="id" v-if="renderComponent" />
  </div>
</template>

<script>
import ShowBegBuild from "../components/BegBuild/ShowBegBuild.vue";

export default {
  name: "BegBuild",
  components: {
    ShowBegBuild,
  },
  data() {
    return {
      buildSelect: "",
      selectedIdx: "",
      options: ["1", "2"],
      id: 1,
      renderComponent: true,
    };
  },
  props: {},
  methods: {
    setBuildId: function () {
      this.selectedIdx = this.options.indexOf(this.buildSelect);
      console.log(this.selectedIdx)
      this.id = this.selectedIdx + 1;
      this.forceRerender();
    },
    forceRerender() {
      this.renderComponent = false;
      console.log("ID: "+ this.id);
      this.$nextTick(() => {
        this.renderComponent = true;
      });
    },
  },
  mounted() {
  },
};
</script>

<style lang="scss">
#tuPC {
  font-size: 7vw;
  font-family: "Righteous", serif;
  text-shadow: 0.03em 0.03em 0 hsla(230, 40%, 50%, 1);
}
</style>