<!--Template defines html template-->
<template>
  <v-layout column>
    <v-flex xs1>
      <div class="white elevation-2">
        <v-toolbar flat dense class="light-green accent-4">
          <v-toolbar-title>{{title}}</v-toolbar-title>
        </v-toolbar>

        <div class="pl-4 pr-4 pt-2 pb-2">
            <slot>
              No slot content defined
            </slot>
        </div>
      </div>
    </v-flex>
  </v-layout>
</template>
<script>

export default {
  props: [
    'title'
  ]
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
