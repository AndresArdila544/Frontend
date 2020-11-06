<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12 col-sm-10 col-md-8 mx-auto">
        <div class="mt-5">
          <form class="form-inline" @submit="login">

            <h2 class="col-12 text-center mt-3 mb-5 titulo-login">Iniciar Sesi&oacute;n</h2>

            <div class="col-12 form-group ">
              <label for="username" class="col-12 col-md-4 campos-login">Nombre de Usuario</label>
              <div class="webflow-style-input col col-sm-10 col-md-8 offset-sm-1 offset-md-2">
                  <input id="username" class="col-12 inputs-login" type="text"
                                      placeholder="Nombre" v-model="username" required/>
              </div>
              
            </div>

            <div class="col-12 form-group">
              <label for="password" class="col-12 col-md-4 campos-login">Contrase&ntilde;a</label>
              
              
              <div class="webflow-style-input col col-sm-10 col-md-8 offset-sm-1 offset-md-2">
                <input id="password" class="inputs-login col-12" type="password"
                     placeholder="Contraseña" v-model="password" required/>
              </div>
            </div>

            <div class="col-12 col-sm-12 col-md-5 text-center mb-3">
                <span class="">
                  <small>
                    <router-link :to="{ name: 'SignUp' }">&iquest;No tienes una cuenta? &iexcl;Registrate!</router-link>
                  </small>
                </span>
            </div>
            <div class="col-12 col-sm-12 col-md-4 mb-3">
              <vs-button 
                class="col col-sm-10 col-md-10 offset-sm-1 offset-md-2 boton-login" 
                type="submit"
                color="rgb(59,22,100)">
                Iniciar Sesi&oacute;n
              </vs-button>
            </div>

          </form>
        </div>
      </div>
    </div>
    <div class="row">
      
    </div>
  </div>
</template>
<script>
import EasyPCService from "../services/EasyPCService"

    export default {
        name: "Login.vue",
        components: {},
        data(){
            return {
                username: '',
                password: ''
            }
        },
        methods: {
            login( event ){
               EasyPCService.authentication(this.username,this.password).
               then( response => {
                    if( response.status !== 200 ){
                        alert( "Error en la autenticación" );
                    }else{
                        localStorage.setItem( 'token', response.data.access_token );
                        //alert( "¡Autenticación Exitosa! El token se ha almacenado en el Local Storage" )
                        this.$router.push("/Admin");
                    }
                } ).catch( error => {
                    if( error.response.status === 400 ){
                      alert( "Credenciales incorrectas" );
                    }else{
                      alert( "¡Parece que hubo un error de comunicación con el servidor!" );
                    }
                } );

                event.preventDefault();
            }
        }
    }
</script>

<style scoped lang="scss" >
  
.boton-login {
  text-align: center;
  font-size: calc(1.2rem + 0.2vw);
  font-family: 'Poppins', sans-serif; 
}

.titulo-login {
  text-align: center;
  font-size: calc(1.7rem + 0.8vw);
  font-family: 'Poppins', sans-serif;
}
.campos-login{
font-size: calc(1rem + 0.5vw);
}
.inputs-login {
font-size: calc(1rem + 0.5vw);
background-color: inherit;

}
@keyframes gradient { 
  0%{background-position:0 0}
  100%{background-position:100% 0}
}
$input-background: inherit;


.webflow-style-input {
  width: 100%;
  &:after {
    content: "";
    position: absolute;
    left: 0px;
    right: 0px;
    bottom: 0px;
    z-index: 999;
    height: 7px;
    border-bottom-left-radius: 2px;
    border-bottom-right-radius: 2px;
    background-position: 0% 0%;
    background: linear-gradient(to right, #B294FF, #57E6E6, #FEFFB8, #57E6E6, #B294FF, #57E6E6);
    background-size: 500% auto;
    animation: gradient 3s linear infinite;
  }
}

.webflow-style-input input {
  flex-grow: 1;
  font-size: 1.8rem;
  line-height: 2.4rem;
  vertical-align: middle;
 
}

</style>
