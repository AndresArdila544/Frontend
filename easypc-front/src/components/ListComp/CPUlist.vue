<template>
<div>
  <div class="container-fluid p-4 d-flex justify-content-center flex-column">
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
  </div>
   <vs-row>
      <vs-col  vs-type="flex" vs-justify="center" vs-align="center" w="4"> 
      </vs-col>
      <vs-col  vs-type="flex" vs-justify="center" vs-align="center" w="4">
        <div class=" d-flex justify-content-center">
         <vs-button @click="deleteCPUS(selected)">Eliminar </vs-button>
         </div>
      </vs-col>

    </vs-row>
  </div>
</template>
 
<script>

import EasyPCService from "../../services/EasyPCService";


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
      EasyPCService.getAllCPUs()
        .then((response) => {
          this.cpus = response.data; // JSON are parsed automatically.
          console.log(response.data);
        })
        .catch((e) => {
          console.log(e);
        });
    },
    deleteCPU(id) {
      EasyPCService.deleteCPU(id).catch((e) => {
        console.log(e);
      });
    },
    refreshList() {
      this.retrieveCPUS();
    },
    deleteCPUS(selected) {
      for (var i = 0; i < selected.length; i++) {
        var key = selected[i].idCPU;
        this.deleteCPU(key);
      }
      window.location.reload();
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