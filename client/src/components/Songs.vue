<!--Template defines html template-->
<template>
  <v-layout column>
    <v-flex xs1>
      <panel title="Songs" class="centered-form">
       <div v-for="song in songs"
       :key= "song.id">
        {{song.title}}
        {{song.artist}}
        {{song.album}}
       </div>
      </panel>
    </v-flex>
  </v-layout>
</template>
<script>
import SongsService from '@/services/SongsService'
import Panel from '@/components/Panel'
export default {
  components: {
    Panel
  },
  data () {
    return {
      songs: null
    }
  },
  async mounted () {
    // do a request to the back end
    this.songs = (await SongsService.index()).data
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
