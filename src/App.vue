<template>
  <TopNavBar/>
  <MainWindow/>
</template>

<script>
import TopNavBar from './components/core/TopNavBar.vue'
import MainWindow from './components/core/MainWindow.vue'

export default {
  name: 'App',
  components: {
    TopNavBar,
    MainWindow
  }
}
</script>

<style>
#app {
  font-family: 'Inter', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100%;
}
body {
  background-color: #EFFFFD;
}
</style>
