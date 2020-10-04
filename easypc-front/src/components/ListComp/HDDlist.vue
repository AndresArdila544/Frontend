<template>
<div>
  <div class="container-fluid p-4 d-flex justify-content-center flex-column">
    <vs-table v-model="selected">
      <template #thead>
        <vs-tr>
          <vs-th>
            <vs-checkbox
              :indeterminate="selected.length == hdds.length"
              v-model="allCheck"
              @change="selected = $vs.checkAll(selected, hdds)"
            />
          </vs-th>
          <vs-th> Id </vs-th>
          <vs-th> Modelo </vs-th>
        </vs-tr>
      </template>
      <template #tbody>
        <vs-tr
          :key="i"
          v-for="(hdd, i) in hdds"
          :data="hdd"
          :is-selected="!!selected.includes(hdd)"
        >
          <vs-td checkbox>
            <vs-checkbox :val="hdd" v-model="selected" />
          </vs-td>
          <vs-td>
            {{ hdd.idHDD }}
          </vs-td>
          <vs-td>
            {{ hdd.model }}
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
         <vs-button @click="deleteHDDS(selected)">Eliminar </vs-button>
        </div>
      </vs-col>

    </vs-row>

  </div>
</template>
 
<script>
import { http } from "../../http-common";

export default {
  name: "hdds-list",
  data() {
    return {
      hdds: [],
      data: "",
      allCheck: false,
      selected: [],
      id: "",
    };
  },
  methods: {
    /* eslint-disable no-console */
    retrieveHDDS() {
      http
        .get("/hdds")
        .then((response) => {
          this.hdds = response.data; // JSON are parsed automatically.
          console.log(response.data);
        })
        .catch((e) => {
          console.log(e);
        });
    },
    deleteHDD(id) {
      http.delete("/hdd/" + id).catch((e) => {
        console.log(e);
      });
    },
    refreshList() {
      this.retrieveHDDS();
    },
    deleteHDDS(selected) {
      for (var i = 0; i < selected.length; i++) {
        var key = selected[i].idHDD;
        this.deleteHDD(key);
      }
      window.location.reload();
    },
  },
  mounted() {
    this.retrieveHDDS();
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