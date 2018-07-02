<!--Template defines html template-->
<template>
  <v-layout column>
    <v-flex xs1>
      <panel title="Songs">
       <div v-for="song in songs"
       :key= "song.title">
        {{song.title}}
        {{song.artist}}
        {{song.album}}
       </div>
      </panel>
    </v-flex>
  </v-layout>
</template>
<script>
import SongService from '@/services/SongsService'
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
    //   do a request to the backend
    this.songs = await SongService.index()
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
