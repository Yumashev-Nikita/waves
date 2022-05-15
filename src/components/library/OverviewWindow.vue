<template>
  <div class="overview-window__barrier">
    <div class="overview-window__barrier_text">Likes</div>
  </div>
  <LikesWindow :overviewed='true'/>
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
  .overview-window__barrier {
    display: flex;
    justify-content: center;
    flex-direction: column;
    height: 55px;
    margin-bottom: 20px;
  }
  .overview-window__barrier_text {
    font-size: 17px;
    font-weight: 600;
  }
</style>