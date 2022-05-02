<template>
  <div class="app-container">
    <LibraryWindow/>
  </div>
</template>

<script>

import LibraryWindow from '../library/LibraryWindow.vue'

export default {
  name: 'MainWindow',
  components: {
    LibraryWindow,
  }
}
</script>

<style scoped>
  .app-container {
    width: 1240px;
    height: 1024px;
    margin-left: 322px;
    background-color: #ffffff;
  }
</style>
