<template>
  <v-toolbar fixed class="blue">
    <!-- This router link approach only works for title-->
    <v-toolbar-title class="mr-4">
      <router-link class="a-text" to="/">
        Tabtracker
      </router-link>
    </v-toolbar-title>

   <!--If you want sign up to be the same as tab-tracker,
   implement navigateTo() from video
   or google a better solution-->
    <!--Implement later-->
    <v-toolbar-items>
      <router-link class="a-text" to="songs">
        <v-btn flat dark>
          Browse
        </v-btn>
      </router-link>
    </v-toolbar-items>

    <v-spacer></v-spacer>

    <v-toolbar-items>
        <!-- <router-link> loops through 'Router.routes' in index.js and looks for register-->
        <router-link class="a-text" to="register">
          <!-- Ensure that <v-btn> is always inside <router-link> -->
          <v-btn flat dark
          v-if="!$store.state.isUserLoggedIn">
            Sign Up
          </v-btn>
        </router-link>

        <router-link class="a-text" to="login">
          <v-btn flat dark
            v-if="!$store.state.isUserLoggedIn">
            Login
          </v-btn>
        </router-link>

        <router-link class="a-text" to="/">
          <!-- Ensure that <v-btn> is always inside <router-link> -->
          <v-btn flat dark
            v-if="  $store.state.isUserLoggedIn">
            Log out
          </v-btn>
        </router-link>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {
  logout () {
    this.$store.dispatch('setToken', null)
    this.$store.dispatch('setUser', null)
  }
}
</script>

<style scoped>
.a-text{
  text-decoration: none;
  -ms-flex-align: center;
  align-items: center;
  border-radius: inherit;
  color: inherit;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  height: inherit;
  -webkit-box-flex: 1;
  -ms-flex: 1 0 auto;
  flex: 1 0 auto;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  margin: 0 auto;
  padding: 0 16px;
  -webkit-transition: .3s cubic-bezier(.25,.8,.5,1);
  transition: .3s cubic-bezier(.25,.8,.5,1);
  white-space: nowrap;
  width: inherit;
}
</style>
