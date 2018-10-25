<!--Template defines html template-->
<template>
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
      <router-link
        :to="{
          name:'song',
          params: {
            songId: song.id
            }
          }"
          class="a-text">
        <v-btn
          dark
          class="cyan">
          View
        </v-btn>
      </router-link>
      </v-flex>

      <v-flex xs6>
      <img class="album-image" :src="song.albumImageUrl"/>
      </v-flex>
    </v-layout>
    </div>
  </panel>
</template>
<script>
import SongsPanel from './SongsPanel'
import SongsService from '@/services/SongsService'
export default {
  components: {
    SongsPanel
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
  transition: .9s cubic-bezier(.25,.8,.5,1);
  white-space: nowrap;
  width: inherit;
}
</style>
