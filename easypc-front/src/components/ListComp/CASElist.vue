<template>
  <div class="center">
    <vs-table v-model="selected">
      <template #thead>
        <vs-tr>
          <vs-th>
            <vs-checkbox
              :indeterminate="selected.length == cases.length"
              v-model="allCheck"
              @change="selected = $vs.checkAll(selected, cases)"
            />
          </vs-th>
          <vs-th> Id </vs-th>
          <vs-th> Modelo </vs-th>
        </vs-tr>
      </template>
      <template #tbody>
        <vs-tr
          :key="i"
          v-for="(cas, i) in cases"
          :data="cas"
          :is-selected="!!selected.includes(cas)"
        >
          <vs-td checkbox>
            <vs-checkbox :val="cas" v-model="selected" />
          </vs-td>
          <vs-td>
            {{ cas.idCase }}
          </vs-td>
          <vs-td>
            {{ cas.model }}
          </vs-td>
        </vs-tr>
      </template>
    </vs-table>
    <!--<span class="data">
      <pre>
  {{ selected.length > 0 ? selected : "Select an item in the table" }}
        </pre
      >
    </span> -->>
    <vs-button @click="deleteCASES(selected)">Eliminar </vs-button>
  </div>
</template>
 
<script>
import { http } from "../http-common";

export default {
  name: "cases-list",
  data() {
    return {
      cases: [],
      data: "",
      allCheck: false,
      selected: [],
      id: "",
    };
  },
  methods: {
    /* eslint-disable no-console */
    retrieveCASES() {
      http
        .get("/cases")
        .then((response) => {
          this.cases = response.data; // JSON are parsed automatically.
          console.log(response.data);
        })
        .catch((e) => {
          console.log(e);
        });
    },
    deleteCASE(id) {
      http.delete("/case/" + id).catch((e) => {
        console.log(e);
      });
    },
    refreshList() {
      this.retrieveCASES();
    },
    deleteCASES(selected) {
      for (var i = 0; i < selected.length; i++) {
        var key = selected[i].idCase;
        this.deleteCASE(key);
      }
      window.location.reload();
    },
  },
  mounted() {
    this.retrieveCASES();
  },
};
</script>
 
<style>
.list {
  text-align: left;
  max-width: 1vw;
  margin: auto;
}
</style>