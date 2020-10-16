<template>
  <div>
    <a :href="'' + URL">{{ txt }}</a>
  </div>
</template>

<script>
export default {
  name: "ShowLink",
  components: {},
  props: ["URL", "txt"],
  data: () => ({
    URL: "",
    txt: "",
  }),
};
</script>

<style>
</style>