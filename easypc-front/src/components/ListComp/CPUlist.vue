<template>
  <div class="center">
    <vs-table v-model="selected">
      <template #thead>
        <vs-tr>
          <vs-th>
            <vs-checkbox
              :indeterminate="selected.length == cpus.length"
              v-model="allCheck"
              @change="selected = $vs.checkAll(selected, cpus)"
            />
          </vs-th>
          <vs-th> Id </vs-th>
          <vs-th> Modelo </vs-th>
        </vs-tr>
      </template>
      <template #tbody>
        <vs-tr
          :key="i"
          v-for="(cpu, i) in cpus"
          :data="cpu"
          :is-selected="!!selected.includes(cpu)"
        >
          <vs-td checkbox>
            <vs-checkbox :val="cpu" v-model="selected" />
          </vs-td>
          <vs-td>
            {{ cpu.idCPU }}
          </vs-td>
          <vs-td>
            {{ cpu.model }}
          </vs-td>
        </vs-tr>
      </template>
    </vs-table>
    <span class="data">
      <pre>
  {{ selected.length > 0 ? selected : "Select an item in the table" }}
        </pre
      >
    </span>
    <vs-button @click="deleteCP(selected)">Eliminar </vs-button>
  </div>
</template>
 
<script>
import { http } from "../http-common";

export default {
  name: "cpus-list",
  data() {
    return {
      cpus: [],
      data: "",
      allCheck: false,
      selected: [],
      id: "",
    };
  },
  methods: {
    /* eslint-disable no-console */
    retrieveCPUS() {
      http
        .get("/cpus")
        .then((response) => {
          this.cpus = response.data; // JSON are parsed automatically.
          console.log(response.data);
        })
        .catch((e) => {
          console.log(e);
        });
    },
    deleteCPUS(id) {
      http.delete("/cpu/" + id).catch((e) => {
        console.log(e);
      });
    },
    refreshList() {
      this.retrieveCPUS();
    },
    deleteCP(selected) {
      for (var i = 0; i < selected.length; i++) {
        var key = selected[i].idCPU;
        this.deleteCPUS(key);
      }
    },
  },
  mounted() {
    this.retrieveCPUS();
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