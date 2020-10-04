<template>
  <div class="center">
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
    <vs-button @click="deletePOWERS(selected)">Eliminar </vs-button>
  </div>
</template>
 
<script>
import { http } from "../http-common";

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
      http
        .get("/power-supplies")
        .then((response) => {
          this.powers = response.data; // JSON are parsed automatically.
          console.log(response.data);
        })
        .catch((e) => {
          console.log(e);
        });
    },
    deletePOWER(id) {
      http.delete("/power-supply/" + id).catch((e) => {
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