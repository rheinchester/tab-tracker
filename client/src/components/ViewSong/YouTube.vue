<!--Template defines html template-->
<template>
  <panel title="YouTube Video">
    <youtube :video-Id="youtubeId" :player-width="500" :player-height="200">
    </youtube>
  </panel>
</template>
<script>
import VueYouTubeEmbed from 'vue-youtube-embed'
export default {
  props: [
    'youtubeId'
  ],
  components: {
    VueYouTubeEmbed
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
