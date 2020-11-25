<template>
<div>
  <div class="container-fluid p-4 d-flex justify-content-center flex-column">
    <vs-table v-model="selected">
      <template #thead>
        <vs-tr>
          <vs-th>
            <vs-checkbox
              :indeterminate="selected.length == powers.length"
              v-model="allCheck"
              @change="selected = $vs.checkAll(selected, powers)"
            />
          </vs-th>
          <vs-th> Id </vs-th>
          <vs-th> Modelo </vs-th>
        </vs-tr>
      </template>
      <template #tbody>
        <vs-tr
          :key="i"
          v-for="(power, i) in powers"
          :data="power"
          :is-selected="!!selected.includes(power)"
        >
          <vs-td checkbox>
            <vs-checkbox :val="power" v-model="selected" />
          </vs-td>
          <vs-td>
            {{ power.idPowerSupply }}
          </vs-td>
          <vs-td>
            {{ power.model }}
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
         <vs-button @click="deletePOWERS(selected)">Eliminar </vs-button>
         </div>
      </vs-col>

    </vs-row>

  </div>
</template>
 
<script>
import EasyPCService from '../../services/EasyPCService';

export default {
  name: "powers-list",
  data() {
    return {
      powers: [],
      data: "",
      allCheck: false,
      selected: [],
      id: "",
    };
  },
  methods: {
    /* eslint-disable no-console */
    retrievePOWERS() {
      EasyPCService
        .getAllPowerSupplies()
        .then((response) => {
          this.powers = response.data; // JSON are parsed automatically.
           
        })
        .catch((e) => {
          console.log(e);
        });
    },
    deletePOWER(id) {
      EasyPCService.deletePowerSupply(id).catch((e) => {
        console.log(e);
      });
    },
    refreshList() {
      this.retrievePOWERS();
    },
    deletePOWERS(selected) {
      for (var i = 0; i < selected.length; i++) {
        var key = selected[i].idPowerSupply;
        this.deletePOWER(key);
      }
      window.location.reload();
    },
  },
  mounted() {
    this.retrievePOWERS();
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