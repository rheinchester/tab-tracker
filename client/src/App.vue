<!--vuetify template-->
<template>
  <div id="app">
    <v-app class="blue-grey lighten-5">
      <page-header/>
      <main>
        <v-container fluid>
           <router-view></router-view>
        </v-container>
      </main>
    </v-app>
  </div>
</template>

<script>
import Register from './components/Register'
import PageHeader from './components/Header'
export default {
  name: 'App',
  components: {
    Register, PageHeader
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
  margin-top: 60px;
}

.input-group--text-field input{
   border-bottom: 1px solid silver;
 }
 .toolbar__title{
  color:#fff
 }
 .btn__content{
   color: #fff
 }
</style>
