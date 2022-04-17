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
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 1240px;
  height: 100%;
}

</style>
