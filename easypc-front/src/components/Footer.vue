<template>
    <div class="center examplex">
        <vs-navbar color="#3b1664" hideScroll text-white notLine fixed center-collapsed v-model="active">
        <template #left>
          <router-link to="/" >
            <img alt="limon_nav" class="img-fluid" src="../assets/limon.png" @click="openLoading" width=40%/>
          </router-link>
          
        </template>
        
        <template #right>
          <vs-button id="login" color="#fff" to="Admin"
          @click="openLoading" flat >Login</vs-button>
          <vs-button id="login" color="#fff" border >Get Started</vs-button>
        </template>
      </vs-navbar>
      
    </div>
</template>

<script>
export default {
    name: 'Footer',
    components:{

    },
    data:() => ({
      active: 'guide'
    }),
    methods: {
        openLoading() {
          const loading = this.$vs.loading()
          setTimeout(() => {
            loading.close()
          }, 1100)
        }
    }
  }
</script>

<style scoped>

#login{
    font-size: 1vw;
  }
</style>