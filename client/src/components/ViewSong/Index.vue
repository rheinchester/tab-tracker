<!--Template defines html template-->
<template>
  <div>
    <v-layout>
      <v-flex xs6>
        <song-metadata :song="song"/>
      </v-flex>

      <v-flex xs6 ml-4>
        <you-tube :youtubeId="song.youtubeId "/>
      </v-flex>
    </v-layout>

    <v-layout mt-2>
        <v-flex xs6>
          <tab :song="song.tab" />
        </v-flex>

        <v-flex xs6 ml-4>
          <lyrics :song="song.lyrics" />
        </v-flex>
      </v-layout>
  </div>
</template>

<script>
import Lyrics from './Lyrics'
import Tab from './Tab'
import SongMetadata from './SongMetadata'
import YouTube from './YouTube'
import SongsService from '@/services/SongsService'
export default {
  data () {
    return {
      song: {}
    }
  },
  async mounted () {
    const songId = this.$store.state.route.params.songId
    this.song = (await SongsService.show(songId)).data
  },
  components: {
    SongMetadata,
    YouTube,
    Lyrics,
    Tab
  }
}
</script>

<!-- Add "scoped " attribute to limit CSS to this component only -->
<style scoped>
.large-area {
  width: 100%;
  font-family: monospace;
  border: none;
  height: 600px;
  border-style: none;
  border-color: transparent;
  overflow: auto;
  padding: 40px;
}
</style>
