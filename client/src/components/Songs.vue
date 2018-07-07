<!--Template defines html template-->
<template>
  <v-layout column>
    <v-flex xs1>
      <panel title="Songs" class="centered-form">
        <router-link class="a-text" slot="action" :to="{name: 'songs-create'}">
          <v-btn
              class="purple"
              right
              light
              medium
              absolute
              middle
              fab>
            <v-icon>add</v-icon>
          </v-btn>
        </router-link>
       <div v-for="song in songs"
       class="song"
       :key= "song.id">
       <v-layout>
         <v-flex xs6>
          <div class="song-title">
            {{song.title}}
          </div>
          <div class="song-artist">
            {{song.artist}}
          </div>
          <div class="song-genre">
            {{song.genre}}
          </div>

          <v-btn
            dark
            class="cyan"
            @click="create">
            Create Song
          </v-btn>
         </v-flex>

         <v-flex xs6>
          <img class="album-image" :src="song.albumImageUrl"/>
         </v-flex>
       </v-layout>
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
.song{
  padding: 20px;
  height: 330px;
  overflow: hidden; 
}
.song-title{
  font-size: 30px
}
.song-artist{
  font-size: 24px
}
.song-genre{
  font-size: 18px
}
.album-image{
  width: 100%;
  margin: 0 auto;
}
</style>
