<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12 col-sm-10 col-md-8 offset-sm-1 offset-md-2">
        <div class="mt-5">
          <form
            class="border border-primary rounded form-inline"
            @submit="register"
          >
            <h2 class="col-12 text-center text-primary mt-3 mb-5">
              Registrate :)
            </h2>

            <div class="form-group col-12">
              <label for="username" class="custom-label col-md-3"
                >Nombre de Usuario</label
              >
              <input
                id="username"
                class="form-control col-12 col-sm-10 col-md-7 offset-sm-1"
                type="text"
                placeholder="Nombres"
                v-model="username"
                required
              />
            </div>

            <div class="form-group col-12">
              <label for="password" class="custom-label col-md-3"
                >Contrase&ntilde;a</label
              >
              <input
                id="password"
                class="form-control col-12 col-sm-10 col-md-7 offset-sm-1"
                type="password"
                placeholder="Contraseña"
                v-model="password1"
                required
              />
            </div>

            <div class="form-group col-12">
              <label for="password" class="custom-label col-md-3"
                >Verificar Contraseña</label
              >
              <input
                id="password"
                class="form-control col-12 col-sm-10 col-md-7 offset-sm-1"
                type="password"
                placeholder="Contraseña"
                v-model="password2"
                @change="verification"
                required
              />
            </div>
            <div v-if="ver== false">
                <p>Claves diferentes</p>               
            </div>
            <div class="col-12 col-sm-5 col-md-4 mb-3">
              <button
                class="col-sm-10 col-md-10 offset-sm-1 offset-md-2 btn btn-primary"
                type="submit"
              >
                Registrate
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import EasyPCService from "../services/EasyPCService";
export default {
  data() {
    return {
      username: "",
      password1: "",
      password2: "",
      ver: false,
    };
  },
  methods: {
    register(event) {
      if (this.verification(this.password1, this.password2) == false) {
          console.log(":)")
          alert("Clave no igual")
      } else {
        var data = {
          username: this.username,
          password: this.password1,
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

    verification(pass1, pass2) {
      var isEqual=false;
      if (pass1 === pass2) {
        isEqual=true
        this.ver=isEqual
        return isEqual
      }
      return isEqual;
    }
  },
};
</script>

<style>
</style>