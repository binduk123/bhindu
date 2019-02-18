<template>
 <v-layout row>
    <v-flex xs12 sm6 offset-sm3>
      <v-card>
        <v-toolbar color="cyan" dark>
         
          <v-toolbar-title>Location</v-toolbar-title>

          <v-spacer></v-spacer>

        </v-toolbar>

        <v-list two-line>
          <template v-for="(item, index) in response">
            <v-subheader
              v-if="item.header"
              :key="item.header"
            >
              {{ item.header }}
            </v-subheader>

            <v-divider
              v-else-if="item.divider"
              :key="index"
              :inset="item.inset"
            ></v-divider>

            <v-list-tile
              v-else
              :key="item.name"
              avatar
              @click=""
            >
              <v-list-tile-avatar>
                <img :src="item.image_url">
              </v-list-tile-avatar>

              <v-list-tile-content>
                <v-list-tile-title v-html="item.name"></v-list-tile-title>
                <v-list-tile-sub-title v-html="item.desc"></v-list-tile-sub-title>
              </v-list-tile-content>
            </v-list-tile>
          </template>
        </v-list>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  name: 'location',
  data () {
    return {
      response: '',
      error: '',
      logouterror: ''
    }
  },
  mounted () {
    var locid = this.$route.params.id
    this.$http.get('https://multivendor.dev.api.unoapp.io/api/app/menus/full/' + locid, { app_id: 'O2byrCjWfpfa1pf38eQpX34EFz96VCfy', app_secret: 'kKHr0MacflY2qBCHHMSzvZMXTnoW5e9O' })
    .then(result => { this.response = result.data.payload }, error => { console.error(error) })
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