<template>
  <TopNavBar/>
  <MainWindow/>
</template>

<script>
import TopNavBar from './components/TopNavBar.vue'
import MainWindow from './components/MainWindow.vue'

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
