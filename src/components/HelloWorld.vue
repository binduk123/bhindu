<template>
  <v-layout row>
    <v-flex xs12 sm6 offset-sm3>
      <v-card height="200px">
        <v-card-title class="blue white--text">
          <span class="headline">Menu</span>

          <v-spacer></v-spacer>

          <v-menu bottom left>
           
            </v-menu>
        </v-card-title>

        <v-card-text v-for="res in response">
           <router-link :to="{ name: 'location', params: { id: res.id } }">{{ res.name }}</router-link>
</v-card-text>
      </v-card>
    </v-flex>
  </v-layout>
  
</template>


<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      response: null,
      error: '',
      logouterror: ''
    }
  },
  mounted () {
    this.$http.post('https://multivendor.dev.api.unoapp.io/api/app/locations/all', { rpp: 10, paginate: true, brand_id: 25, app_id: 'O2byrCjWfpfa1pf38eQpX34EFz96VCfy', app_secret: 'kKHr0MacflY2qBCHHMSzvZMXTnoW5e9O' })
    .then(result => { this.response = result.data.payload.data }, error => { console.error(error) })
    .catch(() => this.error)
  },
  methods: {
    logout () {
      this.$http.post('https://multivendor.dev.api.unoapp.io/api/application/admin/logout', { app_id: 'O2byrCjWfpfa1pf38eQpX34EFz96VCfy', app_secret: 'kKHr0MacflY2qBCHHMSzvZMXTnoW5e9O', auth_token: 'dfb0ec3023726f77b5b118f10a921197' })
      .then(result => { this.logouturl = 'localhost:8080' }, logouterror => { console.error(logouterror) })
      .catch(() => this.logouterror)
    }
  }
}
</script>

<style>
h3 {
	margin: 40px 0 0;
}
ul {
	list-style-type: none;
	padding: 0;
}
li {
	display: inline-block;
	margin: 0 10px;
}
a {
	color: #42b983;
}
</style>
