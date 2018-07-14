<!--Template defines html template-->
<template>
    <v-layout>
        <v-flex xs6>
            <panel title="Song Metadata">
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
                    </v-flex>

                    <v-flex xs6>
                        <img class="album-image" :src="song.albumImageUrl"/>
                        <br>
                        {{song.album}}
                    </v-flex>
                </v-layout>
            </panel>
        </v-flex>
        <v-flex xs6 ml-4>
            <panel title="Tabs">
                {{song.tab}}
            </panel>
        </v-flex>

    </v-layout>
</template>
<script>
import SongsService from '@/services/SongsService'
import Panel from '@/components/Panel'
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
    Panel
  }
}
</script>

<!-- Add "scoped " attribute to limit CSS to this component only -->
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
