<template>
<div>
  <div class="container-fluid p-4 d-flex justify-content-center flex-column">
    <vs-table v-model="selected">
      <template #thead>
        <vs-tr>
          <vs-th>
            <vs-checkbox
              :indeterminate="selected.length == motherboards.length"
              v-model="allCheck"
              @change="selected = $vs.checkAll(selected, motherboards)"
            />
          </vs-th>
          <vs-th> Id </vs-th>
          <vs-th> Modelo </vs-th>
        </vs-tr>
      </template>
      <template #tbody>
        <vs-tr
          :key="i"
          v-for="(motherboard, i) in motherboards"
          :data="motherboard"
          :is-selected="!!selected.includes(motherboard)"
        >
          <vs-td checkbox>
            <vs-checkbox :val="motherboard" v-model="selected" />
          </vs-td>
          <vs-td>
            {{ motherboard.idMotherboard }}
          </vs-td>
          <vs-td>
            {{ motherboard.model }}
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
         <vs-button @click="deleteMOTHERBOARDS(selected)">Eliminar </vs-button>
         </div>
      </vs-col>

    </vs-row>
  </div>
</template>
 
<script>
import EasyPCService from '../../services/EasyPCService';

export default {
  name: "motherboards-list",
  data() {
    return {
      motherboards: [],
      data: "",
      allCheck: false,
      selected: [],
      id: "",
    };
  },
  methods: {
    /* eslint-disable no-console */
    retrieveMOTHERBOARDS() {
      EasyPCService
        .getAllMotherboards()
        .then((response) => {
          this.motherboards = response.data; // JSON are parsed automatically.
          console.log(response.data);
        })
        .catch((e) => {
          console.log(e);
        });
    },
    deleteMOTHERBOARD(id) {
      EasyPCService.deleteMotherboard(id).catch((e) => {
        console.log(e);
      });
    },
    refreshList() {
      this.retrieveMOTHERBOARDS();
    },
    deleteMOTHERBOARDS(selected) {
      for (var i = 0; i < selected.length; i++) {
        var key = selected[i].idMotherboard;
        this.deleteMOTHERBOARD(key);
      }
      window.location.reload();
    },
  },
  mounted() {
    this.retrieveMOTHERBOARDS();
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