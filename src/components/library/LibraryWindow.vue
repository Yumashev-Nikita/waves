<template>
  <div class="library-window-container">
    <LibraryNavBar @change-state="changeState" :state="state"/>
    <LikesWindow v-if="state === 'likes'" :overviewed="false"/>
    <OverviewWindow v-if="state === 'overview'"/>
    <BottomRef/>
  </div>
</template>

<script>
import LibraryNavBar from './LibraryNavBar.vue'
import LikesWindow from './LikesWindow'
import OverviewWindow from './OverviewWindow'
import BottomRef from '../general/BottomRef.vue'

export default {
  name: 'LibraryWindow',
  components: {
    LibraryNavBar,
    LikesWindow,
    OverviewWindow,
    BottomRef
  },
  data() {
    return {
      state: 'overview',
    }
  },
  methods: {
    changeState(state) {
      this.state = state;
    }
  }
}
</script>

<style scoped>
  .library-window-container {
    position: absolute;
    width: 1200px;
    margin-top: 69px;
    margin-right: 30px;
    margin-left: 30px;
  }
</style>