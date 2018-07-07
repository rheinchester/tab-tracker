<!--Template defines html template-->
<template>
    <v-layout>
        <v-flex xs4>
            <panel title="Song Metadata">
                <v-text-field
                    label="Title"
                    v-model="song.title"
                    required
                    :rules="[required]"
                ></v-text-field>

                <v-text-field
                    label= "Artist"
                    v-model="song.artist"
                    required
                    :rules="[required]"
                ></v-text-field>
                <v-text-field
                    label= "Genre"
                    v-model= "song.genre"
                    required
                    :rules="[required]"
                ></v-text-field>

                <v-text-field
                    label="Album"
                    v-model="song.album"
                    required
                    :rules="[required]"
                ></v-text-field>

                <v-text-field
                    label="Album Image Url"
                    v-model="song.albumImageUrl"
                    required
                    :rules="[required]"
                ></v-text-field>

                <v-text-field
                    label="You tube id"
                    v-model="song.youtubeId"
                    required
                    :rules="[required]"
                ></v-text-field>
            </panel>
        </v-flex>

        <v-flex xs8>
            <panel title="Song Structure" class="ml-4">
            <v-text-field
                    label="Lyrics"
                    multi-line
                    v-model="song.lyrics"
                ></v-text-field>

                <v-text-field
                    label="Tab"
                    multi-line
                    v-model="song.tab"
                ></v-text-field>
                <v-btn
                    dark
                    class="cyan"
                    @click="create">
                    Create Song
                </v-btn>

                <div class="red-alert" v-if="error">
                    {{error}}
                </div>
            </panel>
        </v-flex>
    </v-layout>
</template>
<script>
import Panel from '@/components/Panel'
import SongsService from '@/services/SongsService'
export default {
  data () {
    return {
      song: {
        title: null,
        artist: null,
        genre: null,
        album: null,
        albumImageUrl: null,
        youtubeId: null,
        lyrics: null,
        tab: null
      },
      error: null,
      required: (value) => !!value || 'Required.'
    }
  },
  methods: {
    async create () {
      this.error = null
      const FilledFields = Object
        .keys(this.song)
        .every(key => !!this.song[key])
      if (!FilledFields) {
        this.error = 'Please fill in all required fields'
        return
      }
      try {
        // call API
        await SongsService.post(this.song)
        this.$router.push({
          name: 'songs'
        })
      } catch (err) {
        console.log(err)
      }
    }
  },
  components: {
    Panel
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
