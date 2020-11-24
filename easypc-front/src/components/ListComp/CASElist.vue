<template>
<div>
  <div class="container-fluid p-4 d-flex justify-content-center flex-column">
    <vs-table id="table" class="px-5 "  v-model="selected">
      <template  #thead>
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
    </div>
       <vs-row>
      <vs-col  vs-type="flex" vs-justify="center" vs-align="center" w="4"> 
      </vs-col>
      <vs-col  vs-type="flex" vs-justify="center" vs-align="center" w="4">
        <div class=" d-flex justify-content-center">
         <vs-button @click="deleteCASES(selected)">Eliminar </vs-button>
         </div>
      </vs-col>

    </vs-row>
   
    

   
</div>
</template>
 
<script>
import EasyPCService from '../../services/EasyPCService';

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
      EasyPCService
        .getAllCases()
        .then((response) => {
          this.cases = response.data; // JSON are parsed automatically.
           
        })
        .catch((e) => {
          console.log(e);
        });
    },
    deleteCASE(id) {
      EasyPCService.deleteCase(id).catch((e) => {
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
#table {
  size: 5vw;
}
</style>