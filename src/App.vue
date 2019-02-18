<template>
  <div id="app">
    <v-layout
      height="auto"
    color="primary lighten-1"
    >
    <v-flex
        primary
        lighten-2
        py-3
        text-xs-right
        black--text
        xs12
      >
       <v-btn v-if="isLoggedIn" @click="logout" color="red" dark> Logout </v-btn>

      </v-flex>
    </v-layout>
    
    <router-view/>

     <v-footer
    height="auto"
    color="black lighten-1"
  >
    <v-layout
      justify-center
      row
      wrap
    >
    <v-flex
        primary
        lighten-2
        py-3
        text-xs-center
        white--text
        xs12
      >
        &copy;2018 — <strong>UNOAPP</strong>
      </v-flex>
    </v-layout>
  </v-footer>
  </div>
</template>
<script>
  export default {
    computed : {
      isLoggedIn : function(){ return this.$store.getters.isLoggedIn}
    },
    methods: {
      logout: function () {
        this.$store.dispatch('logout')
        .then(() => {
          this.$router.push('/login')
        })
      }
    },
    created: function () {
      this.$http.interceptors.response.use(undefined, function (err) {
        return new Promise(function (resolve, reject) {
          if (err.status === 401 && err.config && !err.config.__isRetryRequest) {
            this.$store.dispatch(logout)
          }
          throw err;
        });
      });
    }
  }
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  cursor: pointer;
}

#nav a:hover {
  text-decoration: underline;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
.v-footer{
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0
}
</style>
