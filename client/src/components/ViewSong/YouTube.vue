<!--Template defines html template-->
<template>
    <panel title="YouTube Video">
       {{youtubeId}}
    </panel>
</template>
<script>
import Panel from '@/components/Panel'
export default {
  props: [
    'youtubeId'
  ],
  components: {
    Panel
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
