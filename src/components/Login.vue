<template>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
            <v-card class="elevation-12">
              <v-toolbar dark color="primary">
                <v-toolbar-title>Login</v-toolbar-title>
                <v-spacer></v-spacer>
              
              </v-toolbar>
              <v-card-text>
                
									<v-form class="login" @submit.prevent="login">
                  <v-text-field prepend-icon="person" v-model="user_name" v-validate="'required|email'" name="user_name" label="Login" :class="{ 'is-invalid': submitted && errors.has('user_name') }" type="email">
                  <div v-if="submitted && errors.has('user_name')" class="invalid-feedback">{{ errors.first('user_name') }}</div>
                 </v-text-field>
                  <v-text-field id="password" prepend-icon="lock" v-model="password" v-validate="{ required: true, min: 6 }" name="password" :class="{ 'is-invalid': submitted && errors.has('password') }" label="Password" type="password">
								 <div v-if="submitted && errors.has('password')" class="invalid-feedback">{{ errors.first('password') }}</div>
                	</v-text-field>

                   <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn type="submit" color="red white--text">Login</v-btn>
							  </v-card-actions>


                </v-form>
              </v-card-text>
             
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
</template>

<script>
	export default {
		data(){
			return {
				user_name : "",
				password : "",
				submitted: false
			}
		},
		props: {
      source: String
    },
		methods: {
			login(e) {
            this.submitted = true;
            this.$validator.validate().then(valid => {
                if (valid) {
                    	let user_name = this.user_name 
											let password = this.password
											this.$store.dispatch('login', { user_name, password })
											.then(() => this.$router.push('/'))
											.catch(err => console.log(err))
                }
            });
        }
		}
	}
</script>