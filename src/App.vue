<template>
  <TopNavBar/>
</template>

<script>
import TopNavBar from './components/TopNavBar.vue'

export default {
  name: 'App',
  components: {
    TopNavBar
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: rgb(230, 230, 230)
}
</style>
