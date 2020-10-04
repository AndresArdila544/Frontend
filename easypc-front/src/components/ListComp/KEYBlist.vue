<template>
  <div>
  <div class="container-fluid p-4 d-flex justify-content-center flex-column">
    <vs-table v-model="selected">
      <template #thead>
        <vs-tr>
          <vs-th>
            <vs-checkbox
              :indeterminate="selected.length == keyboards.length"
              v-model="allCheck"
              @change="selected = $vs.checkAll(selected, keyboards)"
            />
          </vs-th>
          <vs-th> Id </vs-th>
          <vs-th> Modelo </vs-th>
        </vs-tr>
      </template>
      <template #tbody>
        <vs-tr
          :key="i"
          v-for="(keyboard, i) in keyboards"
          :data="keyboard"
          :is-selected="!!selected.includes(keyboard)"
        >
          <vs-td checkbox>
            <vs-checkbox :val="keyboard" v-model="selected" />
          </vs-td>
          <vs-td>
            {{ keyboard.idRam }}
          </vs-td>
          <vs-td>
            {{ keyboard.model }}
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
         <vs-button @click="deleteKEYBOARDS(selected)">Eliminar </vs-button>
         </div>
      </vs-col>

    </vs-row>
  </div>

</template>
 
<script>
import { http } from "../../http-common";

export default {
  name: "keyboards-list",
  data() {
    return {
      keyboards: [],
      data: "",
      allCheck: false,
      selected: [],
      id: "",
    };
  },
  methods: {
    /* eslint-disable no-console */
    retrieveKEYBOARDS() {
      http
        .get("/keyboards")
        .then((response) => {
          this.keyboards = response.data; // JSON are parsed automatically.
          console.log(response.data);
        })
        .catch((e) => {
          console.log(e);
        });
    },
    deleteKEYBOARD(id) {
      http.delete("/keyboard/" + id).catch((e) => {
        console.log(e);
      });
    },
    refreshList() {
      this.retrieveKEYBOARDS();
    },
    deleteKEYBOARDS(selected) {
      for (var i = 0; i < selected.length; i++) {
        var key = selected[i].idKeyboard;
        this.deleteKEYBOARD(key);
      }
      window.location.reload();
    },
  },
  mounted() {
    this.retrieveKEYBOARDS();
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