<template>
  <div class="center">
    <nav
      class="navbar navbar-dark sticky-top navbar-expand-lg justify-content-right"
      style="background-color: #0f3057;"
    >
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
        
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <router-link to="/">
        <img alt="limon_nav" class="img-fluid" src="../assets/limon.png" width="40%" />
      </router-link>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <div class="col-sm-12 col-md-2 col-lg-1" v-if="this.$store.state.authenticated==true">
            <h3>{{this.$store.getters.getUser.toUpperCase()}}</h3>
        </div>
      </div>
      <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent" v-if="this.$store.state.authenticated==false">
        <ul class="navbar-nav col">
          <li class="nav-item active col-sm-12 col-md-6 col-lg-6" v-if="this.$store.state.authenticated==false">
            <router-link to="Login">
              <vs-button
                class="login-button"
                color="#81b214"
                block
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
              >
                Identificate
                <template #animate>Login</template>
              </vs-button>
            </router-link>
          </li>
          <li class="nav-item active col-sm-12 col-md-6 col-lg-6" v-if="this.$store.state.authenticated==false">
            <router-link to="SignUp">
              <vs-button
                class="login-button"
                color="#3B1"
                block
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
              >Registrarse</vs-button>
            </router-link>
          </li>
          
        </ul>
      </div>
      <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent" v-if="this.$store.state.authenticated==true">
        <ul class="navbar-nav col justify-content-end">
          
          <li class="nav-item col-sm-12 col-md-6 col-lg-5" v-if="this.$store.state.authenticated==true">
          <router-link to="Profile" >
              <vs-button
                class="login-button"
                color="#81b214"
                block
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
              >
                Ver Perfil
                <template #animate>Profile</template>
              </vs-button>
            </router-link>
          </li>
          <li class="nav-item  col-sm-12 col-md-6 col-lg-5" v-if="this.$store.state.authenticated==true">
          <router-link to="/" >
              <vs-button
                class="login-button"
                color="#81b214"
                block
                @click="logout"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
              >
                Salir
                <template #animate>Logout</template>
              </vs-button>
            </router-link>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
import {setAuthenticationToken} from '@/dataStorage';
export default {
  name: "Navbar",
  components: {},
  data() {
    return {
      user: this.$store.getters.getUser,
    };
  },
  methods: {
    logout(event) {
      setAuthenticationToken( null );
      this.$store.commit("setAuthentication", false);
      localStorage.setItem("user","Invitado")
      this.$store.commit("setUser","Invitado")
      localStorage.setItem("role","")
      this.$store.commit("setRole","")
      this.$router.push({ name: "Home" });
      this.user = "Invitado"
      event.preventDefault();
    },
    beforeUpdate() {
      this.user = this.$store.getters.getUser
    },
  
  },
};
</script>

<style scoped>
.login-button {
  color: #e0ece4;
  font-size: calc(1.1rem + 1.2vw);
  font-family: "Poppins", sans-serif;
}
</style>