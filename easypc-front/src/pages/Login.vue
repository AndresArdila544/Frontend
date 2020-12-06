<template>
  <div class="row">
    <v-card
      color="#FEDC00"
      class="col col-md-8 col-lg-6 offset-lg-3 offset-md-0 mx-auto"
    >
      <div class="col-12 mx-auto">
        <div>
          <form class="form-inline" >
            <div class="col-12 text-center mb-5 titulo-login d-none d-sm-block">
              Iniciar Sesi&oacute;n
            </div>

            <div class="col-12 form-group">
              <label
                for="username"
                class="col col-md-3 col-lg-3 col-12 d-flex justify-content-xs-start campos-login"
                >Nombre de Usuario</label
              >
              <div
                class="col col-sm-10 col-md-9 offset-md-1 col-lg-8 offset-lg-0 mx-auto"
              >
                <v-text-field
                  v-model="username"
                  type="text"
                  placeholder="NoobMaster69"
                  :rules="[rules.required, rules.max]"
                  required
                  max
                  append-icon=""
                  color="rgb(59,22,100)"
                ></v-text-field>
              </div>
            </div>
            <div class="col-12 form-group">
              <label
                for="password"
                class="col col-md-3 col-lg-3 col-12 d-flex justify-content-xs-start campos-login"
                >Contrase&ntilde;a</label
              >
              <div
                class="col col-sm-10 col-md-9 offset-md-1 col-lg-8 offset-lg-0 mx-auto"
              >
                <v-text-field
                  v-model="password"
                  :append-icon="show_pass ? 'mdi-eye' : 'mdi-eye-off'"
                  :rules="[rules.required, rules.max]"
                  required
                  max
                  :type="show_pass ? 'text' : 'password'"
                  placeholder="12345"
                  color="rgb(59,22,100)"
                  @click:append="show_pass = !show_pass"
                ></v-text-field>
              </div>
            </div>
            <div class="col-12 col-sm-12 col-md-10 mb-3">
              <vs-button
                class="col col-sm-10 col-md-10 offset-sm-1 offset-md-2 boton-login"
                
                color="rgb(59,22,100)"
                @click="login"

              >
                <h2>Iniciar Sesi&oacute;n</h2>
              </vs-button>
            </div>
            <div class="col-12 col-sm-12 col-md-5 text-center mb-3 mx-auto">
              <span class>
                <small>
                  <router-link :to="{ name: 'SignUp' }">
                    <h4>&iquest;No tienes una cuenta? &iexcl;Registrate!</h4>
                  </router-link>
                </small>
              </span>
            </div>
          </form>
        </div>
      </div>
    </v-card>
  </div>
</template>
<script>
import EasyPCService from "../services/EasyPCService";
import { setAuthenticationToken } from "@/dataStorage";
import jsSHA from "jssha";

export default {
  name: "Login.vue",
  components: {},
  data() {
    return {
      username: "",
      password: "",
      show_pass: false,
      rules: {
        required: (value) => !!value || "Required.",
        max: (v) => v.length <= 16 || "Max 16 characters",
      },
    };
  },
  methods: {
    login(event) {
      if (this.username.length <= 16 && this.password.length <= 16) {
        const hash = this.hashing(this.password)
        EasyPCService.authentication(this.username, hash)
          .then((response) => {
            if (response.status !== 200) {
              alert("Error en la autenticación");
            } else {
              setAuthenticationToken(response.data.access_token);
              this.$store.commit("setAuthentication", true);
              EasyPCService.getUserByToken()
                .then((r) => {
                  localStorage.setItem("user", r.data.username);
                  this.$store.commit("setUser", r.data.username);
                  localStorage.setItem("role", r.data.roles[0].roleName);
                  this.$store.commit("setRole", r.data.roles[0].roleName);
                  this.$router.replace({ name: "Profile" });
                })
                .catch((e) => {
                  console.log(e);
                });
            }
          })
          .catch((error) => {
            if (error.response.status === 400) {
              alert("Credenciales incorrectas");
            } else {
              alert(
                "¡Parece que hubo un error de comunicación con el servidor!"
              );
            }
            console.log(error);
          });

        event.preventDefault();
      }else{
        alert("Max 16 caracteres");
      }
    },
    hashing(name) {
      const shaObj = new jsSHA("SHA-512", "TEXT", { encoding: "UTF8" });
      shaObj.update(name);
      const hash = shaObj.getHash("HEX");
      return hash;
    },
  },
};
</script>

<style scoped lang="scss" >
.boton-login {
  text-align: center;
  font-size: calc(1.2rem + 0.2vw);
  font-family: "Poppins", sans-serif;
}

.titulo-login {
  text-align: center;
  font-size: calc(1.9rem + 1.8vw);
  font-family: "Poppins", sans-serif;
}
.campos-login {
  font-size: calc(1rem + 0.5vw);
  font-family: "Poppins", sans-serif;
}
.inputs-login {
  font-size: calc(1rem + 0.5vw);
  background-color: red;
}
</style>
