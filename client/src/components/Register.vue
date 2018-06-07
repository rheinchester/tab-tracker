<!--Template defines html template-->
<template>
  <v-layout column>
    <v-flex xs1>
      <div class="white elevation-2">
        <v-toolbar flat dense class="cyan">
          <v-toolbar-title>Register</v-toolbar-title>
        </v-toolbar>
        <div class="pl-4 pr-4 pt-2 pb-2">
          <v-text-field
            label="Password"
            v-model="email"
          ></v-text-field>
        <br>
        <br>
        <v-text-field
            label="Password"
            v-model="password"
          ></v-text-field>
        <br>
        <br>
        <div class="error" v-html="error"/>
        <v-btn
          class="cyan"
          @click="register">
          Register
        </v-btn>
        </div>
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    async register () {
      try {
        await AuthenticationService.register({
          email: this.email,
          password: this.password
        })
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.error {
  color:red
 }
 
</style>
