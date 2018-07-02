<!--Template defines html template-->
<template>
  <v-layout column>
    <v-flex xs1>
      <panel title="Register"></panel>
      <div class="white elevation-2 centered-form">
        <v-toolbar flat dense class="light-green accent-4">
          <v-toolbar-title>Register</v-toolbar-title>
        </v-toolbar>
        <div class="pl-4 pr-4 pt-2 pb-2">
          <form name="tab-tracker-form" autocomplete="off">
            <v-text-field label="Email" v-model="email"
            ></v-text-field>
          <br>
          <br>
          <v-text-field
              label="Password"
              v-model="password"
              type="password"
              autocomplete="new-password"
            ></v-text-field>
            <br>
            <br>
            <div class="error" v-html="error"/>
            <v-btn
              class="cyan"
              @click="register">
              Register
            </v-btn>
          </form>
        </div>
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
import Panel from '@/components/Panel'
export default {
  data () {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  methods: {
    async register () {
      try {
        const response = await AuthenticationService.register({
          email: this.email,
          password: this.password
        })
        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUser', response.data.user)
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  },
  components:{
      Panel
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.error {
  color:red
 }
.centered-form{
  margin: 0 auto;
  width:700px;
}
</style>
