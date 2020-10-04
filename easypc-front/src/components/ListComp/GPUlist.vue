<template>
  <div class="center">
    <vs-table v-model="selected">
      <template #thead>
        <vs-tr>
          <vs-th>
            <vs-checkbox
              :indeterminate="selected.length == gpus.length"
              v-model="allCheck"
              @change="selected = $vs.checkAll(selected, gpus)"
            />
          </vs-th>
          <vs-th> Id </vs-th>
          <vs-th> Modelo </vs-th>
        </vs-tr>
      </template>
      <template #tbody>
        <vs-tr
          :key="i"
          v-for="(gpu, i) in gpus"
          :data="gpu"
          :is-selected="!!selected.includes(gpu)"
        >
          <vs-td checkbox>
            <vs-checkbox :val="gpu" v-model="selected" />
          </vs-td>
          <vs-td>
            {{ gpu.idGPU }}
          </vs-td>
          <vs-td>
            {{ gpu.model }}
          </vs-td>
        </vs-tr>
      </template>
    </vs-table>
    <vs-button @click="deleteGPUS(selected)">Eliminar </vs-button>
  </div>
</template>
 
<script>
import { http } from "../http-common";

export default {
  name: "gpus-list",
  data() {
    return {
      gpus: [],
      data: "",
      allCheck: false,
      selected: [],
      id: "",
    };
  },
  methods: {
    /* eslint-disable no-console */
    retrieveGPUS() {
      http
        .get("/gpus")
        .then((response) => {
          this.gpus = response.data; // JSON are parsed automatically.
          console.log(response.data);
        })
        .catch((e) => {
          console.log(e);
        });
    },
    deleteGPU(id) {
      http.delete("/gpu/" + id).catch((e) => {
        console.log(e);
      });
    },
    refreshList() {
      this.retrieveGPUS();
    },
    deleteGPUS(selected) {
      for (var i = 0; i < selected.length; i++) {
        var key = selected[i].idGPU;
        this.deleteGPU(key);
      }
      window.location.reload();
    },
  },
  mounted() {
    this.retrieveGPUS();
  },
};
</script>
 
<style>
.list {
  text-align: left;
  max-width: 450px;
  margin: auto;
}
</style>