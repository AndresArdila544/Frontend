<template>
<div>
  <div class="container-fluid p-4 d-flex justify-content-center flex-column">
    <vs-table v-model="selected">
      <template #thead>
        <vs-tr>
          <vs-th>
            <vs-checkbox
              :indeterminate="selected.length == monitors.length"
              v-model="allCheck"
              @change="selected = $vs.checkAll(selected, monitors)"
            />
          </vs-th>
          <vs-th> Id </vs-th>
          <vs-th> Modelo </vs-th>
        </vs-tr>
      </template>
      <template #tbody>
        <vs-tr
          :key="i"
          v-for="(monitor, i) in monitors"
          :data="monitor"
          :is-selected="!!selected.includes(monitor)"
        >
          <vs-td checkbox>
            <vs-checkbox :val="monitor" v-model="selected" />
          </vs-td>
          <vs-td>
            {{ monitor.idMonitor }}
          </vs-td>
          <vs-td>
            {{ monitor.model }}
          </vs-td>
        </vs-tr>
      </template>
    </vs-table>
  </div>
           <vs-row>
      <vs-col  vs-type="flex" vs-justify="center" vs-align="center" w="4"> 
      </vs-col>
      <vs-col  vs-type="flex" vs-justify="center" vs-align="center" w="4">
        <div class=" d-flex justify-content-center">
         <vs-button @click="deleteMONITORS(selected)">Eliminar </vs-button>
         </div>
      </vs-col>

    </vs-row>
</div>
</template>
 
<script>
import { http } from "../../http-common";

export default {
  name: "monitors-list",
  data() {
    return {
      monitors: [],
      data: "",
      allCheck: false,
      selected: [],
      id: "",
    };
  },
  methods: {
    /* eslint-disable no-console */
    retrieveMONITORS() {
      http
        .get("/monitors")
        .then((response) => {
          this.monitors = response.data; // JSON are parsed automatically.
          console.log(response.data);
        })
        .catch((e) => {
          console.log(e);
        });
    },
    deleteMONITOR(id) {
      http.delete("/monitor/" + id).catch((e) => {
        console.log(e);
      });
    },
    refreshList() {
      this.retrieveMONITORS();
    },
    deleteMONITORS(selected) {
      for (var i = 0; i < selected.length; i++) {
        var key = selected[i].idMonitor;
        this.deleteMONITOR(key);
      }
      window.location.reload();
    },
  },
  mounted() {
    this.retrieveMONITORS();
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