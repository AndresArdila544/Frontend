<template>
  <div class="row">
    <div class="col-md-2 offset-lg-10 col-12">
      <vs-button id="button" class="" border block :active="active == 0" @click="active = !active" >Siguiente</vs-button>
    </div>
    <div v-if="valor=='1'" key="1">
        <vs-dialog blur not-close class="d-flex justify-content-start"  v-model="active">
            <PopUpOpc1/>
        </vs-dialog>
    </div>
    <div v-if="valor=='2'" key="2">
        <vs-dialog blur not-close class="d-flex justify-content-start"  v-model="active">
            <PopUpOpc2/>
        </vs-dialog>
    </div>
    <div v-if="valor=='3'" key="3">
      <vs-dialog blur not-close class="d-flex justify-content-start"  v-model="active">
          <PopUpOpc3/>
      </vs-dialog>
    </div>
  </div>
</template>


<script>
import PopUpOpc1 from "./PopUpOpc/1.vue"
import PopUpOpc2 from "./PopUpOpc/2.vue"
import PopUpOpc3 from "./PopUpOpc/3.vue"


export default {
  name: "PopUpBeg",
  components: {
    PopUpOpc1,
    PopUpOpc2,
    PopUpOpc3,
  },
  props: [],

  data: () => ({
    active: false,
  }),
  methods: {
  },
  computed: {
    valor() {
      return this.$store.getters["getCount"];
    },
  },
};
</script>

<style >

</style>

