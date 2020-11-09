<template>
<div>
  <div class="container-fluid p-4 d-flex justify-content-center flex-column">
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
  </div>
     <vs-row>
      <vs-col  vs-type="flex" vs-justify="center" vs-align="center" w="4"> 
      </vs-col>
      <vs-col  vs-type="flex" vs-justify="center" vs-align="center" w="4">
        <div class=" d-flex justify-content-center">
         <vs-button @click="deleteGPUS(selected)">Eliminar </vs-button>
         </div>
      </vs-col>

    </vs-row>
  </div>
</template>
 
<script>
import EasyPCService from '../../services/EasyPCService';

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
      EasyPCService
        .getAllGPUs()
        .then((response) => {
          this.gpus = response.data; // JSON are parsed automatically.
           
        })
        .catch((e) => {
          console.log(e);
        });
    },
    deleteGPU(id) {
      EasyPCService.deleteGPU(id).catch((e) => {
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