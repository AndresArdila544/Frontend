<template>
  <div class="container">
    <div class="">
      <div class="col titulo-compt">
        <h1>Editar Compatibilidad</h1>
      </div>
    </div>
    <div v-if="!submitted" class="row">
      <div class="col subtitulo-compt">
        <h3>Seleccione una Tarjeta madre</h3>
      </div>
      <div class="col-12">
        <v-select
          :items="parte_models"
          dense
          outlined
          hide-details
          menu-props="auto"
          single-line
          v-model="selectedMB"
          v-if="renderComponent"
        ></v-select>
      </div>
      <div class="col-12">
        <vs-table v-model="selected">
          <template #thead>
            <vs-tr>
              <vs-th>
                <vs-checkbox
                  :indeterminate="selected.length == cpus.length"
                  v-model="allCheck"
                  @change="selected = $vs.checkAll(selected, cpus)"
                />
              </vs-th>
              <vs-th> Id </vs-th>
              <vs-th> Modelo </vs-th>
            </vs-tr>
          </template>
          <template #tbody>
            <vs-tr
              :key="i"
              v-for="(cpu, i) in cpus"
              :data="cpu"
              :is-selected="!!selected.includes(cpu)"
            >
              <vs-td checkbox>
                <vs-checkbox :val="cpu" v-model="selected" />
              </vs-td>
              <vs-td>
                {{ cpu.idCPU }}
              </vs-td>
              <vs-td>
                {{ cpu.model }}
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
            <vs-button @click="selectedCPUS(selected)"
              >Establecer Compatibilidad
            </vs-button>
          </div>
        </vs-col>
      </vs-row>
    </div>
    <div v-else class="col-12">
      <h4>Has establecido una Compatibilidad</h4>
      <div class="">
        <vs-button @click="newCOMP">Crear otra Compatibilidad</vs-button>
      </div>
    </div>
  </div>
</template>

<script>
import EasyPCService from "../services/EasyPCService";

export default {
  name: "AdminCompatibility",
  components: {},
  data: () => ({
    value: "",
    selectedMB: 0,
    parte_models: [],
    renderComponent: true,
    partes: [],

    cpus: [],
    data: "",
    allCheck: false,
    selected: [],
    id: "",
    submitted: false,
    res: "",
  }),
  methods: {
    cambiarValor(e) {
      this.value = e;
    },

    retrieveParts() {
      EasyPCService.getAll("motherboards")
        .then((response) => {
          this.partes = response.data;

          for (var i = 0; i < this.partes.length; i++) {
            this.parte_models.push(this.partes[i].model);
          }
        })
        .catch((e) => {
          console.log(e);
        });
      this.forceRerender();
    },
    forceRerender() {
      this.renderComponent = false;
      this.$nextTick(() => {
        this.renderComponent = true;
      });
    },

    retrieveCPUS() {
      EasyPCService.getAllCPUs()
        .then((response) => {
          this.cpus = response.data;
        })
        .catch((e) => {
          console.log(e);
        });
    },
    createCompatibility(id, data) {
      EasyPCService.createCompatibility(id, data)
        .then((response) => {
          this.res = response.data;
          this.submitted = true;
        })
        .catch((e) => {
          console.log(e);
        });
    },
    refreshList() {
      this.retrieveCPUS();
    },
    selectedCPUS(selected) {
      this.createCompatibility(
        this.partes[this.parte_models.indexOf(this.selectedMB)].idMotherboard,
        selected
      );
    },
    newCOMP() {
      this.submitted = false;
      this.selected = [];
      this.selectedMB= 0;
    },
  },
  mounted() {
    this.retrieveParts();
    this.retrieveCPUS();
  },
};
</script>

<style>
.titulo-compt {
  font-size: calc(2rem + 3.2vw);
  font-family: "Poppins", sans-serif;
}
.subtitulo-compt {
  font-size: calc(2rem + 3.2vw);
  font-family: "Poppins", sans-serif;
}
</style>

        