<template>
<div>
  <div class="container-fluid p-4 d-flex justify-content-center flex-column">
    <vs-table v-model="selected">
      <template #thead>
        <vs-tr>
          <vs-th>
            <vs-checkbox
              :indeterminate="selected.length == rams.length"
              v-model="allCheck"
              @change="selected = $vs.checkAll(selected, rams)"
            />
          </vs-th>
          <vs-th> Id </vs-th>
          <vs-th> Modelo </vs-th>
        </vs-tr>
      </template>
      <template #tbody>
        <vs-tr
          :key="i"
          v-for="(ram, i) in rams"
          :data="ram"
          :is-selected="!!selected.includes(ram)"
        >
          <vs-td checkbox>
            <vs-checkbox :val="ram" v-model="selected" />
          </vs-td>
          <vs-td>
            {{ ram.idRAM }}
          </vs-td>
          <vs-td>
            {{ ram.model }}
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
         <vs-button @click="deleteRAMS(selected)">Eliminar </vs-button>
         </div>
      </vs-col>

    </vs-row>
  </div>
</template>
 
<script>
import EasyPCService from '../../services/EasyPCService';

export default {
  name: "rams-list",
  data() {
    return {
      rams: [],
      data: "",
      allCheck: false,
      selected: [],
      id: "",
    };
  },
  methods: {
    /* eslint-disable no-console */
    retrieveRAMS() {
      EasyPCService
        .getAllRAMs()
        .then((response) => {
          this.rams = response.data; // JSON are parsed automatically.
           
        })
        .catch((e) => {
          console.log(e);
        });
    },
    deleteRAM(id) {
      EasyPCService.deleteRAM(id).catch((e) => {
        console.log(e);
      });
    },
    refreshList() {
      this.retrieveRAMS();
    },
    deleteRAMS(selected) {
      for (var i = 0; i < selected.length; i++) {
        var key = selected[i].idRAM;
        this.deleteRAM(key);
      }
      window.location.reload();
    },
  },
  mounted() {
    this.retrieveRAMS();
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