<template>
<div>
  <div class="container-fluid p-4 d-flex justify-content-center flex-column">
    <vs-table v-model="selected">
      <template #thead>
        <vs-tr>
          <vs-th>
            <vs-checkbox
              :indeterminate="selected.length == coolings.length"
              v-model="allCheck"
              @change="selected = $vs.checkAll(selected, coolings)"
            />
          </vs-th>
          <vs-th> Id </vs-th>
          <vs-th> Modelo </vs-th>
        </vs-tr>
      </template>
      <template #tbody>
        <vs-tr
          :key="i"
          v-for="(cooling, i) in coolings"
          :data="cooling"
          :is-selected="!!selected.includes(cooling)"
        >
          <vs-td checkbox>
            <vs-checkbox :val="cooling" v-model="selected" />
          </vs-td>
          <vs-td>
            {{ cooling.idCooling }}
          </vs-td>
          <vs-td>
            {{ cooling.model }}
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
         <vs-button @click="deleteCOOLINGS(selected)">Eliminar </vs-button>
         </div>
      </vs-col>

    </vs-row>
  </div>
</template>
 
<script>
import EasyPCService from '../../services/EasyPCService';

export default {
  name: "coolings-list",
  data() {
    return {
      coolings: [],
      data: "",
      allCheck: false,
      selected: [],
      id: "",
    };
  },
  methods: {
    /* eslint-disable no-console */
    retrieveCOOLINGS() {
      EasyPCService
        .getAllCoolings()
        .then((response) => {
          this.coolings = response.data; // JSON are parsed automatically.
          console.log(response.data);
        })
        .catch((e) => {
          console.log(e);
        });
    },
    deleteCOOLING(id) {
      EasyPCService.deleteCooling(id).catch((e) => {
        console.log(e);
      });
    },
    refreshList() {
      this.retrieveCOOLINGS();
    },
    deleteCOOLINGS(selected) {
      for (var i = 0; i < selected.length; i++) {
        var key = selected[i].idCooling;
        this.deleteCOOLING(key);
      }
      window.location.reload();
    },
  },
  mounted() {
    this.retrieveCOOLINGS();
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