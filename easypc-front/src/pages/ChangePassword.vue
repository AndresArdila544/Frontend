<template>
  <div class="row">
    <v-card color="#FEDC00" class="col col-md-8 col-lg-6 offset-lg-3 offset-md-0 mx-auto">
      <div class="col-12 mx-auto">
        <div>
          <form class="form-inline" @submit="changePass">
            <div class="form-group col-12">
              <label
                for="password1"
                class="col col-md-3 col-lg-3 col-12 d-flex justify-content-xs-start campos-register"
              >Ingresa la nueva contrase&ntilde;a</label>
              <div class="col col-sm-10 col-md-9 offset-md-1 col-lg-8 offset-lg-0 mx-auto">
                <v-text-field
                  id="password1"
                  type="password"
                  :rules="[rules.required]"
                  placeholder="Que no se te olvide."
                  v-model="password1"
                  autocomplete="new-password"
                  required
                  color="rgb(59,22,100)"
                ></v-text-field>
              </div>
            </div>

            <div class="form-group col-12">
              <label for="password2" class="col col-md-3 col-lg-3 col-12 d-flex justify-content-xs-start campos-register">Verificar Contraseña</label>
              <div class="col col-sm-10 col-md-9 offset-md-1 col-lg-8 offset-lg-0 mx-auto">
                <v-text-field
                  id="password2"
                  type="password"
                  placeholder="Repitela si puedes."
                  v-model="password2"
                  @change="verification"
                  :rules="[rules.required]"
                  autocomplete="new-password"
                  required
                  color="rgb(59,22,100)"
                ></v-text-field>
              </div>
            </div>
            <div class="col-12 col-sm-12 col-md-10 mb-3">
              <vs-button
                class="col col-sm-10 col-md-10 offset-sm-1 offset-md-2 boton-register"
                type="submit"
                color="rgb(59,22,100)"
              >
              <h2>
                Aceptar
              </h2>
              </vs-button>
            </div>
            
          </form>
        </div>
      </div>
    </v-card>
  </div>
</template>
<script>
import EasyPCService from "../services/EasyPCService";
import {setAuthenticationToken} from '@/dataStorage';
export default {
  name: "ChangePassword.vue",
  components: {},
  data() {
    return {
      password1: "",
      password2: "",
      show_pass: false,
      rules: {
        required: (value) => !!value || "Required.",
      },
    };
  },
  methods: {
    changePass(event) {
      if (this.verification(this.password1, this.password2) == false) {
        alert("Clave no igual");
      } else {
        var data = {
          newPassword: this.password1,
        };
        EasyPCService.changeUserPassword(data)
          .then((response) => {
            if (response.status !== 200) {
              alert("Error en al cambiar la contraseña");
            } else {
              this.logout()
            }
          })
          .catch((error) => {
            console.log(error)
          });

        event.preventDefault();
      }
    },

    verification(pass1, pass2) {
      var isEqual = false;
      if (pass1 === pass2) {
        isEqual = true;
        this.ver = isEqual;
        return isEqual;
      }
      return isEqual;
    },

    logout() {
      setAuthenticationToken( null );
      this.$store.commit("setAuthentication", false);
      localStorage.setItem("user","Invitado")
      this.$store.commit("setUser","Invitado")
      localStorage.setItem("role","")
      this.$store.commit("setRole","")
      this.$router.push({ name: "Home" });
      this.user = "Invitado"
    },
  },
};
</script>

<style scoped lang="scss" >
</style>
