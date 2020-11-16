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
        v-if="this.$store.state.authenticated==false"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <router-link to="/">
        <img alt="limon_nav" class="img-fluid" src="../assets/limon.png" width="40%" />
      </router-link>
      <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
        <ul class="navbar-nav" v-if="this.$store.state.authenticated==false">
          <li class="nav-item active col-sm-12 col-md-6 col-lg-6">
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
          <li class="nav-item active col-sm-12 col-md-6 col-lg-6">
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
    </nav>
  </div>
</template>

<script>
export default {
  name: "Footer",
  components: {},
  data: () => ({
    loggedIn: false,
    active: 0,
  }),
  methods: {},
};
</script>

<style scoped>
.login-button {
  color: #e0ece4;
  font-size: calc(1.1rem + 1.2vw);
  font-family: "Poppins", sans-serif;
}
</style>