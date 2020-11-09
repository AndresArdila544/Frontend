<template>
  <div class="container">
    <h1 class="col pregunta">¿Qué videojuegos te interesan?</h1>
    <div class="col col-12">
      <div class="col col-md-10 opciones">
        <v-checkbox value="1" v-model="options" color="indigo darken-3">
          <template v-slot:label>
          <h3>Minecraft</h3>
          </template>
        </v-checkbox>
      </div>
      <div class="col col-md-6 col-12 opciones">
        <v-checkbox value="2" v-model="options" color="indigo darken-3">
          <template v-slot:label>
          <h3>League of legends</h3>
          </template>
        </v-checkbox>
      </div>
      <div class="col col-md-6 col-12 opciones" >
        <v-checkbox value="3" v-model="options" color="indigo darken-3">
          <template v-slot:label>
          <h3>Fornite</h3>
          </template>
        </v-checkbox>
      </div>
      <div class="col opciones">
        <v-checkbox value="4" v-model="options" color="indigo darken-3">
          <template v-slot:label>
            <div class="">
              <h3>Call of duty</h3>
            </div>
          </template>
        </v-checkbox>
      </div>
      <p>{{setAnswer()}}</p>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    options: [],
    max: 0,
  }),
  methods: {
    getMaxVal() {
      var temp = "0";
      for (var i = 0; i < this.options.length; i++) {
        if (this.options[i] > temp) {
          temp = this.options[i];
        }
      }
      return temp;
    },
    setAnswer() {
      this.$store.commit("setA1", this.getMaxVal());
    },
  },
};
</script>

<style scoped>
</style>