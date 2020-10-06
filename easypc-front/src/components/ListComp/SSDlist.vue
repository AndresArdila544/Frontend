<template>
  <div>
    <div class="container-fluid p-4 d-flex justify-content-center flex-column">
      <vs-table v-model="selected">
        <template #thead>
          <vs-tr>
            <vs-th>
              <vs-checkbox
                :indeterminate="selected.length == ssds.length"
                v-model="allCheck"
                @change="selected = $vs.checkAll(selected, ssds)"
              />
            </vs-th>
            <vs-th> Id </vs-th>
            <vs-th> Modelo </vs-th>
          </vs-tr>
        </template>
        <template #tbody>
          <vs-tr
            :key="i"
            v-for="(ssd, i) in ssds"
            :data="ssd"
            :is-selected="!!selected.includes(ssd)"
          >
            <vs-td checkbox>
              <vs-checkbox :val="ssd" v-model="selected" />
            </vs-td>
            <vs-td>
              {{ ssd.idSSD }}
            </vs-td>
            <vs-td>
              {{ ssd.model }}
            </vs-td>
          </vs-tr>
        </template>
      </vs-table>
    </div>
    <vs-row>
      <vs-col vs-type="flex" vs-justify="center" vs-align="center" w="4">
      </vs-col>
      <vs-col vs-type="flex" vs-justify="center" vs-align="center" w="4">
        <div class="d-flex justify-content-center">
          <vs-button @click="deleteSSDS(selected)">Eliminar </vs-button>
        </div>
      </vs-col>
    </vs-row>
  </div>
</template>
 
<script>
import EasyPCService from '../../services/EasyPCService';

export default {
  name: "ssds-list",
  data() {
    return {
      ssds: [],
      data: "",
      allCheck: false,
      selected: [],
      id: "",
    };
  },
  methods: {
    /* eslint-disable no-console */
    retrieveSSDS() {
      EasyPCService
        .getAllSSDs()
        .then((response) => {
          this.ssds = response.data; // JSON are parsed automatically.
          console.log(response.data);
        })
        .catch((e) => {
          console.log(e);
        });
    },
    deleteSSD(id) {
      EasyPCService.deleteSSD(id).catch((e) => {
        console.log(e);
      });
    },
    refreshList() {
      this.retrieveSSDS();
    },
    deleteSSDS(selected) {
      for (var i = 0; i < selected.length; i++) {
        var key = selected[i].idSSD;
        this.deleteSSD(key);
      }
      window.location.reload();
    },
  },
  mounted() {
    this.retrieveSSDS();
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