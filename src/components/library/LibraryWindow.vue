<template>
  <div class="library-window-container">
    <LibraryNavBar/>
    <router-view></router-view>
    <BottomRef/>
  </div>
</template>

<script>
import LibraryNavBar from './LibraryNavBar.vue'
import BottomRef from '../general/BottomRef.vue'

export default {
  name: 'LibraryWindow',
  components: {
    LibraryNavBar,
    BottomRef
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