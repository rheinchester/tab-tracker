<!--Template defines html template-->
<template>
  <v-layout column>
    <v-flex xs1>
     <panel title="login" class="centered-form">
      <v-text-field
        label="Email"
        v-model="email"
      ></v-text-field>
    <br>
    <br>
    <v-text-field
        label="Password"
        type="password"
        v-model="password"
      ></v-text-field>
      <br>
      <br>
      <div class="error" v-html="error"/>
      <v-btn
        class="cyan"
        @click="login">
        Login
      </v-btn>
     </panel>
    </v-flex>
  </v-layout>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
  data () {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  methods: {
    async login () {
      try {
        const response = await AuthenticationService.login({
          email: this.email,
          password: this.password
        })
        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUser', response.data.user)
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
.centered-form{
  margin: 0 auto;
  width:700px;
}

</style>
