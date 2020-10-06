<template>
<div>
  <div class="container-fluid p-4 d-flex justify-content-center flex-column">
    <vs-table v-model="selected">
      <template #thead>
        <vs-tr>
          <vs-th>
            <vs-checkbox
              :indeterminate="selected.length == mice.length"
              v-model="allCheck"
              @change="selected = $vs.checkAll(selected, mice)"
            />
          </vs-th>
          <vs-th> Id </vs-th>
          <vs-th> Modelo </vs-th>
        </vs-tr>
      </template>
      <template #tbody>
        <vs-tr
          :key="i"
          v-for="(mouse, i) in mice"
          :data="mouse"
          :is-selected="!!selected.includes(mouse)"
        >
          <vs-td checkbox>
            <vs-checkbox :val="mouse" v-model="selected" />
          </vs-td>
          <vs-td>
            {{ mouse.idMouse }}
          </vs-td>
          <vs-td>
            {{ mouse.model }}
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
         <vs-button @click="deleteMICE(selected)">Eliminar </vs-button>
         </div>
      </vs-col>

    </vs-row>
  </div>
</template>
 
<script>
import EasyPCService from '../../services/EasyPCService';

export default {
  name: "mice-list",
  data() {
    return {
      mice: [],
      data: "",
      allCheck: false,
      selected: [],
      id: "",
    };
  },
  methods: {
    /* eslint-disable no-console */
    retrieveMICE() {
      EasyPCService
        .getAllMice()
        .then((response) => {
          this.mice = response.data; // JSON are parsed automatically.
          console.log(response.data);
        })
        .catch((e) => {
          console.log(e);
        });
    },
    deleteMOUSE(id) {
      EasyPCService.deleteMouse(id).catch((e) => {
        console.log(e);
      });
    },
    refreshList() {
      this.retrieveMICE();
    },
    deleteMICE(selected) {
      for (var i = 0; i < selected.length; i++) {
        var key = selected[i].idMouse;
        this.deleteMOUSE(key);
      }
      window.location.reload();
    },
  },
  mounted() {
    this.retrieveMICE();
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