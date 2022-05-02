<template>
  <div class="overview-container">
      
      <LikesWindow :overview="true"/>
  </div>
</template>

<script>
import LikesWindow from './LikesWindow.vue'

export default {
  name: "OverviewWindow",
  components: {
      LikesWindow,
  }
}
</script>

<style scoped>

</style>