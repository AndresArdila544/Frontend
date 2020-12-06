<template>
  <div class="row">
    <v-card
      color="#FEDC00"
      class="col col-md-8 col-lg-6 offset-lg-3 offset-md-0 mx-auto"
    >
      <div class="col-12 mx-auto">
        <div>
          <form class="form-inline" @submit="register">
            <div
              class="col-12 text-center mb-5 titulo-register d-none d-sm-block"
            >
              Registrate
            </div>
            <div class="form-group col-12">
              <label
                for="username"
                class="col col-md-3 col-lg-3 col-12 d-flex justify-content-xs-start campos-register"
                >Nombre de Usuario</label
              >
              <div
                class="col col-sm-10 col-md-9 offset-md-1 col-lg-8 offset-lg-0 mx-auto"
              >
                <v-text-field
                  id="username"
                  type="text"
                  :rules="[rules.required,rules.required, rules.max]"
                  required
                  placeholder="Vamos se creativo."
                  v-model="username"
                  autocomplete="username"
                  append-icon
                  color="rgb(59,22,100)"
                ></v-text-field>
              </div>
            </div>
            <div class="form-group col-12">
              <label
                for="password1"
                class="col col-md-3 col-lg-3 col-12 d-flex justify-content-xs-start campos-register"
                >Contrase&ntilde;a</label
              >
              <div
                class="col col-sm-10 col-md-9 offset-md-1 col-lg-8 offset-lg-0 mx-auto"
              >
                <v-text-field
                  id="password1"
                  type="password"
                  :rules="[rules.required, rules.max]"
                  placeholder="Que no se te olvide."
                  v-model="password1"
                  autocomplete="new-password"
                  required
                  color="rgb(59,22,100)"
                ></v-text-field>
              </div>
            </div>

            <div class="form-group col-12">
              <label
                for="password2"
                class="col col-md-3 col-lg-3 col-12 d-flex justify-content-xs-start campos-register"
                >Verificar Contraseña</label
              >
              <div
                class="col col-sm-10 col-md-9 offset-md-1 col-lg-8 offset-lg-0 mx-auto"
              >
                <v-text-field
                  id="password2"
                  type="password"
                  placeholder="Repitela si puedes."
                  v-model="password2"
                  @change="verification"
                  :rules="[rules.required,rules.required, rules.max]"
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
                <h2>Registrate</h2>
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
import jsSHA from "jssha";

export default {
  data() {
    return {
      username: "",
      password1: "",
      password2: "",
      ver: false,
      rules: {
        required: (value) => !!value || "Required.",
         max: (v) => v.length <= 16 || "Max 16 characters",
      },
    };
  },
  methods: {
    register(event) {
      if (
        this.verification(this.username, this.password1, this.password2) ==
        false
      ) {
        alert("Clave no igual. Max 16 caracteres");
      } else {
        const hash = this.hashing(this.password1);
        var data = {
          username: this.username,
          password: hash,
        };
        EasyPCService.register(data)
          .then((response) => {
            if (response.status !== 200) {
              alert("Error en registro");
            } else {
              this.$router.push("/Admin");
            }
          })
          .catch((error) => {
            if (error.response.status === 500) {
              alert("Nombre de usuario ya existente");
            } else {
              alert(
                "¡Parece que hubo un error de comunicación con el servidor!"
              );
            }
          });

        event.preventDefault();
      }
    },

    verification(user, pass1, pass2) {
      console.log("opened")
      var isEqual = false;
      if (pass1.length <= 16 && pass2.length <= 16 && user.length <= 16) {
        if (pass1 === pass2) {
          isEqual = true;
          this.ver = isEqual;
          return isEqual;
        }
      }
      return isEqual;
    },
    hashing(name) {
      const shaObj = new jsSHA("SHA-512", "TEXT", { encoding: "UTF8" });
      shaObj.update(name);
      const hash = shaObj.getHash("HEX");
      return hash;
    },
  },

  mounted() {},
};
</script>

<style lang="scss">
.titulo-register {
  text-align: center;
  font-size: calc(1.9rem + 1.8vw);
  font-family: "Poppins", sans-serif;
}
.boton-register {
  text-align: center;
  font-size: calc(1.2rem + 0.2vw);
  font-family: "Poppins", sans-serif;
}
.campos-register {
  font-size: calc(1rem + 0.5vw);
  font-family: "Poppins", sans-serif;
}
</style>